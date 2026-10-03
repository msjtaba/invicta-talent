# Invicta-Talent — Design System

> **Invicta** — *unconquered*. A talent brand that feels confident, premium and enduring. The visual language pairs a deep crimson core with warm ivory neutrals, near-black graphites and a restrained gold accent.

---

## 1. Brand Principles

| Principle | What it means in design |
|---|---|
| **Bold** | Large, condensed Anton headlines. Strong crimson blocks. No timid layouts. |
| **Premium** | Generous whitespace, warm ivory instead of stark white, gold used sparingly. |
| **Trustworthy** | Clear hierarchy, readable Arial body copy, consistent spacing. |
| **Human** | Warm neutrals and real photography of people — never cold corporate blue. |

---

## 2. Color Palette

### 2.1 Primary — Crimson

| Token | Name | Hex | Use |
|---|---|---|---|
| `--color-primary` | Deep Crimson | `#6B0606` | Primary brand color, CTAs, key headlines, brand blocks |
| `--color-primary-dark` | Primary Dark | `#450404` | Hover / pressed states, section backgrounds |
| `--color-primary-deepest` | Primary Deepest | `#280202` | Footers, hero overlays, deepest brand surfaces |

### 2.2 Light Neutrals — Ivory

| Token | Name | Hex | Use |
|---|---|---|---|
| `--color-ivory` | Sandy Ivory | `#F3EDE2` | Default page background (light theme) |
| `--color-ivory-warm` | Warm Ivory | `#E8E0D2` | Cards, alternating sections, input fills |
| `--color-white` | Pure White | `#FFFFFF` | Text on crimson/dark, elevated cards, modals |

### 2.3 Dark Neutrals — Graphite

| Token | Name | Hex | Use |
|---|---|---|---|
| `--color-graphite` | Graphite | `#171717` | Primary body text on light; cards on dark theme |
| `--color-graphite-deep` | Deep Graphite | `#0D0D0D` | Dark theme sections, nav bar |
| `--color-black-soft` | Soft Black | `#090909` | Dark theme page background |

### 2.4 Supporting

| Token | Name | Hex | Use |
|---|---|---|---|
| `--color-stone` | Muted Stone | `#8C877E` | Secondary text, captions, meta info, icons |
| `--color-stone-light` | Light Stone | `#C8C1B5` | Borders, dividers, disabled states, secondary text on dark |
| `--color-gold` | Gold Accent | `#C49A52` | Highlights, badges, underlines, small icons, stats — **accent only** |

### 2.5 Color Proportion (60 / 30 / 10)

- **~60% Neutral** — Sandy Ivory / Warm Ivory (light) or Soft Black / Deep Graphite (dark)
- **~30% Brand & Text** — Deep Crimson family + Graphite
- **≤10% Accent** — Gold. If gold appears in more than a few places per screen, remove some.

### 2.6 Approved Pairings & Contrast

| Text | Background | Approx. ratio | Verdict |
|---|---|---|---|
| Graphite `#171717` | Sandy Ivory `#F3EDE2` | ~16:1 | ✅ All text |
| Deep Crimson `#6B0606` | Sandy Ivory `#F3EDE2` | ~11:1 | ✅ All text |
| Pure White `#FFFFFF` | Deep Crimson `#6B0606` | ~13:1 | ✅ All text |
| Sandy Ivory `#F3EDE2` | Soft Black `#090909` | ~17:1 | ✅ All text |
| Gold `#C49A52` | Graphite `#171717` | ~7.5:1 | ✅ All text |
| Gold `#C49A52` | Deep Crimson `#6B0606` | ~4.6:1 | ✅ Body (AA), best at large sizes |
| Light Stone `#C8C1B5` | Soft Black `#090909` | ~11:1 | ✅ Secondary text on dark |
| Muted Stone `#8C877E` | Sandy Ivory `#F3EDE2` | ~3.1:1 | ⚠️ Large text / captions ≥18px only |
| Gold `#C49A52` | Sandy Ivory `#F3EDE2` | ~2.3:1 | ❌ Never for text — decorative only |

*Verify final ratios with a contrast checker before shipping.*

---

