import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface Booking {
  id: string;
  tour_id: string | null;
  customer_name: string;
  customer_email: string | null;
  customer_phone: string;
  preferred_date: string | null;
  guests_count: number | null;
  message: string | null;
  status: string;
  created_at: string;
  tours?: { title_ru: string } | null;
}

const statusColors: Record<string, string> = {
  new: 'default',
  confirmed: 'secondary',
  cancelled: 'destructive',
  completed: 'outline',
};

const statusLabels: Record<string, string> = {
  new: 'Новая',
  confirmed: 'Подтверждена',
  cancelled: 'Отменена',
  completed: 'Завершена',
};

const AdminBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    const { data, error } = await supabase
      .from('bookings')
      .select('*, tours(title_ru)')
      .order('created_at', { ascending: false });
    if (error) {
      toast({ title: 'Ошибка', description: error.message, variant: 'destructive' });
    } else {
      setBookings(data as Booking[]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchBookings(); }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('bookings').update({ status }).eq('id', id);
    if (error) {
      toast({ title: 'Ошибка', description: error.message, variant: 'destructive' });
    } else {
      fetchBookings();
    }
  };

  if (loading) return <p>Загрузка...</p>;

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">Заявки на бронирование</h2>
      {bookings.length === 0 ? (
        <p className="text-muted-foreground">Заявок пока нет.</p>
      ) : (
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Дата</TableHead>
                <TableHead>Имя</TableHead>
                <TableHead>Телефон</TableHead>
                <TableHead>Экскурсия</TableHead>
                <TableHead>Дата тура</TableHead>
                <TableHead>Гости</TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map(b => (
                <TableRow key={b.id}>
                  <TableCell className="text-xs">{format(new Date(b.created_at), 'dd.MM.yyyy HH:mm')}</TableCell>
                  <TableCell className="font-medium">{b.customer_name}</TableCell>
                  <TableCell>{b.customer_phone}</TableCell>
                  <TableCell>{b.tours?.title_ru || '—'}</TableCell>
                  <TableCell>{b.preferred_date || '—'}</TableCell>
                  <TableCell>{b.guests_count}</TableCell>
                  <TableCell>
                    <Select value={b.status} onValueChange={v => updateStatus(b.id, v)}>
                      <SelectTrigger className="w-36">
                        <Badge variant={statusColors[b.status] as any}>{statusLabels[b.status]}</Badge>
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(statusLabels).map(([key, label]) => (
                          <SelectItem key={key} value={key}>{label}</SelectItem>
                        ))}
                      </SelectContent>
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

export default AdminBookings;
