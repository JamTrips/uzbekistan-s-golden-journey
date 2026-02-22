import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2, Eye, EyeOff } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import TourFormDialog from '@/components/admin/TourFormDialog';

export interface Tour {
  id: string;
  title_ru: string;
  title_en: string | null;
  short_description_ru: string | null;
  short_description_en: string | null;
  full_description_ru: string | null;
  full_description_en: string | null;
  price: number;
  currency: string;
  duration: string | null;
  location: string | null;
  tour_type: string;
  included_ru: string[] | null;
  included_en: string[] | null;
  excluded_ru: string[] | null;
  excluded_en: string[] | null;
  cover_image: string | null;
  gallery_images: string[] | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

const AdminTours = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);

  const fetchTours = async () => {
    const { data, error } = await supabase
      .from('tours')
      .select('*')
      .order('sort_order', { ascending: true });
    if (error) {
      toast({ title: 'Ошибка', description: error.message, variant: 'destructive' });
    } else {
      setTours(data as Tour[]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchTours(); }, []);

  const togglePublish = async (tour: Tour) => {
    const { error } = await supabase.from('tours').update({ is_published: !tour.is_published }).eq('id', tour.id);
    if (error) {
      toast({ title: 'Ошибка', description: error.message, variant: 'destructive' });
    } else {
      fetchTours();
    }
  };

  const deleteTour = async (id: string) => {
    if (!confirm('Удалить экскурсию?')) return;
    const { error } = await supabase.from('tours').delete().eq('id', id);
    if (error) {
      toast({ title: 'Ошибка', description: error.message, variant: 'destructive' });
    } else {
      fetchTours();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif font-bold">Экскурсии</h2>
        <Button onClick={() => { setEditingTour(null); setDialogOpen(true); }} className="gap-2">
          <Plus className="h-4 w-4" /> Добавить
        </Button>
      </div>

      {loading ? (
        <p>Загрузка...</p>
      ) : tours.length === 0 ? (
        <p className="text-muted-foreground">Нет экскурсий. Нажмите «Добавить» чтобы создать первую.</p>
      ) : (
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Название</TableHead>
                <TableHead>Цена</TableHead>
                <TableHead>Локация</TableHead>
                <TableHead>Тип</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tours.map(tour => (
                <TableRow key={tour.id}>
                  <TableCell className="font-medium">{tour.title_ru}</TableCell>
                  <TableCell>{tour.price} {tour.currency}</TableCell>
                  <TableCell>{tour.location || '—'}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{tour.tour_type === 'group' ? 'Групповая' : 'Индивидуальная'}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={tour.is_published ? 'default' : 'outline'}>
                      {tour.is_published ? 'Опубликована' : 'Скрыта'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-1">
                    <Button size="icon" variant="ghost" onClick={() => togglePublish(tour)} title={tour.is_published ? 'Скрыть' : 'Опубликовать'}>
                      {tour.is_published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => { setEditingTour(tour); setDialogOpen(true); }}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => deleteTour(tour.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <TourFormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        tour={editingTour}
        onSaved={fetchTours}
      />
    </div>
  );
};

export default AdminTours;