## 3. Typography

### 3.1 Typefaces

| Role | Font | Fallback stack |
|---|---|---|
| **Titles & Headings** | **Anton** (Google Fonts, weight 400) | `'Anton', Impact, 'Arial Narrow', sans-serif` |
| **Body & Sub-text** | **Arial** | `Arial, 'Helvetica Neue', Helvetica, sans-serif` |

```html
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
```

### 3.2 Anton Rules

- Anton has **one weight** — never apply `font-weight: bold` (causes faux-bolding).
- Set headings in **UPPERCASE** for H1–H3; Title Case is acceptable for H4–H5.
- Use slight positive tracking (`letter-spacing: 0.01em–0.03em`) and tight leading (`1.05–1.15`).
- Never use Anton for paragraphs, buttons-with-long-labels, or anything under 18px.

### 3.3 Type Scale

| Token | Font | Size (desktop / mobile) | Line height | Letter spacing | Case |
|---|---|---|---|---|---|
| `display` | Anton | 96px / 56px | 1.0 | 0.01em | UPPER |
| `h1` | Anton | 64px / 42px | 1.05 | 0.01em | UPPER |
| `h2` | Anton | 48px / 34px | 1.1 | 0.015em | UPPER |
| `h3` | Anton | 32px / 26px | 1.15 | 0.02em | UPPER |
| `h4` | Anton | 24px / 22px | 1.2 | 0.02em | Title |
| `eyebrow` | Arial Bold | 13px / 12px | 1.4 | 0.18em | UPPER, Gold or Crimson |
| `body-lg` | Arial | 20px / 18px | 1.6 | 0 | Sentence |
| `body` | Arial | 16px / 16px | 1.6 | 0 | Sentence |
| `body-sm` | Arial | 14px / 14px | 1.5 | 0 | Sentence |
| `caption` | Arial | 12px / 12px | 1.4 | 0.02em | Sentence, Muted Stone |
| `button` | Arial Bold | 15px / 15px | 1 | 0.08em | UPPER |

### 3.4 Text Colors

| Context | Light theme | Dark theme |
|---|---|---|
| Headings | Graphite or Deep Crimson | Sandy Ivory or Pure White |
| Body | Graphite | Sandy Ivory |
| Secondary | Muted Stone (large only) / Graphite at 75% | Light Stone |
| Accent words | Deep Crimson | Gold |
| Links | Deep Crimson, underline Gold on hover | Gold, underline Ivory on hover |

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (8px base)

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 96px |
| `--space-10` | 128px |

### 4.2 Grid

- **Max content width:** 1280px; reading width for long text: 720px
- **Columns:** 12 (desktop), 8 (tablet), 4 (mobile)
- **Gutters:** 24px desktop, 16px mobile
- **Section padding:** 128px desktop / 64px mobile (vertical)
- **Breakpoints:** `sm 640` · `md 768` · `lg 1024` · `xl 1280`

### 4.3 Radius & Borders

The brand is sharp and architectural — keep corners tight.

| Token | Value | Use |
|---|---|---|
| `--radius-none` | 0 | Hero blocks, full-bleed sections, images |
| `--radius-sm` | 2px | Buttons, inputs, tags |
| `--radius-md` | 4px | Cards, modals |
| `--border` | 1px solid Light Stone | Dividers, card outlines (light) |
| `--border-dark` | 1px solid rgba(243,237,226,0.12) | Dividers on dark |
| `--rule-gold` | 2px solid Gold | Signature accent rule under eyebrows / section titles (40–64px wide) |

### 4.4 Elevation

