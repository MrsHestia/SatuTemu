Title: feat(ui): modern-warm theme — Fraunces + Inter, theme tokens, clean styles

Summary:

This PR implements a visual redesign guided by the "modern warm" direction agreed earlier. Changes are UI-only: fonts, colors, spacing, and styling. No application logic, state, or behavior were modified.

What I changed
- Added Fraunces (display) and Inter (body) fonts in index.html
- Added theme tokens (CSS variables) and a small helper class in src/index.css
- Extended tailwind.config.js with the modern-warm color palette and fontFamily
- Updated src/App.jsx to apply the new theme across Landing, Matchmaker, Talents, TalentDetail, Profile and BottomNav
- WhatsApp CTA in TalentDetail uses a prefilled message: "Halo, saya mau booking [layanan] dengan [nama]."

Notes & follow-ups
- The theme tokens are defined in src/index.css (:root) — I recommend moving advanced theming into a dedicated theme file if we expand variants.
- Some inline style remains where a direct Tailwind utility would be verbose; we can iterate and fully remove inline style if preferred.

How to test
1. git checkout feature/ui-modern-warm
2. npm install
3. npm run dev
4. Visit the app and check Landing, Matchmaker, Talents, TalentDetail (WhatsApp CTA), and BottomNav.

Approval
- If you want changes (palette tweak, font weights, CTA color, or WhatsApp copy), respond and I'll update the branch.
