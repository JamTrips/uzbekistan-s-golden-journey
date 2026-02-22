
-- Drop the overly permissive policy
DROP POLICY "Anyone can create bookings" ON public.bookings;

-- Create a more restrictive policy that still allows public inserts but validates data
CREATE POLICY "Anyone can create bookings" ON public.bookings
  FOR INSERT WITH CHECK (
    customer_name IS NOT NULL AND length(trim(customer_name)) > 0
    AND customer_phone IS NOT NULL AND length(trim(customer_phone)) > 0
  );
