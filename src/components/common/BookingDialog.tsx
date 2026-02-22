import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface Props {
  tourId?: string;
  tourName?: string;
  children: React.ReactNode;
}

const BookingDialog = ({ tourId, tourName, children }: Props) => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', guests: 1, message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: language === 'en' ? 'Please fill required fields' : 'Заполните обязательные поля', variant: 'destructive' });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from('bookings').insert({
      tour_id: tourId || null,
      customer_name: form.name.trim(),
      customer_phone: form.phone.trim(),
      customer_email: form.email.trim() || null,
      preferred_date: form.date || null,
      guests_count: form.guests,
      message: form.message.trim() || null,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: language === 'en' ? 'Error' : 'Ошибка', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: language === 'en' ? 'Booking sent!' : 'Заявка отправлена!', description: language === 'en' ? 'We will contact you soon' : 'Мы свяжемся с вами в ближайшее время' });
      setOpen(false);
      setForm({ name: '', phone: '', email: '', date: '', guests: 1, message: '' });
    }
  };

  const set = (key: string, value: any) => setForm(prev => ({ ...prev, [key]: value }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif">
            {language === 'en' ? 'Book a Tour' : 'Забронировать'}
          </DialogTitle>
          {tourName && <p className="text-sm text-muted-foreground">{tourName}</p>}
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <Label>{language === 'en' ? 'Name' : 'Имя'} *</Label>
            <Input value={form.name} onChange={e => set('name', e.target.value)} required />
          </div>
          <div className="space-y-1">
            <Label>{language === 'en' ? 'Phone' : 'Телефон'} *</Label>
            <Input value={form.phone} onChange={e => set('phone', e.target.value)} required placeholder="+998..." />
          </div>
          <div className="space-y-1">
            <Label>Email</Label>
            <Input type="email" value={form.email} onChange={e => set('email', e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label>{language === 'en' ? 'Preferred date' : 'Дата'}</Label>
              <Input type="date" value={form.date} onChange={e => set('date', e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>{language === 'en' ? 'Guests' : 'Гостей'}</Label>
              <Input type="number" min={1} value={form.guests} onChange={e => set('guests', Number(e.target.value))} />
            </div>
          </div>
          <div className="space-y-1">
            <Label>{language === 'en' ? 'Message' : 'Сообщение'}</Label>
            <Textarea value={form.message} onChange={e => set('message', e.target.value)} rows={2} />
          </div>
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? (language === 'en' ? 'Sending...' : 'Отправка...') : (language === 'en' ? 'Send Booking' : 'Отправить заявку')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
