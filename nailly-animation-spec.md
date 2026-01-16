# Nailly Website Animation Technical Specification
## Source: https://nailly-ttm.webflow.io/home-1

---

## ANIMATION SYSTEM OVERVIEW

**Framework:** Webflow IX2 (Interactions 2.0)
**Total Events:** 183
**Total Action Lists:** 64
**Trigger Types:** Page Load, Scroll Into View, Scrolling In View (Parallax), Mouse Over/Out, Click

---

## 1. PAGE LOAD ANIMATIONS

### 1.1 Marquee Infinite Scroll (a-57, a-59)

**Target:** `.marquee-content-3`
**Trigger:** PAGE_START
**Implementation:**

```
INITIAL STATE:
  transform: translateX(0%)

ANIMATION SEQUENCE:
  Step 1: translateX(0%) → translateX(-100%)
    duration: 20000ms
    easing: linear
    
  Step 2: Reset to translateX(0%)
    duration: 0ms
    
  Step 3: Loop infinitely
```

**Figma Implementation:**
- Create frame containing duplicated text content (2x width)
- Apply horizontal auto-animate from 0 to -50% (or -100% of single content width)
- Set linear easing, 20s duration
- Enable loop

---

### 1.2 Hero Section Load Animation (a-13, a-14)

**Target Elements:**
- `.hero-title.hero-title-left`
- `.hero-title.hero-title-right`
- `.hero-image`
- `.hero-desc-wrapper`
- `.hero-btn-wrapper`

**Trigger:** PAGE_START

**Animation Sequence:**

```
HERO TITLE LEFT:
  Initial: opacity: 0, translateY: 100px
  Final: opacity: 1, translateY: 0
  Duration: 1000ms
  Easing: outQuart
  Delay: 0ms

HERO TITLE RIGHT:
  Initial: opacity: 0, translateY: 100px
  Final: opacity: 1, translateY: 0
  Duration: 1000ms
  Easing: outQuart
  Delay: 200ms (staggered)

HERO IMAGE:
  Initial: opacity: 0, scale: 1.1
  Final: opacity: 1, scale: 1
  Duration: 1200ms
  Easing: outQuart
  Delay: 400ms

HERO DESCRIPTION:
  Initial: opacity: 0, translateY: 50px
  Final: opacity: 1, translateY: 0
  Duration: 800ms
  Easing: outQuart
  Delay: 600ms

HERO BUTTON:
  Initial: opacity: 0, translateY: 30px
  Final: opacity: 1, translateY: 0
  Duration: 600ms
  Easing: outQuart
  Delay: 800ms
```

---

## 2. SCROLL-TRIGGERED ANIMATIONS

### 2.1 Slide In Bottom (Preset: slideInBottom)

**Usage:** Section headings, content blocks
**Trigger:** SCROLL_INTO_VIEW

```
INITIAL STATE (Frame 1):
  opacity: 0

INITIAL STATE (Frame 2):
  transform: translateY(100px)

ANIMATION (Frame 3):
  transform: translateY(0)
  opacity: 1
  duration: 1000ms
  easing: outQuart (cubic-bezier(0.165, 0.84, 0.44, 1))
```

**Figma Implementation:**
- Create component with initial state (y+100, opacity 0)
- Animate to final state on scroll trigger
- Use Smart Animate with outQuart easing

---

### 2.2 Slide In Left (Preset: slideInLeft)

**Usage:** Left-aligned content, About section images

```
INITIAL STATE:
  opacity: 0
  transform: translateX(-100px)

ANIMATION:
  transform: translateX(0)
  opacity: 1
  duration: 1000ms
  easing: outQuart
```

---

### 2.3 Slide In Right (Preset: slideInRight)

**Usage:** Right-aligned content

```
INITIAL STATE:
  opacity: 0
  transform: translateX(100px)

ANIMATION:
  transform: translateX(0)
  opacity: 1
  duration: 1000ms
  easing: outQuart
```

---

### 2.4 Parallax Scroll Effect (a-3, a-7)

**Target:** `.hero-image`
**Trigger:** SCROLLING_IN_VIEW (continuous)
**Smoothing:** 80

```
KEYFRAME 0% (Element enters viewport):
  transform: scale(1) translateY(0)

KEYFRAME 40% (Element mid-scroll):
  transform: scale(1.1) translateY(-50px)

KEYFRAME 100% (Element exits viewport):
  transform: scale(1.2) translateY(-100px)
```

**Figma Implementation:**
- Use scroll-linked animation
- Map scroll position 0-100% to keyframe values
- Apply smooth interpolation

---

## 3. HOVER INTERACTIONS

