import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, ClipboardList, Eye } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ tours: 0, published: 0, bookings: 0, newBookings: 0 });

  useEffect(() => {
    const load = async () => {
      const [toursRes, publishedRes, bookingsRes, newRes] = await Promise.all([
        supabase.from('tours').select('id', { count: 'exact', head: true }),
        supabase.from('tours').select('id', { count: 'exact', head: true }).eq('is_published', true),
        supabase.from('bookings').select('id', { count: 'exact', head: true }),
        supabase.from('bookings').select('id', { count: 'exact', head: true }).eq('status', 'new'),
      ]);
      setStats({
        tours: toursRes.count ?? 0,
        published: publishedRes.count ?? 0,
        bookings: bookingsRes.count ?? 0,
        newBookings: newRes.count ?? 0,
      });
    };
    load();
  }, []);

  const cards = [
    { title: 'Всего экскурсий', value: stats.tours, icon: Map },
    { title: 'Опубликовано', value: stats.published, icon: Eye },
    { title: 'Всего заявок', value: stats.bookings, icon: ClipboardList },
    { title: 'Новые заявки', value: stats.newBookings, icon: ClipboardList },
  ];

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">Панель управления</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(c => (
          <Card key={c.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{c.title}</CardTitle>
              <c.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{c.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