Use shadows sparingly; prefer color layering (Ivory → Warm Ivory → White).

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(23,23,23,0.06)` |
| `--shadow-md` | `0 8px 24px rgba(23,23,23,0.08)` |
| `--shadow-lg` | `0 20px 48px rgba(40,2,2,0.18)` |

---

## 5. Components

### 5.1 Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| **Primary** | Deep Crimson | Pure White | none | Primary Dark |
| **Secondary** | transparent | Deep Crimson | 1.5px Deep Crimson | Crimson fill, White text |
| **On Dark** | Sandy Ivory | Primary Deepest | none | Pure White |
| **Ghost (dark)** | transparent | Sandy Ivory | 1.5px Light Stone | Gold border + Gold text |
| **Text link** | — | Deep Crimson | — | Gold underline (2px, offset 4px) |
| **Disabled** | Warm Ivory | Muted Stone | none | — |

- Height 48px (default), 40px (small), 56px (large)
- Padding 0 28px; Arial Bold 15px, UPPERCASE, `letter-spacing: 0.08em`
- Optional trailing arrow icon (→) that nudges 4px right on hover
- Focus ring: `outline: 2px solid #C49A52; outline-offset: 3px`

### 5.2 Navigation

- Light: Sandy Ivory bar, Graphite links, Crimson active state with 2px Gold underline
- Dark/Overlay: Deep Graphite or transparent over hero, Ivory links
- Logo left, links centered or right, one Primary CTA ("Find Talent" / "Apply Now") far right
- Height 80px desktop, 64px mobile; sticky with `--shadow-sm` after scroll

### 5.3 Cards

**Job / Role Card**
- Background Pure White (on Ivory page) or Graphite (on dark)
- Radius 4px, padding 24–32px, 1px Light Stone border
- Eyebrow (department/location) in Gold or Crimson → Title in Anton H4 → meta in Arial `body-sm` Muted Stone
- Hover: border becomes Deep Crimson, `--shadow-md`, lift `translateY(-2px)`

**Candidate / Profile Card**
- Portrait image top (4:5 ratio, radius 0), name in Anton, role in Arial
- Gold badge for "Featured" / "Top Talent"

**Stat Card**
- Big number in Anton (Display or H1) in Deep Crimson or Gold (on dark)
- Label in Arial `eyebrow` style beneath

### 5.4 Forms

- Input height 48px, background Pure White, 1px Light Stone border, radius 2px
- Label: Arial Bold 13px, UPPERCASE, `letter-spacing: 0.1em`, Graphite
- Placeholder: Muted Stone
- Focus: border Deep Crimson + 3px ring `rgba(107,6,6,0.15)`
- Error: border & message Deep Crimson with icon; Success: Gold check icon
- Helper text: Arial 13px, Muted Stone

### 5.5 Tags & Badges

| Type | Background | Text |
|---|---|---|
| Default | Warm Ivory | Graphite |
| Brand | Deep Crimson | Pure White |
| Premium / Featured | transparent, 1px Gold border | Gold (on dark) / Primary Dark (on light) |
| On dark | rgba(243,237,226,0.08) | Sandy Ivory |

Arial Bold 12px, UPPERCASE, `letter-spacing: 0.1em`, padding 6px 12px, radius 2px.

### 5.6 Sections — Signature Patterns

1. **Crimson Hero** — Primary Deepest → Deep Crimson gradient (or photo with 70% Primary Deepest overlay), Anton Display headline in Ivory, Gold eyebrow + gold rule, Ivory button.
2. **Ivory Content** — Sandy Ivory background, Graphite text, Crimson accent words in headings.
3. **Graphite Band** — Soft Black background for stats, testimonials, or CTA strips; Gold numbers.
4. **Footer** — Primary Deepest or Soft Black, Light Stone links, Gold hover, thin Ivory-12% divider.

---

## 6. Imagery & Iconography

**Photography**
- Real people, confident and candid; warm-toned grading that harmonises with ivory
- Avoid cool/blue-tinted stock and staged handshakes
- On dark sections, apply a duotone or a Primary Deepest overlay (60–75%) for consistency

**Icons**
- Line icons, 1.5px stroke, square caps — e.g. Lucide or Phosphor (Regular)
- Sizes 16 / 20 / 24px; color Graphite, Crimson, or Gold (on dark)

**Decorative**
- Thin gold rules, oversized outlined Anton numerals (`-webkit-text-stroke: 1px`) at 6–10% opacity as background texture
- No gradients other than within the crimson family

---

## 7. Motion

| Token | Value | Use |
|---|---|---|
| `--ease` | `cubic-bezier(0.2, 0.7, 0.2, 1)` | Default |
| `--dur-fast` | 150ms | Hover color changes |
| `--dur-base` | 250ms | Buttons, cards lift |
| `--dur-slow` | 500ms | Section reveal (fade + 16px rise) |