### 3.1 Service Items Hover (a-9, a-11)

**Target:** `.service-items.items-left`, `.service-items.items-right`
**Trigger:** MOUSE_OVER / MOUSE_OUT

**ITEMS-LEFT (a-9):**
```
INITIAL STATE:
  .service-items: translateX(0)
  .service-image: translateX(0), opacity: 0

HOVER STATE:
  .service-items: translateX(20px)
    duration: 300ms
    easing: ease
  .service-image: translateX(20px), opacity: 1
    duration: 500ms
    easing: ease
```

**ITEMS-RIGHT (a-11):**
```
INITIAL STATE:
  .service-items: translateX(0)
  .service-image: translateX(0), opacity: 0

HOVER STATE:
  .service-items: translateX(-20px)
    duration: 300ms
    easing: ease
  .service-image: translateX(-20px), opacity: 1
    duration: 500ms
    easing: ease
```

**Figma Implementation:**
- Create component with default and hover variants
- Image hidden by default (opacity 0, translated off-position)
- On hover: reveal image, shift container

---

### 3.2 Product Card Hover (a-38, a-39)

**Target:** `.product-items`
**Trigger:** MOUSE_OVER / MOUSE_OUT

```
INITIAL STATE:
  .product-image: scale(1)
  .product-thumbnail: translateY(0)

HOVER STATE:
  .product-image: scale(1.1)
    duration: 500ms
    easing: ease
  .product-thumbnail: translateY(-10px)
    duration: 300ms
```

---

### 3.3 Blog Items Hover (a-16, a-17)

**Target:** `.blog-items`
**Trigger:** MOUSE_OVER / MOUSE_OUT

```
INITIAL STATE:
  .blog-image: scale(1)
  .blog-content: translateY(0)

HOVER STATE:
  .blog-image: scale(1.05)
    duration: 400ms
    easing: ease
  .blog-content: translateY(-5px)
    duration: 300ms
```

---

### 3.4 Team Thumbnail Hover (a-50, a-51)

**Target:** `.team-thumbnail`, `.team-thumbnail-2`
**Trigger:** MOUSE_OVER / MOUSE_OUT

```
INITIAL STATE:
  scale: 1
  border: transparent

HOVER STATE:
  scale: 1.05
  border: 2px solid accent-color
  duration: 300ms
  easing: ease
```

---

### 3.5 Social Link Hover (a-18, a-19)

**Target:** `.social-link`
**Trigger:** MOUSE_OVER / MOUSE_OUT

```
INITIAL STATE:
  scale: 1
  background: transparent

HOVER STATE:
  scale: 1.1
  background: accent-color
  duration: 200ms
  easing: ease
```

---

## 4. MARQUEE/TICKER ANIMATIONS

### 4.1 Primary Marquee (Section: region[ref_141])

**Structure:**
```html
<div class="marquee-wrapper">
  <div class="marquee-track">
    <div class="marquee-content-3">
      <!-- Content duplicated for seamless loop -->
      Manicure / Nail polish / Pedicure / Transparent Nail
      [REPEATED 5x for seamless scroll]
    </div>
  </div>
</div>
```

**Animation:**
```
CONTINUOUS SCROLL:
  transform: translateX(0) → translateX(-100%)
  duration: 20000ms
  timing: linear
  iteration: infinite
  direction: normal (left-to-right scroll creates rightward content movement)
```

**Figma Implementation:**
- Create frame with overflow hidden
- Inner content = 2x viewport width (duplicate text)
- Animate from x:0 to x:-50% (half total width)
- Loop infinitely with linear timing

---

### 4.2 Secondary Marquee (Reverse Direction)

**Animation:**
```
REVERSE SCROLL:
  transform: translateX(-100%) → translateX(0)
  duration: 20000ms
  timing: linear
  iteration: infinite
```

---

## 5. ROTATING BUTTON ANIMATION

### 5.1 Load More Button (Circular Text)

**Target:** `.rotating-button` or similar
**Animation Type:** Continuous Rotation

```
ROTATION:
  transform: rotate(0deg) → rotate(360deg)
  duration: 10000ms
  timing: linear
  iteration: infinite
```

**Figma Implementation:**
- Create circular text path component
- Apply continuous rotation animation
- Inner arrow icon remains static (counter-rotate or separate layer)

---

## 6. SPLIT TEXT ANIMATIONS

### 6.1 Section Titles (About, Services)

**Structure:**
- Title split into multiple heading elements
- Example: "Abo" + "ut" + "us" = "About us"

