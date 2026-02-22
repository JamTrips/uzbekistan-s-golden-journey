import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { Upload, X } from 'lucide-react';
import type { Tour } from '@/pages/admin/AdminTours';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tour: Tour | null;
  onSaved: () => void;
}

const emptyForm = {
  title_ru: '', title_en: '',
  short_description_ru: '', short_description_en: '',
  full_description_ru: '', full_description_en: '',
  price: 0, currency: 'USD', duration: '', location: '',
  tour_type: 'individual',
  included_ru: '', included_en: '',
  excluded_ru: '', excluded_en: '',
  is_published: false, sort_order: 0,
};

const TourFormDialog = ({ open, onOpenChange, tour, onSaved }: Props) => {
  const [form, setForm] = useState(emptyForm);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [saving, setSaving] = useState(false);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  useEffect(() => {
    if (tour) {
      setForm({
        title_ru: tour.title_ru, title_en: tour.title_en || '',
        short_description_ru: tour.short_description_ru || '', short_description_en: tour.short_description_en || '',
        full_description_ru: tour.full_description_ru || '', full_description_en: tour.full_description_en || '',
        price: tour.price, currency: tour.currency, duration: tour.duration || '', location: tour.location || '',
        tour_type: tour.tour_type,
        included_ru: (tour.included_ru || []).join('\n'), included_en: (tour.included_en || []).join('\n'),
        excluded_ru: (tour.excluded_ru || []).join('\n'), excluded_en: (tour.excluded_en || []).join('\n'),
        is_published: tour.is_published, sort_order: tour.sort_order,
      });
      setCoverPreview(tour.cover_image);
    } else {
      setForm(emptyForm);
      setCoverPreview(null);
    }
    setCoverFile(null);
    setGalleryFiles([]);
  }, [tour, open]);

  const uploadFile = async (file: File, path: string) => {
    const { error } = await supabase.storage.from('tour-images').upload(path, file, { upsert: true });
    if (error) throw error;
    const { data } = supabase.storage.from('tour-images').getPublicUrl(path);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let cover_image = tour?.cover_image || null;
      let gallery_images = tour?.gallery_images || [];

      if (coverFile) {
        const path = `covers/${Date.now()}-${coverFile.name}`;
        cover_image = await uploadFile(coverFile, path);
      }

      if (galleryFiles.length > 0) {
        const urls = await Promise.all(
          galleryFiles.map(f => uploadFile(f, `gallery/${Date.now()}-${f.name}`))
        );
        gallery_images = [...(gallery_images || []), ...urls];
      }

      const payload = {
        title_ru: form.title_ru,
        title_en: form.title_en || null,
        short_description_ru: form.short_description_ru || null,
        short_description_en: form.short_description_en || null,
        full_description_ru: form.full_description_ru || null,
        full_description_en: form.full_description_en || null,
        price: form.price,
        currency: form.currency,
        duration: form.duration || null,
        location: form.location || null,
        tour_type: form.tour_type,
        included_ru: form.included_ru ? form.included_ru.split('\n').filter(Boolean) : null,
        included_en: form.included_en ? form.included_en.split('\n').filter(Boolean) : null,
        excluded_ru: form.excluded_ru ? form.excluded_ru.split('\n').filter(Boolean) : null,
        excluded_en: form.excluded_en ? form.excluded_en.split('\n').filter(Boolean) : null,
        cover_image,
        gallery_images,
        is_published: form.is_published,
        sort_order: form.sort_order,
      };

      if (tour) {
        const { error } = await supabase.from('tours').update(payload).eq('id', tour.id);
        if (error) throw error;
        toast({ title: 'Экскурсия обновлена' });
      } else {
        const { error } = await supabase.from('tours').insert(payload);
        if (error) throw error;
        toast({ title: 'Экскурсия создана' });
      }

      onOpenChange(false);
      onSaved();
    } catch (err: any) {
      toast({ title: 'Ошибка', description: err.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  const set = (key: string, value: any) => setForm(prev => ({ ...prev, [key]: value }));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif">{tour ? 'Редактировать экскурсию' : 'Новая экскурсия'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Название (RU) *</Label>
              <Input value={form.title_ru} onChange={e => set('title_ru', e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Title (EN)</Label>
              <Input value={form.title_en} onChange={e => set('title_en', e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Краткое описание (RU)</Label>
              <Textarea value={form.short_description_ru} onChange={e => set('short_description_ru', e.target.value)} rows={2} />
            </div>
            <div className="space-y-2">
              <Label>Short description (EN)</Label>
              <Textarea value={form.short_description_en} onChange={e => set('short_description_en', e.target.value)} rows={2} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Полное описание (RU)</Label>
              <Textarea value={form.full_description_ru} onChange={e => set('full_description_ru', e.target.value)} rows={4} />
            </div>
            <div className="space-y-2">
              <Label>Full description (EN)</Label>
              <Textarea value={form.full_description_en} onChange={e => set('full_description_en', e.target.value)} rows={4} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Цена *</Label>
              <Input type="number" value={form.price} onChange={e => set('price', Number(e.target.value))} required min={0} />
            </div>
            <div className="space-y-2">
              <Label>Валюта</Label>
              <Select value={form.currency} onValueChange={v => set('currency', v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="UZS">UZS</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Длительность</Label>
              <Input value={form.duration} onChange={e => set('duration', e.target.value)} placeholder="3 часа" />
            </div>
            <div className="space-y-2">
              <Label>Локация</Label>
              <Input value={form.location} onChange={e => set('location', e.target.value)} placeholder="Самарканд" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Тип тура</Label>
              <Select value={form.tour_type} onValueChange={v => set('tour_type', v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Индивидуальная</SelectItem>
                  <SelectItem value="group">Групповая</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 flex items-end gap-2">
              <div className="flex items-center gap-2">
                <Switch checked={form.is_published} onCheckedChange={v => set('is_published', v)} />
                <Label>Опубликовать</Label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Что включено (RU, каждый пункт с новой строки)</Label>
              <Textarea value={form.included_ru} onChange={e => set('included_ru', e.target.value)} rows={3} placeholder="Транспорт&#10;Гид&#10;Вода" />
            </div>
            <div className="space-y-2">
              <Label>Included (EN)</Label>
              <Textarea value={form.included_en} onChange={e => set('included_en', e.target.value)} rows={3} placeholder="Transport&#10;Guide&#10;Water" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Что не включено (RU)</Label>
              <Textarea value={form.excluded_ru} onChange={e => set('excluded_ru', e.target.value)} rows={3} />
            </div>
            <div className="space-y-2">
              <Label>Not included (EN)</Label>
              <Textarea value={form.excluded_en} onChange={e => set('excluded_en', e.target.value)} rows={3} />
            </div>
          </div>

          {/* Cover Image */}
          <div className="space-y-2">
            <Label>Обложка</Label>
            {(coverPreview || coverFile) && (
              <div className="relative w-32 h-20 rounded overflow-hidden">
                <img src={coverFile ? URL.createObjectURL(coverFile) : coverPreview!} alt="cover" className="w-full h-full object-cover" />
                <button type="button" onClick={() => { setCoverFile(null); setCoverPreview(null); }} className="absolute top-1 right-1 bg-background/80 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            <label className="flex items-center gap-2 cursor-pointer text-sm text-primary hover:underline">
              <Upload className="h-4 w-4" />
              Загрузить обложку
              <input type="file" accept="image/*" className="hidden" onChange={e => { if (e.target.files?.[0]) setCoverFile(e.target.files[0]); }} />
            </label>
          </div>

          {/* Gallery */}
          <div className="space-y-2">
            <Label>Галерея</Label>
            <div className="flex gap-2 flex-wrap">
              {tour?.gallery_images?.map((url, i) => (
                <div key={i} className="w-20 h-20 rounded overflow-hidden">
                  <img src={url} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
              {galleryFiles.map((f, i) => (
                <div key={`new-${i}`} className="w-20 h-20 rounded overflow-hidden border-2 border-primary/20">
                  <img src={URL.createObjectURL(f)} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-primary hover:underline">
              <Upload className="h-4 w-4" />
              Добавить фото
              <input type="file" accept="image/*" multiple className="hidden" onChange={e => { if (e.target.files) setGalleryFiles(prev => [...prev, ...Array.from(e.target.files!)]); }} />
            </label>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Отмена</Button>
            <Button type="submit" disabled={saving}>{saving ? 'Сохранение...' : 'Сохранить'}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TourFormDialog;
