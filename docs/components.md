# Components

A catalog of UI components collected for the project. Each entry lists the component name, its source, what it does, the markup, the styles, and integration notes.

## Index

| # | Name | Type | Source |
|---|------|------|--------|
| 1 | [delArch](#delarch) | Stats card with social icons | Uiverse.io — Smit-Prajapati |
| 2 | [table](#table) | Key/value status table (React) | reui / shadcn pattern |
| 3 | [currArch](#currarch) | Notification toast | Uiverse.io — SouravBandyopadhyay |
| 4 | [newsletter](#newsletter) | Brutalist newsletter signup card | Uiverse.io — 0xnihilism |
| 5 | [Joe-watson-sbf - tools](#joe-watson-sbf---tools) | Expanding accordion panels | Uiverse.io — joe-watson-sbf |
| 6 | [empOffer](#empoffer) | Social profile stats card | Uiverse.io — Armive |
| 7 | [input](#input) | Neumorphic text input | Uiverse.io — Praashoo7 |
| 8 | [button-1](#button-1) | "Learn More" expanding-circle button | Uiverse.io — cssbuttons-io |
| 9 | [button-2](#button-2) | Pill-fill CTA button with arrow | Uiverse.io — alexmaracinaru |
| 10 | [button-3](#button-3) | Outline button with sliding arrow | Uiverse.io — reshades |

> **Global class collisions:** `delArch`, `newsletter` and `Joe-watson-sbf - tools` all use the root class `.card`, and `button-1` styles the bare `button` element. Scope them before using more than one on a page (see each component's notes).

---

## delArch

**Source:** Uiverse.io by Smit-Prajapati
**Type:** Stats card with logo, social icons and a three-column metrics row

**Description:** A dark navy card (230px wide) with a cyan gradient header. A skewed "notch" cut into the top-left of the header holds the logo, and three social icons (Instagram, X/Twitter, Discord) sit top-right. Below, a title and a row of three stats separated by thin dividers.

**Interactions**
- Card scales to `1.05` on hover with a springy cubic-bezier.
- Social icons switch from navy to white on hover.

### HTML

```html
<!-- From Uiverse.io by Smit-Prajapati -->
<div class="card">
  <div class="top-section">
    <div class="border"></div>
    <div class="icons">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 94" class="svg">
          <path fill="white" d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"></path>
          <path fill="white" d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"></path>
          <path fill="white" d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z"></path>
        </svg>
      </div>
      <div class="social-media">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="svg">
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
        </svg>
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.430,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
        </svg>
      </div>
    </div>
  </div>
  <div class="bottom-section">
    <span class="title">UNIVERSE OF UI</span>
    <div class="row row1">
      <div class="item">
        <span class="big-text">2626</span>
        <span class="regular-text">UI elements</span>
      </div>
      <div class="item">
        <span class="big-text">100%</span>
        <span class="regular-text">Free for use</span>
      </div>
      <div class="item">
        <span class="big-text">38,631</span>
        <span class="regular-text">Contributers</span>
      </div>
    </div>
  </div>
</div>
```

### CSS

```css
/* From Uiverse.io by Smit-Prajapati */
.card {
  width: 230px;
  border-radius: 20px;
  background: #1b233d;
  padding: 5px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
}

.card .top-section {
  height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
  position: relative;
}

.card .top-section .border {
  border-bottom-right-radius: 10px;
  height: 30px;
  width: 130px;
  background: white;
  background: #1b233d;
  position: relative;
  transform: skew(-40deg);
  box-shadow: -10px -10px 0 0 #1b233d;
}

.card .top-section .border::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  right: -15px;
  background: rgba(255, 255, 255, 0);
  border-top-left-radius: 10px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card .top-section::before {
  content: "";
  position: absolute;
  top: 30px;
  left: 0;
  background: rgba(255, 255, 255, 0);
  height: 15px;
  width: 15px;
  border-top-left-radius: 15px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card .top-section .icons {
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.card .top-section .icons .logo {
  height: 100%;
  aspect-ratio: 1;
  padding: 7px 0 7px 15px;
}

.card .top-section .icons .logo .top-section {
  height: 100%;
}

.card .top-section .icons .social-media {
  height: 100%;
  padding: 8px 15px;
  display: flex;
  gap: 7px;
}

.card .top-section .icons .social-media .svg {
  height: 100%;
  fill: #1b233d;
}

.card .top-section .icons .social-media .svg:hover {
  fill: white;
}

.card .bottom-section {
  margin-top: 15px;
  padding: 10px 5px;
}

.card .bottom-section .title {
  display: block;
  font-size: 17px;
  font-weight: bolder;
  color: white;
  text-align: center;
  letter-spacing: 2px;
}

.card .bottom-section .row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card .bottom-section .row .item {
  flex: 30%;
  text-align: center;
  padding: 5px;
  color: rgba(170, 222, 243, 0.721);
}

.card .bottom-section .row .item .big-text {
  font-size: 12px;
  display: block;
}

.card .bottom-section .row .item .regular-text {
  font-size: 9px;
}

.card .bottom-section .row .item:nth-child(2) {
  border-left: 1px solid rgba(255, 255, 255, 0.126);
  border-right: 1px solid rgba(255, 255, 255, 0.126);
}
```

### Notes
- **Key colors:** card `#1b233d`, header gradient `rgb(4,159,187) → rgb(80,246,255)`, stat text `rgba(170,222,243,0.721)`.
- The notch's inverse rounded corners are faked with `box-shadow` on transparent pseudo-elements; if you change the card background, update every `#1b233d` (5 places).
- `.card .top-section .icons .logo .top-section` targets nothing — safe to delete.
- `.border` declares `background` twice; the second (`#1b233d`) wins.
- Typo in content: "Contributers" → "Contributors".
- Social SVGs have no links or labels; wrap each in `<a aria-label="…">` for real use.
- Uses root class `.card` — rename (e.g. `.del-arch`) to avoid collisions.

---

## table

**Source:** reui `Frame` + shadcn/ui `Table` pattern
**Type:** React key/value status table (TSX, Tailwind)

**Description:** A framed, two-column definition table showing a server ("droplet") status: status with a pulsing green dot, instance type, region, CPU and memory progress bars, uptime, OS and tags. Label column is shaded (`bg-muted/50`) and separated by a vertical border.

**Interactions**
- Status dot pulses continuously (`animate-ping`).
- Row hover highlight is disabled (`hover:bg-transparent`).

### Dependencies
- `@/components/reui/badge` — `Badge` (variants `outline`, `secondary`; size `sm`)
- `@/components/reui/frame` — `Frame`, `FrameHeader`, `FrameTitle`, `FrameDescription`, `FramePanel`
- `@/components/ui/table` — shadcn `Table`, `TableBody`, `TableRow`, `TableCell`
- Tailwind CSS v3.4+ (uses `*:` and `[&>…]` variants, `!` important suffix requires v4 syntax `px-2!`)

### TSX

```tsx
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <Frame spacing="sm">
        <FrameHeader className="px-2!">
          <FrameTitle>Droplet Status</FrameTitle>
          <FrameDescription>
            Primary production server{" "}
            <Badge variant="outline" size="sm">
              prod-api-us-east-1
            </Badge>
          </FrameDescription>
        </FrameHeader>
        <FramePanel className="p-0!">
          <Table>
            <TableBody>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 w-40 py-2 text-sm font-medium">
                  Status
                </TableCell>
                <TableCell className="py-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                    </span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      Operational
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  Instance Type
                </TableCell>
                <TableCell className="py-2">
                  <span className="font-mono text-sm">c6g.2xlarge</span>
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  Region
                </TableCell>
                <TableCell className="py-2 text-sm">
                  US East (N. Virginia)
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  CPU Usage
                </TableCell>
                <TableCell className="py-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted h-2 w-24 overflow-hidden rounded-full">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: "42%" }}
                      />
                    </div>
                    <span className="text-muted-foreground text-sm">42%</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  Memory
                </TableCell>
                <TableCell className="py-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted h-2 w-24 overflow-hidden rounded-full">
                      <div
                        className="h-full rounded-full bg-amber-500"
                        style={{ width: "67%" }}
                      />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      10.7 / 16 GB
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  Uptime
                </TableCell>
                <TableCell className="py-2 text-sm">
                  47 days, 12 hours
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  OS
                </TableCell>
                <TableCell className="py-2 text-sm">
                  Amazon Linux 2023
                </TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 text-sm font-medium">
                  Tags
                </TableCell>
                <TableCell className="py-2">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="secondary" size="sm">
                      production
                    </Badge>
                    <Badge variant="secondary" size="sm">
                      api
                    </Badge>
                    <Badge variant="secondary" size="sm">
                      critical
                    </Badge>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </FramePanel>
      </Frame>
    </div>
  )
}
```

### Notes
- All values are hard-coded; for real use, map over a `rows: { label: string; value: ReactNode }[]` array to remove the repeated `TableRow` className.
- `IconPlaceholder` is imported but unused — remove it, or the import path `@/app/(create)/…` will break outside the original app.
- Progress bar colors: CPU uses theme `bg-primary`; memory uses `bg-amber-500` (warning tone). Consider driving color from thresholds.
- Theme-aware: relies on shadcn tokens (`muted`, `border`, `primary`, `muted-foreground`) and has `dark:` variants for the status text.
- Exported name is `Pattern`; rename (e.g. `DropletStatusTable`) when adding to the codebase.

---

## currArch

**Source:** Uiverse.io by SouravBandyopadhyay
**Type:** Notification / toast card

**Description:** A dark 18rem × 8rem notification with a blue-to-violet gradient accent bar on the left, a blue title and grey body text. Two radial white "glow" layers fade in on hover — one under the 1px border (border glow) and one over the inner surface.

**Interactions** (all 300ms ease)
- Accent bar shifts right `0.15rem`.
- Title shifts `0.15rem`, body shifts `0.25rem` (subtle parallax).
- Both glows fade to `opacity: 0.1`.

### HTML

```html
<!-- From Uiverse.io by SouravBandyopadhyay -->
<div class="notification">
  <div class="notiglow"></div>
  <div class="notiborderglow"></div>
  <div class="notititle">Welcome To Uiverse</div>
  <div class="notibody">Contribute to Open Source UI Elements</div>
</div>
```

### CSS

```css
/* From Uiverse.io by SouravBandyopadhyay */
.notification {
  display: flex;
  flex-direction: column;
  isolation: isolate;
  position: relative;
  width: 18rem;
  height: 8rem;
  background: #29292c;
  border-radius: 1rem;
  overflow: hidden;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 16px;
  --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
  --color: #32a6ff
}

.notification:before {
  position: absolute;
  content: "";
  inset: 0.0625rem;
  border-radius: 0.9375rem;
  background: #18181b;
  z-index: 2
}

.notification:after {
  position: absolute;
  content: "";
  width: 0.25rem;
  inset: 0.65rem auto 0.65rem 0.5rem;
  border-radius: 0.125rem;
  background: var(--gradient);
  transition: transform 300ms ease;
  z-index: 4;
}

.notification:hover:after {
  transform: translateX(0.15rem)
}

.notititle {
  color: var(--color);
  padding: 0.65rem 0.25rem 0.4rem 1.25rem;
  font-weight: 500;
  font-size: 1.1rem;
  transition: transform 300ms ease;
  z-index: 5;
}

.notification:hover .notititle {
  transform: translateX(0.15rem)
}

.notibody {
  color: #99999d;
  padding: 0 1.25rem;
  transition: transform 300ms ease;
  z-index: 5;
}

.notification:hover .notibody {
  transform: translateX(0.25rem)
}

.notiglow,
.notiborderglow {
  position: absolute;
  width: 20rem;
  height: 20rem;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle closest-side at center, white, transparent);
  opacity: 0;
  transition: opacity 300ms ease;
}

.notiglow {
  z-index: 3;
}

.notiborderglow {
  z-index: 1;
}

.notification:hover .notiglow {
  opacity: 0.1
}

.notification:hover .notiborderglow {
  opacity: 0.1
}

.note {
  color: var(--color);
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 0.9rem;
  width: 75%;
}
```

### Notes
- **Theming tokens:** `--gradient` (accent bar) and `--color` (title) on `.notification` — override these to recolor.
- **Layer stack:** border glow (1) → inner surface `:before` (2) → surface glow (3) → accent bar `:after` (4) → text (5).
- The glows sit at the top-left corner by default. The original Uiverse demo moves them with the cursor via JS — add this to get the spotlight effect:
  ```js
  document.querySelectorAll('.notification').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      el.querySelectorAll('.notiglow, .notiborderglow').forEach(g => {
        g.style.left = x + 'px'; g.style.top = y + 'px';
      });
    });
  });
  ```
- Fixed `height: 8rem` — long body text will be clipped; switch to `min-height` if content varies.
- `.note` is unused demo styling — safe to drop.
- For accessibility, add `role="status"` (or `role="alert"` for urgent messages).

---

## newsletter

**Source:** Uiverse.io by 0xnihilism
**Type:** Neo-brutalist newsletter signup card

**Description:** A 300px white card with a thick 6px black border and a hard 12px offset shadow. Large uppercase black title, short tagline, an email input and a black submit button.

**Interactions**
- Card lifts (`translate(-5px,-5px)`) and the shadow grows to 17px on hover.
- An underline slides in under the title on card hover.
- Input inverts to black/white and scales to `1.05` on focus.
- Button: a green (`#5ad641`) "Sure?" panel slides up from the bottom on hover; presses to `0.95` on active.

### HTML

```html
<!-- From Uiverse.io by 0xnihilism -->
<div class="card">
  <span class="card__title">Newsletter</span>
  <p class="card__content">
    Get existential crisis delivered straight to your inbox every week.
  </p>
  <form class="card__form">
    <input required="" type="email" placeholder="Your life" />
    <button class="card__button">Click me</button>
  </form>
</div>
```

### CSS

```css
/* From Uiverse.io by 0xnihilism */
.card {
  width: 300px;
  padding: 20px;
  background: #fff;
  border: 6px solid #000;
  box-shadow: 12px 12px 0 #000;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translate(-5px, -5px);
  box-shadow: 17px 17px 0 #000;
}

.card__title {
  font-size: 32px;
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: block;
  position: relative;
  overflow: hidden;
}

.card__title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90%;
  height: 3px;
  background-color: #000;
  transform: translateX(-100%);
  transition: transform 0.3s;
}

.card:hover .card__title::after {
  transform: translateX(0);
}

.card__content {
  font-size: 16px;
  line-height: 1.4;
  color: #000;
  margin-bottom: 20px;
}

.card__form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card__form input {
  padding: 10px;
  border: 3px solid #000;
  font-size: 16px;
  font-family: inherit;
  transition: transform 0.3s;
  width: calc(100% - 26px); /* Adjust for padding and border */
}

.card__form input:focus {
  outline: none;
  transform: scale(1.05);
  background-color: #000;
  color: #ffffff;
}

.card__button {
  border: 3px solid #000;
  background: #000;
  color: #fff;
  padding: 10px;
  font-size: 18px;
  left: 20%;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
  width: 50%;
  height: 100%;
}

.card__button::before {
  content: "Sure?";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 105%;
  background-color: #5ad641;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.card__button:hover::before {
  transform: translateY(0);
}

.card__button:active {
  transform: scale(0.95);
}

@keyframes glitch {
  0% {
    transform: translate(2px, 2px);
  }
  25% {
    transform: translate(-2px, -2px);
  }
  50% {
    transform: translate(-2px, 2px);
  }
  75% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(2px, 2px);
  }
}

.glitch {
  animation: glitch 0.3s infinite;
}
```

### Notes
- Uses BEM naming (`card__*`), but the root `.card` is generic — rename to `.newsletter` to avoid collisions with `delArch` and `Joe-watson-sbf - tools`.
- Button is centered via `left: 20%` with `width: 50%` (not exactly centered: use `align-self: center` instead).
- `.glitch` / `@keyframes glitch` are defined but not applied — add `class="glitch"` to any element for a shake effect, or remove.
- The input has no `<label>`; add a visually hidden label or `aria-label="Email"`.
- `<form>` has no `action`/submit handler — wire it to your newsletter provider.
- Copy ("Your life", "Click me", "existential crisis") is placeholder humor — replace for production.

---

## Joe-watson-sbf - tools

**Source:** Uiverse.io by joe-watson-sbf
**Type:** Horizontal expanding accordion / tool panels

**Description:** A 210 × 254px dark card containing three equal vertical panels with pink borders. Each panel's label is rotated -90° so it reads vertically.

**Interactions** (0.5s)
- Hovered panel grows from `flex: 1` to `flex: 4`, squeezing its siblings.
- Its label rotates back to horizontal.

### HTML

```html
<!-- From Uiverse.io by joe-watson-sbf -->
<div class="card">
  <p><span>HOVER ME</span></p>
  <p><span>HOVER ME</span></p>
  <p><span>HOVER ME</span></p>
</div>
```

### CSS

```css
/* From Uiverse.io by joe-watson-sbf */
.card {
  width: 210px;
  height: 254px;
  border-radius: 4px;
  background: #212121;
  display: flex;
  gap: 5px;
  padding: .4em;
}

.card p {
  height: 100%;
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2px;
  transition: all .5s;
  background: #212121;
  border: 1px solid #ff5a91;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card p:hover {
  flex: 4;
}

.card p span {
  min-width: 14em;
  padding: .5em;
  text-align: center;
  transform: rotate(-90deg);
  transition: all .5s;
  text-transform: uppercase;
  color: #ff568e;
  letter-spacing: .1em;
}

.card p:hover span {
  transform: rotate(0);
}
```

### Notes
- **Key colors:** background `#212121`, border `#ff5a91`, text `#ff568e`.
- Works with any number of panels — add/remove `<p>` children.
- `<p>` is used as an interactive element; for real "tools" swap to `<button>` or `<a>` and add `:focus-visible` matching `:hover` so it's keyboard accessible.
- Hover-only — on touch devices consider toggling an `.active` class on tap.
- `transition: all` — narrow to `flex, transform` for performance.
- Uses root class `.card` — rename (e.g. `.tools`) to avoid collisions.

---

## empOffer

**Source:** Uiverse.io by Armive
**Type:** Social profile / account stats card

**Description:** A 320px card with a thick black border and hard offset shadow. Purple-blue gradient header contains a Twitter bird icon, a "Connected" pill, brand name and handle. White footer shows three stats (Followers, Posts, Engagement) with dividers.

**Interactions**
- Card lifts `-2px` and shadow grows from 8px to 10px on hover (0.2s).

**Responsive**
- ≤480px: width 300px, thinner border/shadow, smaller type.

### HTML

```html
<!-- From Uiverse.io by Armive -->
<div class="twitter-card">
  <div class="card-header">
    <div class="header-top">
      <svg class="twitter-icon" viewBox="0 0 24 24">
        <path
          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        ></path>
      </svg>
      <div class="status">Connected</div>
    </div>
    <div class="brand-name">Uiverse.io</div>
    <div class="handle">@uiverse_io</div>
  </div>

  <div class="card-stats">
    <div class="stat">
      <div class="stat-number">755</div>
      <div class="stat-label">Followers</div>
    </div>
    <div class="stat">
      <div class="stat-number">56</div>
      <div class="stat-label">Posts</div>
    </div>
    <div class="stat">
      <div class="stat-number">7.8%</div>
      <div class="stat-label">Engagement</div>
    </div>
  </div>
</div>
```

### CSS

```css
/* From Uiverse.io by Armive */
.twitter-card {
  width: 320px;
  background: black;
  border-radius: 16px;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  /* Thick black border effect */
  border: 4px solid #000;
  /* Additional shadow for depth */
  box-shadow: 8px 8px 0px #000;
  position: relative;
  margin: 20px;
}

.card-header {
  background: linear-gradient(90deg, #5f72ff, #9a4eff);
  color: white;
  padding: 24px 20px;
  position: relative;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.twitter-icon {
  width: 28px;
  height: 28px;
  fill: white;
}

.status {
  background: rgba(255, 255, 255, 0.25);
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.brand-name {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 6px;
  letter-spacing: -0.5px;
}

.handle {
  font-size: 16px;
  opacity: 0.9;
  font-weight: 400;
}

.card-stats {
  padding: 24px 20px;
  display: flex;
  justify-content: space-between;
  background: white;
}

.stat {
  text-align: center;
  flex: 1;
  padding: 0 8px;
}

.stat-number {
  font-size: 20px;
  font-weight: bold;
  color: #14171a;
  margin-bottom: 6px;
  line-height: 1;
}

.stat-label {
  font-size: 13px;
  color: #657786;
  font-weight: 500;
  text-transform: capitalize;
}

.stat:not(:last-child) {
  border-right: 1px solid #e1e8ed;
}

/* Hover effect for the entire card */
.twitter-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0px #000;
  transition: all 0.2s ease;
}

@media (max-width: 480px) {
  .twitter-card {
    width: 300px;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px #000;
  }

  .twitter-card:hover {
    box-shadow: 8px 8px 0px #000;
  }

  .brand-name {
    font-size: 24px;
  }

  .stat-number {
    font-size: 18px;
  }

  .stat-label {
    font-size: 12px;
  }
}
```

### Notes
- Despite the component name "empOffer", the markup is a social account card; repurpose header fields (brand name → role/company, handle → location, stats → salary/experience/etc.) for an employment-offer card. Consider renaming `.twitter-card` → `.emp-offer`.
- The `transition` is declared only on `:hover`, so the card animates in but snaps back on mouse-out. Move `transition: all 0.2s ease;` to `.twitter-card` for a smooth return.
- `margin: 20px` is baked in — remove if the parent handles spacing.
- **Key colors:** header gradient `#5f72ff → #9a4eff`, stat number `#14171a`, label `#657786`, divider `#e1e8ed`.
- Icon SVG lacks `aria-hidden="true"`; add it since it's decorative.

---

## input

**Source:** Uiverse.io by Praashoo7
**Type:** Neumorphic text input

**Description:** A pill-shaped (15px radius) grey input with an inset shadow, so it looks pressed into the surface.

**Interactions** (300ms ease-in-out)
- On focus: background turns white, scales to `1.05`, and the inset shadow is replaced by a soft dual outer shadow (dark bottom-right, light top-left) so it appears to rise out.

### HTML

```html
<!-- From Uiverse.io by Praashoo7 -->
<input type="text" autocomplete="off" name="text" class="input" placeholder="Username">
```

### CSS

```css
/* From Uiverse.io by Praashoo7 */
.input {
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 1em;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  transition: 300ms ease-in-out;
}

.input:focus {
  background-color: white;
  transform: scale(1.05);
  box-shadow: 13px 13px 100px #969696,
             -13px -13px 100px #ffffff;
}
```

### Notes
- Neumorphic effect is designed for a light grey page background (~`#e0e0e0`); on white or dark backgrounds the focus shadow loses its depth.
- `outline: none` removes the native focus ring; the scale + shadow change acts as the focus indicator, but contrast is low — consider adding a subtle `:focus-visible` ring.
- `.input` is a generic class name; scope it (e.g. `.input-neu`) if your codebase already uses `.input`.
- Pair with a `<label>`; placeholder alone isn't an accessible label.
- `autocomplete="off"` — remove if this is a real username field so password managers can help.

---

## button-1

**Source:** Uiverse.io by cssbuttons-io
**Type:** "Learn More" expanding-circle button

**Description:** A 12rem-wide transparent button showing a dark circle with a white arrow on the left and uppercase dark text beside it.

**Interactions** (0.45s, `cubic-bezier(0.65, 0, 0.076, 1)`)
- Circle expands to the full button width, forming a dark pill.
- Arrow gains a shaft and slides right `1rem`.
- Text turns white.

### HTML

```html
<!-- From Uiverse.io by cssbuttons-io -->
<button class="learn-more">
  <span class="circle" aria-hidden="true">
    <span class="icon arrow"></span>
  </span>
  <span class="button-text">Learn More</span>
</button>
```

### CSS

```css
/* From Uiverse.io by cssbuttons-io */
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}

button.learn-more {
  width: 12rem;
  height: auto;
}

button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #282936;
  border-radius: 1.625rem;
}

button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}

button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #282936;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}

button:hover .circle {
  width: 100%;
}

button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(1rem, 0);
}

button:hover .button-text {
  color: #fff;
}
```

### Notes
- ⚠️ **Global reset:** the first rule targets every `button` on the page (removes borders, backgrounds, padding and outlines). Scope it to `button.learn-more` before adding to a shared stylesheet — otherwise it will break `button-2`, `button-3`, `newsletter`'s button and any others.
- Likewise, the `button:hover …` rules should become `button.learn-more:hover …`.
- `outline: none` removes focus visibility; add `button.learn-more:focus-visible .circle { width: 100%; }` to mirror hover for keyboard users.
- **Key color:** `#282936` (circle + resting text). Text is designed for a light background.

---

## button-2

**Source:** Uiverse.io by alexmaracinaru
**Type:** Pill-fill CTA button with arrow

**Description:** A borderless text button with a light-blue 45px circle sitting behind the start of the label, and a small stroked arrow after the text.

**Interactions**
- On hover the circle stretches into a full-width pill (0.3s) and the arrow slides `5px` right.
- On active the button presses to `0.95`.

### HTML

```html
<!-- From Uiverse.io by alexmaracinaru -->
<button class="cta">
  <span>Hover me</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
```

### CSS

```css
/* From Uiverse.io by alexmaracinaru */
.cta {
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #b1dae7;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #234567;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #234567;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: #b1dae7;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active {
  transform: scale(0.95);
}
```

### Notes
- Requires the **Ubuntu** font for the intended look:
  `<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap" rel="stylesheet">`
- **Key colors:** fill `#b1dae7`, text/arrow `#234567`.
- The circle is a fixed 45px tall; if you change font size or padding, adjust its height to keep it matched to the button.
- Add `aria-hidden="true"` to the SVG (decorative) and a `:focus-visible` style mirroring hover.

---

## button-3

**Source:** Uiverse.io by reshades
**Type:** Outline button with sliding arrow

**Description:** A transparent button with a 0.2em blue (`#3654ff`) border, rounded 11px corners, a right-arrow icon on the left and right-aligned white text.

**Interactions** (0.6s ease)
- Background fills solid blue on hover.
- Arrow nudges `5px` right.

### HTML

```html
<!-- From Uiverse.io by reshades -->
<button class="button">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
  </svg>

  <div class="text">
    Button
  </div>
</button>
```

### CSS

```css
/* From Uiverse.io by reshades */
.button {
  background-color: #ffffff00;
  color: #fff;
  width: 8.5em;
  height: 2.9em;
  border: #3654ff 0.2em solid;
  border-radius: 11px;
  text-align: right;
  transition: all 0.6s ease;
}

.button:hover {
  background-color: #3654ff;
  cursor: pointer;
}

.button svg {
  width: 1.6em;
  margin: -0.2em 0.8em 1em;
  position: absolute;
  display: flex;
  transition: all 0.6s ease;
}

.button:hover svg {
  transform: translateX(5px);
}

.text {
  margin: 0 1.5em
}
```

### Notes
- Text is white at rest, so the button is **designed for dark backgrounds** only.
- The SVG is `position: absolute` but `.button` has no `position: relative`; add it so the icon is positioned relative to the button rather than an ancestor.
- `<div>` inside `<button>` is invalid HTML — change `.text` to a `<span>` (add `display: block` if needed).
- `.text` and `.button` are very generic class names; scope them (e.g. `.btn-outline`, `.btn-outline__text`).
- The SVG's `w-6 h-6` Tailwind classes are overridden by `.button svg { width: 1.6em }` — they can be removed.
- Add `aria-hidden="true"` to the SVG and a `:focus-visible` style.