Respect `prefers-reduced-motion` — disable transforms, keep opacity fades only.

---

## 8. Voice & Microcopy (with type)

- Headlines: short, declarative, powerful — *"TALENT THAT ENDURES."* *"UNCONQUERED CAREERS."*
- Body: plain, warm, direct. Second person ("you").
- CTAs: verbs first — *Find Talent*, *Apply Now*, *Start Hiring*, *Explore Roles*.

---

## 9. Design Tokens (CSS)

```css
:root {
  /* Brand */
  --color-primary: #6B0606;
  --color-primary-dark: #450404;
  --color-primary-deepest: #280202;

  /* Light neutrals */
  --color-ivory: #F3EDE2;
  --color-ivory-warm: #E8E0D2;
  --color-white: #FFFFFF;

  /* Dark neutrals */
  --color-graphite: #171717;
  --color-graphite-deep: #0D0D0D;
  --color-black-soft: #090909;

  /* Supporting */
  --color-stone: #8C877E;
  --color-stone-light: #C8C1B5;
  --color-gold: #C49A52;

  /* Semantic — light theme */
  --bg: var(--color-ivory);
  --bg-alt: var(--color-ivory-warm);
  --surface: var(--color-white);
  --text: var(--color-graphite);
  --text-muted: var(--color-stone);
  --heading: var(--color-graphite);
  --accent: var(--color-primary);
  --highlight: var(--color-gold);
  --border-color: var(--color-stone-light);

  /* Type */
  --font-display: 'Anton', Impact, 'Arial Narrow', sans-serif;
  --font-body: Arial, 'Helvetica Neue', Helvetica, sans-serif;

  /* Radius */
  --radius-sm: 2px;
  --radius-md: 4px;

  /* Motion */
  --ease: cubic-bezier(0.2, 0.7, 0.2, 1);
}

/* Dark theme */
[data-theme="dark"] {
  --bg: var(--color-black-soft);
  --bg-alt: var(--color-graphite-deep);
  --surface: var(--color-graphite);
  --text: var(--color-ivory);
  --text-muted: var(--color-stone-light);
  --heading: var(--color-white);
  --accent: var(--color-gold);
  --highlight: var(--color-gold);
  --border-color: rgba(243, 237, 226, 0.12);
}

h1, h2, h3, h4, .display {
  font-family: var(--font-display);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.015em;
  line-height: 1.1;
  color: var(--heading);
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--text);
  background: var(--bg);
}
```

### Tailwind (optional)

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      crimson: { DEFAULT: '#6B0606', dark: '#450404', deepest: '#280202' },
      ivory:   { DEFAULT: '#F3EDE2', warm: '#E8E0D2' },
      graphite:{ DEFAULT: '#171717', deep: '#0D0D0D', black: '#090909' },
      stone:   { DEFAULT: '#8C877E', light: '#C8C1B5' },
      gold:    '#C49A52',
    },
    fontFamily: {
      display: ['Anton', 'Impact', 'Arial Narrow', 'sans-serif'],
      body: ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
    },
    borderRadius: { sm: '2px', md: '4px' },
  },
}
```

---

## 10. Do's & Don'ts

**Do**
- ✅ Lead with big Anton headlines and plenty of breathing room
- ✅ Use Sandy Ivory, not pure white, as the default light background
- ✅ Keep gold as a jewel — rules, badges, numbers, focus rings
- ✅ Pair crimson with ivory or white text only
- ✅ Keep corners sharp (0–4px)

**Don't**
- ❌ Bold or italicise Anton
- ❌ Set paragraphs, small labels or form text in Anton
- ❌ Put gold text on ivory/white backgrounds
- ❌ Use Muted Stone for small body text on light backgrounds
- ❌ Introduce new hues (blues, greens) — use the crimson family for states where possible
- ❌ Combine crimson and gold as large adjacent blocks; gold is never a background fill





For Anton - 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">

.anton-regular {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
}

For Arial - 
refer the folder arial mt cufonfonts webfont to use it