**Animation:**
```
ELEMENT 1 ("Abo"):
  Initial: translateX(-100%), opacity: 0
  Final: translateX(0), opacity: 1
  Duration: 800ms
  Easing: outQuart
  Delay: 0ms

ELEMENT 2 ("ut"):
  Initial: translateY(100%), opacity: 0
  Final: translateY(0), opacity: 1
  Duration: 800ms
  Easing: outQuart
  Delay: 200ms

ELEMENT 3 ("us"):
  Initial: translateX(100%), opacity: 0
  Final: translateX(0), opacity: 1
  Duration: 800ms
  Easing: outQuart
  Delay: 400ms
```

---

## 7. EASING REFERENCE

| Name | CSS | Cubic Bezier |
|------|-----|--------------|
| ease | ease | (0.25, 0.1, 0.25, 1) |
| outQuart | custom | (0.165, 0.84, 0.44, 1) |
| linear | linear | (0, 0, 1, 1) |
| easeOut | ease-out | (0, 0, 0.58, 1) |
| easeInOut | ease-in-out | (0.42, 0, 0.58, 1) |

---

## 8. CSS CLASS REFERENCE

### Hero Section
- `.hero-section` - Main hero container
- `.hero-section-inner` - Inner wrapper
- `.hero-desc-wrapper` - Description container
- `.hero-content-wrapper` - Content container
- `.hero-title.hero-title-left` - Left title (H1)
- `.hero-title.hero-title-right` - Right title (H1)
- `.hero-image-wrapper` - Image wrapper
- `.hero-image` - Hero image
- `.hero-btn-wrapper` - Button container

### Services Section
- `.service-items.items-left` - Left-aligned service items
- `.service-items.items-right` - Right-aligned service items
- `.service-image` - Service hover reveal image

### Products Section
- `.product-items` - Product card container
- `.product-image` - Product image
- `.product-thumbnail` - Product thumbnail

### Marquee Section
- `.marquee-wrapper` - Marquee container
- `.marquee-track` - Scrolling track
- `.marquee-content-3` - Content element

### Team Section
- `.team-thumbnail` - Team member thumbnail
- `.team-2-item-wrap` - Team item wrapper

### Blog Section
- `.blog-items` - Blog card container

---

## 9. FIGMA-SPECIFIC IMPLEMENTATION NOTES

### For html.to.design / GreenShift Pipeline:

1. **Scroll Animations:** Use `data-gs-scroll-trigger` attributes
2. **Hover States:** Create component variants (Default/Hover)
3. **Marquee:** Use CSS animation with `@keyframes` or GreenShift infinite loop block
4. **Parallax:** Use `data-gs-parallax` with scroll-linked values

### GreenShift Data Attributes:
```html
<!-- Scroll Reveal -->
<div data-gs-scroll-trigger="true" 
     data-gs-animation="fadeInUp"
     data-gs-duration="1000"
     data-gs-easing="outQuart">

<!-- Hover Effect -->
<div data-gs-hover="scale"
     data-gs-hover-scale="1.1"
     data-gs-duration="500">

<!-- Parallax -->
<div data-gs-parallax="true"
     data-gs-parallax-speed="0.5"
     data-gs-parallax-direction="y">
```

---

## 10. ANIMATION TIMING SUMMARY

| Animation | Duration | Delay | Easing |
|-----------|----------|-------|--------|
| Hero Title Load | 1000ms | 0-200ms stagger | outQuart |
| Scroll Reveal | 1000ms | 0ms | outQuart |
| Service Hover | 300-500ms | 0ms | ease |
| Product Hover | 300-500ms | 0ms | ease |
| Marquee Scroll | 20000ms | 0ms | linear |
| Button Rotation | 10000ms | 0ms | linear |

---

## 11. WEBFLOW IX2 EVENT IDS FOR REFERENCE

| Event ID | Type | Target | Action List |
|----------|------|--------|-------------|
| e-40 | MOUSE_OVER | .service-items.items-left | a-9 |
| e-42 | MOUSE_OVER | .service-items.items-right | a-11 |
| e-57 | MOUSE_OVER | .blog-items | a-16 |
| e-258 | MOUSE_OVER | .product-items | a-38 |
| e-269 | MOUSE_OVER | .team-2-item-wrap | a-46 |
| e-283 | MOUSE_OVER | .team-thumbnail | a-50 |
| e-320 | PAGE_START | page | a-57 (marquee) |
| e-421 | PAGE_START | page | a-13 (hero) |
| e-81 | SCROLL_INTO_VIEW | elements | slideInBottom |

---

*Generated from live Webflow IX2 interaction data*
*For use with Figma MCP / html.to.design / GreenShift WordPress pipeline*
