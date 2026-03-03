
-- Create cities table
CREATE TABLE public.cities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name_ru text NOT NULL,
  name_en text,
  subtitle_ru text,
  subtitle_en text,
  description_ru text,
  description_en text,
  overview_ru text,
  overview_en text,
  overview_secondary_ru text,
  overview_secondary_en text,
  hero_image_url text,
  seo_title_ru text,
  seo_title_en text,
  seo_description_ru text,
  seo_description_en text,
  icon text DEFAULT 'landmark',
  card_layout text DEFAULT 'detailed',
  cta_title_ru text,
  cta_title_en text,
  cta_description_ru text,
  cta_description_en text,
  shared_included_ru text[],
  shared_included_en text[],
  shared_not_included_ru text[],
  shared_not_included_en text[],
  shared_who_for_ru text[],
  shared_who_for_en text[],
  sort_order integer DEFAULT 0,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.cities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published cities" ON public.cities
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins full access to cities" ON public.cities
  FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_cities_updated_at
  BEFORE UPDATE ON public.cities
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Extend tours table with city-specific fields
ALTER TABLE public.tours
  ADD COLUMN city_id uuid REFERENCES public.cities(id) ON DELETE SET NULL,
  ADD COLUMN route_ru text,
  ADD COLUMN route_en text,
  ADD COLUMN tour_type_icon text DEFAULT 'car',
  ADD COLUMN start_time_ru text,
  ADD COLUMN start_time_en text,
  ADD COLUMN program_ru text[],
  ADD COLUMN program_en text[],
  ADD COLUMN languages_ru text,
  ADD COLUMN languages_en text,
  ADD COLUMN group_type_ru text,
  ADD COLUMN group_type_en text,
  ADD COLUMN meeting_point_ru text,
  ADD COLUMN meeting_point_en text,
  ADD COLUMN price_text_ru text,
  ADD COLUMN price_text_en text,
  ADD COLUMN badge_ru text,
  ADD COLUMN badge_en text,
  ADD COLUMN badge_color text,
  ADD COLUMN highlights_ru text[],
  ADD COLUMN highlights_en text[];

CREATE INDEX idx_tours_city_id ON public.tours(city_id);
