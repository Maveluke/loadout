# Personal Portfolio Site — Design Spec

## Overall Site Structure

A personal portfolio site with four main sections:

1. Floating menu (navigation)
2. Landing / About section
3. Featured & Others section
4. Contact Me modal

The site is responsive between mobile and desktop. Only two sections have meaningfully different layouts between mobile and desktop — the **floating menu** and the **Contact Me modal**. All other sections share the same layout across both, with only sizing adjustments.

---

## 1. Floating Menu (Navigation)

A floating menu acts as the primary navigation, not anchored to a traditional header bar.

### Layout

**Mobile:** A compact menu box sits in the top-right corner of the viewport, occupying only a small area (not the full horizontal width). It appears as a hamburger icon (three lines). When expanded, it reveals a vertical list with the items: **About, Featured, Other, Contact**.

**Desktop:** The navigation appears as a horizontal floating pill or capsule near the top of the page, containing the items inline: **About, Featured, Other, Contact**.

### Interactions — Essential

- Clicking **About**, **Featured**, or **Other** smooth-scrolls to that section.
- Clicking **Contact** opens the Contact Me modal instead of scrolling.
- **Active section highlighting:** as the user scrolls, the nav item for the currently-visible section gets a visual indicator (underline, color change, or pill background).
- On mobile, tapping the hamburger expands the menu with a quick animation (slide-down or fade-in). Tapping outside or on a menu item collapses it.

### Interactions — Nice-to-Have

- Subtle backdrop blur or semi-transparent background on the menu so it stays readable over the backdrop video and content beneath it.

---

## 2. Landing / About Section

This is the hero/landing section, which doubles as the "About Me" area. A backdrop video plays behind the entire section. The layout is the same across mobile and desktop — only the sizing differs.

### Layout

A horizontal split with text content on the left and the profile picture (PP) on the right, sitting beside each other. The text area takes up more horizontal space than the profile picture.

**Left side (text area):**
- A large heading: `Hi, I'm NAME`
- Below the heading: a short bio (a few lines of body text)

**Right side (profile picture area):**
- The profile picture (PP) sits at the top
- Beneath it: a small prompt like "Check out my socials" (or similar)
- Below the prompt: a row of social icons (GitHub, LinkedIn, mail)

**Bottom — My Resume bar:**
- Contains two resume options — **Gamedev** and **Software Eng** — each representing a separate version of the resume.
- Each option consists of a clickable tag (the resume label) paired with a small download icon button beside it.
- If it fits visually, the resume bar should sit inside the backdrop video area; otherwise, it sits just below it.

### Interactions — Essential

- The backdrop video autoplays, loops, is muted, and plays inline (required for mobile autoplay). It has a poster image fallback for slow connections.
- Clicking the **Gamedev** tag opens the Gamedev resume PDF in a new tab. Clicking its adjacent download icon downloads the Gamedev resume PDF directly.
- Clicking the **Software Eng** tag opens the Software Eng resume PDF in a new tab. Clicking its adjacent download icon downloads the Software Eng resume PDF directly.
- Social icons open in new tabs (`target="_blank"` with `rel="noopener"`).

### Interactions — Nice-to-Have

- Subtle entrance animation on load — text fades/slides in, PP scales in slightly delayed.
- Social icons have a hover state (color shift, slight scale, or icon fill change).
- The backdrop video has a dark overlay/gradient to keep text legible regardless of video content.

---

## 3. Featured & Others Section

This section displays project work as a list of project cards, with the same layout across mobile and desktop (only sizing differs). There is no separate "Featured" category — the featured project is simply the default-expanded card in the list, distinguished by the site's accent color.

### Card Types

**Expanded card (featured / default-expanded):**
- Rectangular asset on top (video or thumbnail image)
- Below the asset: title, one-line blurb, and tech stack tags in brackets
- Uses the site's accent color to visually distinguish it from other cards

**Unexpanded cards (other projects):**
- Horizontal row layout
- Square thumbnail on the left side
- To the right of the thumbnail: title, one-line blurb, and tech stack tags in brackets

### Layout

The expanded featured card sits at the top of the section. The unexpanded project cards stack vertically below it.

### Interactions — Essential

- The featured card stays expanded at all times — it cannot be collapsed.
- Unexpanded project cards are clickable to expand inline. Clicking an unexpanded card expands it; clicking it again (or clicking another) collapses the previously expanded one (accordion behavior among the non-featured cards only).
- Expansion uses a smooth height transition rather than a snap.
- The rectangular asset in expanded cards autoplays if it's a video (muted, looped), or shows a still thumbnail.

### Interactions — Nice-to-Have

- Hover state on unexpanded cards (subtle lift, border glow, or thumbnail scale) to signal clickability.
- The accent color appears as a left-border stripe, a glow, or a tag badge on the featured card so it's clearly distinguished. (Worth considering during build.)

---

## 4. Contact Me Modal

A modal/popup form triggered from the **Contact** item in the navigation.

### Layout

**Mobile:** The modal occupies most of the screen.
- Title `Contact Me` at the top
- `X` close button in the top-right corner
- Three form fields stacked vertically:
  - Name (short input)
  - Email (short input)
  - Message (large textarea)
- `Send` button at the bottom-left of the modal

**Desktop:** Same modal, but smaller and centered on the screen (not full-screen).
- Same title `Contact Me`
- Same `X` close button in the top-right
- Same three fields (Name, Email, Message); message field is a wider textarea
- `Send` button at the bottom-left

### Interactions — Essential

- Opens with a fade-in + slight scale-up animation; closes with the reverse.
- Closes when: clicking the `X`, pressing `Escape`, or clicking the backdrop outside the modal.
- Focus is trapped inside the modal while open (keyboard `Tab` cycles within the form). Focus returns to the Contact nav item when closed.
- Background page is non-scrollable while the modal is open.
- Form validation:
  - Name required
  - Email required + valid format
  - Message required + minimum length
  - Errors show inline below each field
- `Send` button shows a loading state while submitting, then a success or error message.

### Interactions — Nice-to-Have

- On submit success, the modal shows a brief "Message sent!" confirmation before closing automatically (or stays open with a clear success state).
- The form persists its contents across closes (so users can recover drafts if they accidentally close the modal).

---

## Global / Cross-cutting

### Essential

- Smooth scrolling behavior site-wide (`scroll-behavior: smooth` in CSS).
- Mobile breakpoint: decide where mobile layout switches to desktop (common: 768px or 1024px).

### Nice-to-Have

- **Reduced-motion preference respected:** if the user has `prefers-reduced-motion`, skip animations and use instant transitions.
- **Consistent accent color system:** a primary accent color used for the featured card, hover states, the Send button, and other key highlights. The specific accent color should be decided before the build begins (yellow was floated as a possibility for the featured card, but it should be picked as part of an overall accent system rather than in isolation).

---

## Open Decisions for Build Session

1. **Accent color:** Pick the site's primary accent color. The featured card should use this same accent (not a separate color picked in isolation).
2. **Active nav highlight style:** underline, color change, or pill background.
3. **Mobile breakpoint value:** 768px vs 1024px (or other).
4. **Featured card accent treatment:** left-border stripe, glow, tag badge, or other.
5. **Send success behavior:** auto-close with confirmation, or stay open with success state.