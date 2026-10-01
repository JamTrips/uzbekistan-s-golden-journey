CREATE OR REPLACE FUNCTION public.is_staff(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role IN ('admin','editor'))
$$;

CREATE TABLE public.site_settings (
  id integer PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  phone text, whatsapp text, telegram text, email text,
  address_en text, address_ru text,
  instagram text, facebook text, youtube text,
  hero_title_en text, hero_title_ru text, hero_subtitle_en text, hero_subtitle_ru text, hero_image text,
  footer_text_en text, footer_text_ru text,
  seo_title_en text, seo_title_ru text, seo_description_en text, seo_description_ru text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.site_settings TO anon, authenticated;
GRANT INSERT, UPDATE ON public.site_settings TO authenticated;
GRANT ALL ON public.site_settings TO service_role;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Staff write settings" ON public.site_settings FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE TRIGGER trg_site_settings_updated BEFORE UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
INSERT INTO public.site_settings (id, phone, whatsapp, telegram, email) VALUES (1, '+998990152110', '998990152110', '+998990152110', 'info@jamtrips.uz');

CREATE TABLE public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (length(trim(name)) > 0),
  phone text NOT NULL CHECK (length(trim(phone)) > 0),
  email text, message text, subject text,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new','in_progress','done')),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.inquiries TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.inquiries TO authenticated;
GRANT ALL ON public.inquiries TO service_role;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit inquiry" ON public.inquiries FOR INSERT WITH CHECK (status = 'new');
CREATE POLICY "Staff manage inquiries" ON public.inquiries FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));

CREATE POLICY "Staff manage tours" ON public.tours FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff manage cities" ON public.cities FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff manage bookings" ON public.bookings FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));