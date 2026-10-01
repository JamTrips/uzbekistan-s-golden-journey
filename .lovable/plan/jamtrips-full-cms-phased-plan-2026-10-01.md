# JamTrips full CMS — phased plan

A basic CMS already exists (login at /admin, tours, bookings, cities tables). This plan extends it to cover all site content without changing the public design or routes. The work is too big for one pass, so it ships in phases. Each phase leaves the site working.

## Phase 1 — Base setup and access
- Add an `editor` role next to `admin`. Admins and editors can change content. Visitors see published items only.
- Add /admin/login (keep /admin working by redirecting it there). No public sign-up.
- Create the admin account for d.mulladjanov@gmail.com. You set the password with a "reset password" link (instructions below).
- New admin layout: sidebar in Russian, navy and gold, works on phones. Includes a dashboard with counts.
- Shared form tools: EN/RU tabs, photo upload (drag and drop, preview, gallery reorder), add/remove rows for lists, slug made from the EN title, checks before saving, notifications, and a warning if you leave with unsaved changes.
- Shared list tools: search, publish toggle, drag to reorder, edit, duplicate, delete with confirmation.

## Phase 2 — Settings and contacts (affects every page)
- One settings record: phone, WhatsApp, Telegram, email, address, social links, hero text and image, footer text, default SEO.
- Header phone, footer, floating WhatsApp/Telegram/Call buttons and all per-tour contact buttons read from these settings.
- Inquiries: the booking and contact forms save here. Status filter (new / in progress / done).

## Phase 3 — Destinations and day trips
- Keep the existing cities and tours data. Add the missing fields: gallery, highlights, meeting point, and so on.
- The 5 city pages, /destinations and the home page destination cards load from the database. The layout stays as it is now.
- Copy in all current hardcoded tours: 15 Samarkand, 5 Tashkent, 4 Bukhara, plus Khiva and Shakhrisabz.

## Phase 4 — Multi-day tours, transfers, tickets
- New sections with day-by-day itineraries, ordered city lists, and price from.
- Copy in current content: "Complete Silk Road Journey" and the other tours, all transfers, and the Afrosiyob train routes as tickets.
- The Multi-day Tours and Transfers pages load from the database. Transfers stay without prices unless you add them.

## Phase 5 — Reviews, About, home blocks, media, users
- Reviews, About page sections, and editable text blocks for the home page and other pages.
- Media library: browse, upload and delete photos.
- Users page (admins only): add and remove editors.
- Page titles and descriptions come from the database.

## Things you set up yourself afterwards
1. Set the admin password with the reset link sent to your email.
2. Check the copied content in each section and publish it.
3. Add editors from the Users page if you need them.

## Technical details
- Supabase: new tables have `*_en`/`*_ru` columns, `is_published`, `sort_order` and timestamps, plus GRANTs and RLS (`has_role` admin OR editor for writes, published-only for anon reads). Extend `app_role` with `editor`.
- Reuse the existing `tours` (day trips) and `cities` (destinations) tables through additive columns. No renames.
- React Query hooks per entity, zod schemas, a generic `CrudTable` and `EntityForm`, dnd-kit for reordering, and the existing public `tour-images` bucket.
- Public pages keep their current JSX and styling. Only the data source changes, and the current static data is used as a fallback while loading.
- Admin user: created through an edge function / auth admin, role inserted with run_sql.
