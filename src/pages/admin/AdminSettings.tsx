import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const groups: { title: string; fields: [string, string, boolean?][] }[] = [
  { title: 'Контакты', fields: [['phone', 'Телефон'], ['whatsapp', 'WhatsApp (номер)'], ['telegram', 'Telegram (номер, @username или ссылка)'], ['email', 'Email'], ['address_ru', 'Адрес (RU)'], ['address_en', 'Адрес (EN)']] },
  { title: 'Соцсети', fields: [['instagram', 'Instagram'], ['facebook', 'Facebook'], ['youtube', 'YouTube']] },
  { title: 'Главный экран', fields: [['hero_title_ru', 'Заголовок (RU)'], ['hero_title_en', 'Заголовок (EN)'], ['hero_subtitle_ru', 'Подзаголовок (RU)', true], ['hero_subtitle_en', 'Подзаголовок (EN)', true], ['hero_image', 'Ссылка на фото']] },
  { title: 'Подвал и SEO', fields: [['footer_text_ru', 'Текст подвала (RU)', true], ['footer_text_en', 'Текст подвала (EN)', true], ['seo_title_ru', 'SEO заголовок (RU)'], ['seo_title_en', 'SEO заголовок (EN)'], ['seo_description_ru', 'SEO описание (RU)', true], ['seo_description_en', 'SEO описание (EN)', true]] },
];

const AdminSettings = () => {
  const { data, isLoading } = useSiteSettings();
  const qc = useQueryClient();
  const [form, setForm] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data) setForm(Object.fromEntries(Object.entries(data).map(([k, v]) => [k, (v as string) ?? ''])));
  }, [data]);

  const save = async () => {
    setSaving(true);
    const payload: Record<string, string | null> = {};
    groups.forEach(g => g.fields.forEach(([k]) => { payload[k] = form[k]?.trim() || null; }));
    const { error } = await supabase.from('site_settings').upsert({ id: 1, ...payload });
    setSaving(false);
    if (error) return toast({ title: 'Ошибка', description: error.message, variant: 'destructive' });
    qc.invalidateQueries({ queryKey: ['site_settings'] });
    toast({ title: 'Сохранено' });
  };

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif font-bold">Контакты и настройки</h2>
        <Button onClick={save} disabled={saving}>{saving ? 'Сохранение...' : 'Сохранить'}</Button>
      </div>
      {groups.map(g => (
        <Card key={g.title}>
          <CardHeader><CardTitle className="text-lg">{g.title}</CardTitle></CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {g.fields.map(([k, label, long]) => (
              <div key={k} className={long ? 'md:col-span-2 space-y-2' : 'space-y-2'}>
                <Label htmlFor={k}>{label}</Label>
                {long
                  ? <Textarea id={k} value={form[k] ?? ''} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} />
                  : <Input id={k} value={form[k] ?? ''} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} />}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminSettings;
