import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

type Inquiry = { id: string; name: string; phone: string; email: string | null; subject: string | null; message: string | null; status: string; created_at: string };
const STATUS: Record<string, string> = { new: 'Новая', in_progress: 'В работе', done: 'Обработана' };

const AdminInquiries = () => {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [filter, setFilter] = useState('all');

  const load = async () => {
    let q = supabase.from('inquiries').select('*').order('created_at', { ascending: false });
    if (filter !== 'all') q = q.eq('status', filter);
    const { data, error } = await q;
    if (error) toast({ title: 'Ошибка', description: error.message, variant: 'destructive' });
    else setItems(data as Inquiry[]);
  };
  useEffect(() => { load(); }, [filter]);

  const setStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('inquiries').update({ status }).eq('id', id);
    if (error) toast({ title: 'Ошибка', description: error.message, variant: 'destructive' });
    else load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <h2 className="text-2xl font-serif font-bold">Обращения</h2>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все</SelectItem>
            {Object.entries(STATUS).map(([k, v]) => <SelectItem key={k} value={k}>{v}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      {items.length === 0 ? <p className="text-muted-foreground">Обращений нет.</p> : (
        <div className="border rounded-lg overflow-x-auto">
          <Table>
            <TableHeader><TableRow><TableHead>Дата</TableHead><TableHead>Имя</TableHead><TableHead>Телефон</TableHead><TableHead>Тема</TableHead><TableHead>Сообщение</TableHead><TableHead>Статус</TableHead></TableRow></TableHeader>
            <TableBody>
              {items.map(i => (
                <TableRow key={i.id}>
                  <TableCell className="whitespace-nowrap">{new Date(i.created_at).toLocaleString('ru-RU')}</TableCell>
                  <TableCell className="font-medium">{i.name}</TableCell>
                  <TableCell><a href={`tel:${i.phone}`} className="text-primary">{i.phone}</a></TableCell>
                  <TableCell>{i.subject || '—'}</TableCell>
                  <TableCell className="max-w-xs">{i.message || '—'}</TableCell>
                  <TableCell>
                    <Select value={i.status} onValueChange={v => setStatus(i.id, v)}>
                      <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
                      <SelectContent>{Object.entries(STATUS).map(([k, v]) => <SelectItem key={k} value={k}>{v}</SelectItem>)}</SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AdminInquiries;
