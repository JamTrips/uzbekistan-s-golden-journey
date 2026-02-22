
-- Role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- User roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function for role check
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS for user_roles
CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Tours table
CREATE TABLE public.tours (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ru TEXT NOT NULL,
  title_en TEXT,
  short_description_ru TEXT,
  short_description_en TEXT,
  full_description_ru TEXT,
  full_description_en TEXT,
  price NUMERIC NOT NULL DEFAULT 0,
  currency TEXT NOT NULL DEFAULT 'USD',
  duration TEXT,
  location TEXT,
  tour_type TEXT NOT NULL DEFAULT 'individual' CHECK (tour_type IN ('group', 'individual')),
  included_ru TEXT[],
  included_en TEXT[],
  excluded_ru TEXT[],
  excluded_en TEXT[],
  cover_image TEXT,
  gallery_images TEXT[],
  is_published BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.tours ENABLE ROW LEVEL SECURITY;

-- Anyone can read published tours
CREATE POLICY "Public can view published tours" ON public.tours
  FOR SELECT USING (is_published = true);
-- Admins can do everything
CREATE POLICY "Admins full access to tours" ON public.tours
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tour_id UUID REFERENCES public.tours(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT,
  customer_phone TEXT NOT NULL,
  preferred_date DATE,
  guests_count INTEGER DEFAULT 1,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'confirmed', 'cancelled', 'completed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Anyone can create bookings (public form)
CREATE POLICY "Anyone can create bookings" ON public.bookings
  FOR INSERT WITH CHECK (true);
-- Admins can view and manage bookings
CREATE POLICY "Admins full access to bookings" ON public.bookings
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_tours_updated_at
  BEFORE UPDATE ON public.tours
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for tours
ALTER PUBLICATION supabase_realtime ADD TABLE public.tours;

-- Storage bucket for tour images
INSERT INTO storage.buckets (id, name, public) VALUES ('tour-images', 'tour-images', true);

-- Storage policies
CREATE POLICY "Public can view tour images" ON storage.objects
  FOR SELECT USING (bucket_id = 'tour-images');
CREATE POLICY "Admins can upload tour images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'tour-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update tour images" ON storage.objects
  FOR UPDATE USING (bucket_id = 'tour-images' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete tour images" ON storage.objects
  FOR DELETE USING (bucket_id = 'tour-images' AND public.has_role(auth.uid(), 'admin'));
