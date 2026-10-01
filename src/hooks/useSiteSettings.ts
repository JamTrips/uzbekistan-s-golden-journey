import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export type SiteSettings = {
  phone: string | null;
  whatsapp: string | null;
  telegram: string | null;
  email: string | null;
  [key: string]: unknown;
};

const FALLBACK = { phone: '+998990152110', whatsapp: '998990152110', telegram: '+998990152110', email: null };

export const useSiteSettings = () =>
  useQuery({
    queryKey: ['site_settings'],
    queryFn: async () => {
      const { data, error } = await supabase.from('site_settings').select('*').eq('id', 1).maybeSingle();
      if (error) throw error;
      return (data ?? FALLBACK) as SiteSettings;
    },
    staleTime: 60_000,
  });

/** Contact links derived from settings, with safe fallbacks. */
export const useContactLinks = () => {
  const { data } = useSiteSettings();
  const s = data ?? FALLBACK;
  const digits = (v: string | null | undefined, fb: string) => (v || fb).replace(/[^\d]/g, '');
  const wa = digits(s.whatsapp, FALLBACK.whatsapp);
  const phone = digits(s.phone, FALLBACK.whatsapp);
  const tg = (s.telegram || FALLBACK.telegram).trim();
  const telegramUrl = tg.startsWith('http') ? tg : tg.startsWith('@') ? `https://t.me/${tg.slice(1)}` : `https://t.me/+${tg.replace(/[^\d]/g, '')}`;
  return {
    whatsappUrl: `https://wa.me/${wa}`,
    whatsappNumber: wa,
    telegramUrl,
    phoneUrl: `tel:+${phone}`,
    phoneDisplay: s.phone || FALLBACK.phone,
    email: s.email,
  };
};
