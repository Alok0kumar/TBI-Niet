# 🚀 Rocket Launch Splash Screen — Full Technical Documentation

> **Purpose:** This document describes every aspect of the rocket launch loading animation (splash screen) used on the NIET TBI website. Hand this to another AI or developer to replicate the same effect on any website.

---

## 📦 Tech Stack & Frameworks

| Technology | Version | Role |
|---|---|---|
| **Next.js** | 16.2.9 | React framework (App Router) |
| **React** | 19.2.4 | UI library |
| **TypeScript** | ^5 | Type safety |
| **Framer Motion** | ^12.40.0 | ALL animations (keyframes, transitions, variants) |
| **Tailwind CSS** | ^4 | Utility class layout & positioning |
| **next/image** | (built-in) | Optimized image rendering for rocket logo |
| **next/font/google** | (built-in) | Google Fonts — Outfit, Inter, JetBrains Mono |

### Key npm packages used in the splash screen
```json
"framer-motion": "^12.40.0",
"next": "16.2.9",
"react": "19.2.4"
```

---

## 🗂️ File Architecture

The splash screen system spans exactly **3 files**:

```
src/
├── app/
│   └── layout.tsx           ← Root layout — loads fonts, wraps everything in <ClientBody>
├── components/
│   └── layout/
│       ├── ClientBody.tsx   ← "use client" boundary — wraps children in <SplashScreen>
│       └── SplashScreen.tsx ← 🎯 THE ENTIRE ROCKET ANIMATION LIVES HERE
```

### Why the split between `layout.tsx` → `ClientBody.tsx` → `SplashScreen.tsx`?

Next.js App Router's `layout.tsx` is a **server component** by default. `useState` and `useEffect` (which power the phase timer) cannot run in server components. The solution is a thin `ClientBody.tsx` wrapper marked with `"use client"`, which injects the `SplashScreen` at the client boundary.

---

## ⚙️ How the Splash Screen Works — Step by Step

### Phase State Machine

The core logic is a **4-phase state machine** driven by `useState` + `useEffect` timers:

```typescript
type Phase = "idle" | "rumble" | "launch" | "reveal" | "done"
```

| Phase | Duration | What Happens |
|---|---|---|
| `idle` | 0 → 800ms | Rocket appears (scales in from 0 to 1). Engine flame is invisible. |
| `rumble` | 800ms → 2000ms | Rocket shakes side to side. Small flame flickers. Smoke clouds begin to form. |
| `launch` | 2000ms → 4000ms | Rocket blasts upward off screen. Flame explodes to massive size. Smoke clouds billow out and cover the screen, then fade. |
| `reveal` | 4000ms → 4800ms | Splash overlay fades to `opacity: 0`. Website content fades in with `blur(0px)` transition. |
| `done` | 4800ms+ | Splash screen component is fully removed from DOM. Only the website renders. |

```typescript
useEffect(() => {
  const t1 = setTimeout(() => setPhase("rumble"),  800);   // idle → rumble
  const t2 = setTimeout(() => setPhase("launch"),  2000);  // rumble → launch
  const t3 = setTimeout(() => setPhase("reveal"),  4000);  // launch → reveal
  const t4 = setTimeout(() => setPhase("done"),    4800);  // reveal → done
  return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
}, []);
```

---

## 🧩 Component Structure (DOM Tree)

```
<SplashScreen>                         ← Stateful wrapper, manages phase
  │
  ├── <div>                            ← Website content (children), blurred/hidden until "reveal"
  │     style: filter: blur(20px) / opacity: 0  →  reveal: blur(0px) / opacity: 1
  │     transition: all 1000ms ease-in-out
  │
  └── <AnimatePresence>                ← Framer Motion — handles exit animation of overlay
        └── <motion.div>               ← BLACK fullscreen overlay (z-index: 9999)
              │                          Exits with: opacity: 0, duration: 0.8s
              │
              ├── <motion.div>         ← ROCKET CONTAINER (flex column, centered)
              │     │  Animates: rumble (shake x), launch (fly up y)
              │     │
              │     ├── <motion.div>   ← ROCKET LOGO WRAPPER (180x220px / 220x270px on md)
              │     │     │  initial: scale 0, opacity 0
              │     │     │  animate: scale 1, opacity 1 (0.5s ease)
              │     │     │
              │     │     ├── <div>    ← GLOW HALO (radial-gradient white blur behind logo)
              │     │     └── <Image> ← "/ecell-rocket-logo.png" (Next.js optimized, 144x144)
              │     │
              │     └── <div>          ← ENGINE FLAME WRAPPER (-mt-[5%] overlap)
              │           └── <motion.div>  ← FLAME (rounded-full, white→gold→orange gradient)
              │                         idle: invisible
              │                         rumble: flickers width/height/opacity
              │                         launch: explodes to 150w × 800h, then opacity 0
              │
              ├── <div>                ← SMOKE CLOUD CONTAINER (absolute, bottom-0)
              │     ├── <motion.div>  ← LEFT CLOUD  (flies left + up + expands on launch)
              │     ├── <motion.div>  ← RIGHT CLOUD (flies right + up + expands on launch)
              │     └── <motion.div>  ← CENTER CLOUD (covers full screen, scales to 30x)
              │
              └── <motion.p>          ← "Launching Innovation" text (fades out on launch)
```

---

## 🎞️ Animation Breakdown — Framer Motion Details

### 1. Rocket Logo — Appear
```tsx
<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}  // Expo ease out
/>
```

---

### 2. Rocket Container — Rumble (shake)
```tsx
animate={
  phase === "rumble" ? {
    x: [0, -3, 3, -2, 2, -1, 1, 0],         // micro left-right jitter
    transition: { duration: 0.15, repeat: Infinity, repeatType: "loop" }
  } : {}
}
```

---

### 3. Rocket Container — Launch (fly off screen)
```tsx
animate={
  phase === "launch" ? {
    y: [0, 10, -window.innerHeight * 1.2],   // dip down, then fly up past viewport
    transition: {
      duration: 1.0,
      ease: [0.45, 0, 0.55, 1],             // cubic-bezier: slow start, fast exit
      times: [0, 0.1, 1],                   // 10% of time for dip, 90% for launch
    }
  } : {}
}
```

---

### 4. Engine Flame
```tsx
// idle
initial={{ width: 16, height: 0, opacity: 0 }}

// rumble — flickers randomly
animate={phase === "rumble" ? {
  width:   [16, 24, 18, 26, 16],
  height:  [60, 90, 70, 100, 60],
  opacity: [0.9, 1, 0.8, 1, 0.9],
  transition: { duration: 0.15, repeat: Infinity, repeatType: "loop" }
} : ...}

// launch — explodes then vanishes
animate={phase === "launch" ? {
  width:   [24, 80, 150],
  height:  [90, 400, 800],
  opacity: [1, 1, 0],
  transition: { duration: 1.0, ease: "easeOut" }
} : ...}

// Flame CSS:
style={{
  background: "linear-gradient(to bottom, #FFFFFF 0%, #FFD700 20%, #FF4500 60%, rgba(255,69,0,0) 100%)",
  filter: "blur(2px)"
}}
```

---

### 5. Smoke Clouds (3 clouds)

**Left Cloud:**
```tsx
initial={{ width: 100, height: 100, opacity: 0, x: -20, y: 50, scale: 0 }}

// rumble — forms leftward
animate={phase === "rumble" ? {
  opacity: [0, 0.6, 0.8], scale: [0, 1, 1.5],
  x: [-20, -100, -150],  y: [50, 0, -20],
  transition: { duration: 1, ease: "easeOut" }
} : ...}

// launch — explodes massively left + up, then fades
animate={phase === "launch" ? {
  opacity: [0.8, 1, 1, 0],
  scale:   [1.5, 10, 20],
  x:       [-150, -400, -800],
  y:       [-20, -300, -800],
  transition: { duration: 1.5, ease: "easeOut" }
} : ...}
```

**Right Cloud** — Mirror of Left Cloud (x values flipped to positive), with `delay: 0.1`

**Center Main Cloud** — Covers full screen on launch:
```tsx
initial={{ width: 150, height: 150, opacity: 0, y: 100, scale: 0 }}

// launch — scale 2 → 30, covers whole screen
animate={phase === "launch" ? {
  opacity: [0.9, 1, 1, 0],
  scale:   [2, 15, 30],       // 30x scale = full-screen coverage
  y:       [0, -500, -1500],
  transition: { duration: 1.5, ease: "easeOut" }
} : ...}
```

**Cloud CSS gradient (fire + smoke colors):**
```tsx
// Side clouds
background: "radial-gradient(circle, rgba(255,220,100,0.9) 0%, rgba(255,69,0,0.8) 30%, rgba(120,80,80,0.6) 60%, transparent 100%)"
filter: "blur(20px)"

// Center cloud
background: "radial-gradient(circle, rgba(255,255,200,1) 0%, rgba(255,140,0,0.9) 25%, rgba(200,50,0,0.7) 50%, rgba(80,70,70,0.5) 75%, transparent 100%)"
filter: "blur(30px)"
```

---

### 6. Overlay Exit (Framer Motion AnimatePresence)
```tsx
<AnimatePresence>
  {(phase !== "reveal" && phase !== "done") && (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ background: "rgba(0,0,0,1)" }}  // solid black
    >
      ...
    </motion.div>
  )}
</AnimatePresence>
```

When `phase` becomes `"reveal"`, the `AnimatePresence` detects that the overlay is unmounting and plays the `exit` animation (fade to transparent over 0.8s).

---

### 7. Website Reveal (Blur Transition)
```tsx
<div
  className="transition-all duration-1000 ease-in-out"
  style={{
    filter:  (phase === "reveal" || phase === "done") ? "blur(0px)"  : "blur(20px)",
    opacity: (phase === "reveal" || phase === "done") ? 1            : 0,
  }}
>
  {children}
</div>
```

The children (full website) render from the very start, but are hidden behind `opacity: 0` and `blur(20px)`. On reveal, these CSS properties transition smoothly — the blur collapses and opacity rises, creating a "materializes out of the smoke" effect.

---

## 🖼️ Assets

| Asset | Path | Size | Notes |
|---|---|---|---|
| Rocket Logo | `/public/ecell-rocket-logo.png` | PNG | Must be a **PNG with transparent background**. Rendered at 144×144px. |

The logo has a radial white glow halo added behind it via a blurred `<div>`:
```tsx
<div
  className="absolute inset-0 rounded-full scale-[0.7]"
  style={{
    background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
    filter: "blur(20px)",
  }}
/>
```

---

## 🔠 Typography

The tagline text under the rocket uses:
```tsx
<motion.p
  className="absolute bottom-16 text-white/40 text-sm font-mono tracking-[0.3em] uppercase"
>
  Launching Innovation
</motion.p>
```
- Font: **JetBrains Mono** (monospace) — loaded via `next/font/google`
- Tracking: `0.3em` (very wide letter spacing)
- Color: `white` at `40%` opacity — subtle, ghostly
- Fades out when `phase === "launch"`

---

## 📐 Layout & Positioning

| Element | CSS |
|---|---|
| Overlay | `fixed inset-0 z-[9999] flex items-center justify-center` |
| Rocket Container | `relative flex flex-col items-center` |
| Smoke Container | `absolute bottom-0 left-0 right-0 h-10 flex justify-center items-end pointer-events-none z-[-1]` |
| Logo Wrapper | `relative w-[180px] h-[220px] md:w-[220px] md:h-[270px] flex items-center justify-center` |
| Flame Wrapper | `relative -mt-[5%] flex flex-col items-center` (negative margin to overlap rocket bottom) |
| Tagline | `absolute bottom-16 text-white/40 text-sm font-mono tracking-[0.3em] uppercase` |

The smoke clouds use `z-[-1]` so they appear **behind** the rocket during rumble, but expand so massively on launch that they visually cover everything.

---

## 🔌 Integration Pattern (How to Add to Any Next.js App)

### Step 1 — Install Framer Motion
```bash
npm install framer-motion
```

### Step 2 — Create the SplashScreen component
Create `src/components/layout/SplashScreen.tsx` with the full component code.

Replace `/ecell-rocket-logo.png` with **your own logo** (or any PNG).
Replace `"Launching Innovation"` with your own tagline text.

### Step 3 — Create the Client Boundary wrapper
Create `src/components/layout/ClientBody.tsx`:
```tsx
"use client";
import SplashScreen from "@/components/layout/SplashScreen";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  return <SplashScreen>{children}</SplashScreen>;
}
```

### Step 4 — Wrap layout.tsx children
In `src/app/layout.tsx`, wrap all body content in `<ClientBody>`:
```tsx
// layout.tsx (server component — no "use client")
import ClientBody from "@/components/layout/ClientBody";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientBody>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
```

### Step 5 — Add logo to /public
Place your logo PNG at `public/your-logo.png` and reference it in SplashScreen as `/your-logo.png`.

---

## 🌐 Adapting to Non-Next.js Websites (React / Vite)

If you're not using Next.js, the `SplashScreen.tsx` component works with any React setup. The only changes needed:

1. **Replace `<Image>` from `next/image`** with a plain `<img>` tag:
   ```tsx
   // Instead of:
   import Image from "next/image";
   <Image src="/logo.png" width={144} height={144} ... />

   // Use:
   <img src="/logo.png" width={144} height={144} className="object-contain relative z-10" />
   ```

2. **Remove `"use client"`** directive — it's Next.js App Router specific.

3. **Wrap your app root** (`<App />` in `main.tsx`) with `<SplashScreen>` directly.

4. Install Framer Motion: `npm install framer-motion`

---

## ⚡ Complete SplashScreen.tsx Source Code

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"idle" | "rumble" | "launch" | "reveal" | "done">("idle");

  useEffect(() => {
    // Phase 1: Idle (rocket sits centered) — 0.8s
    const t1 = setTimeout(() => setPhase("rumble"), 800);
    
    // Phase 2: Rumble (shake + small flame) — 1.2s
    const t2 = setTimeout(() => setPhase("launch"), 2000);
    
    // Phase 3: Launch (rocket flies, massive smoke explodes & fades) — 2.0s
    const t3 = setTimeout(() => setPhase("reveal"), 4000);
    
    // Phase 4: Reveal (smoke is gone, website smoothly fades in) — 0.8s
    const t4 = setTimeout(() => setPhase("done"), 4800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (phase === "done") {
    return <>{children}</>;
  }

  return (
    <>
      {/* Background content — Remains hidden/blurred until 'reveal' phase */}
      <div
        className="transition-all duration-1000 ease-in-out"
        style={{
          filter: (phase === "reveal" || phase === "done") ? "blur(0px)" : "blur(20px)",
          opacity: (phase === "reveal" || phase === "done") ? 1 : 0,
        }}
      >
        {children}
      </div>

      {/* Splash Overlay */}
      <AnimatePresence>
        {(phase !== "reveal" && phase !== "done") && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: "rgba(0, 0, 0, 1)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Rocket Container */}
            <motion.div
              className="relative flex flex-col items-center"
              animate={
                phase === "rumble"
                  ? {
                      x: [0, -3, 3, -2, 2, -1, 1, 0],
                      transition: {
                        duration: 0.15,
                        repeat: Infinity,
                        repeatType: "loop" as const,
                      },
                    }
                  : phase === "launch"
                  ? {
                      y: [0, 10, -window.innerHeight * 1.2],
                      transition: {
                        duration: 1.0,
                        ease: [0.45, 0, 0.55, 1],
                        times: [0, 0.1, 1],
                      },
                    }
                  : {}
              }
            >
              {/* Rocket Logo */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="relative w-[180px] h-[220px] md:w-[220px] md:h-[270px] flex items-center justify-center"
              >
                {/* Glow/Halo behind the rocket */}
                <div 
                  className="absolute inset-0 rounded-full scale-[0.7]"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
                
                <Image
                  src="/ecell-rocket-logo.png"
                  alt="E-Cell NIET"
                  width={144}
                  height={144}
                  className="object-contain relative z-10"
                  priority
                />
              </motion.div>

              {/* Core Engine Flame */}
              <div className="relative -mt-[5%] flex flex-col items-center">
                <motion.div
                  className="rounded-full origin-top"
                  style={{
                    background: "linear-gradient(to bottom, #FFFFFF 0%, #FFD700 20%, #FF4500 60%, rgba(255,69,0,0) 100%)",
                    filter: "blur(2px)",
                  }}
                  initial={{ width: 16, height: 0, opacity: 0 }}
                  animate={
                    phase === "rumble"
                      ? {
                          width: [16, 24, 18, 26, 16],
                          height: [60, 90, 70, 100, 60],
                          opacity: [0.9, 1, 0.8, 1, 0.9],
                          transition: { duration: 0.15, repeat: Infinity, repeatType: "loop" },
                        }
                      : phase === "launch"
                      ? {
                          width: [24, 80, 150],
                          height: [90, 400, 800],
                          opacity: [1, 1, 0],
                          transition: { duration: 1.0, ease: "easeOut" },
                        }
                      : { width: 16, height: 0, opacity: 0 }
                  }
                />
              </div>
            </motion.div>

            {/* Massive Billowing Smoke Clouds */}
            <div className="absolute bottom-0 left-0 right-0 h-10 flex justify-center items-end pointer-events-none z-[-1]">
              {/* Left Cloud */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255,220,100,0.9) 0%, rgba(255,69,0,0.8) 30%, rgba(120,80,80,0.6) 60%, transparent 100%)",
                  filter: "blur(20px)",
                }}
                initial={{ width: 100, height: 100, opacity: 0, x: -20, y: 50, scale: 0 }}
                animate={
                  phase === "rumble"
                    ? {
                        opacity: [0, 0.6, 0.8], scale: [0, 1, 1.5],
                        x: [-20, -100, -150],   y: [50, 0, -20],
                        transition: { duration: 1, ease: "easeOut" },
                      }
                    : phase === "launch"
                    ? {
                        opacity: [0.8, 1, 1, 0], scale: [1.5, 10, 20],
                        x: [-150, -400, -800],   y: [-20, -300, -800],
                        transition: { duration: 1.5, ease: "easeOut" },
                      }
                    : { opacity: 0, scale: 0 }
                }
              />
              
              {/* Right Cloud */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255,220,100,0.9) 0%, rgba(255,69,0,0.8) 30%, rgba(120,80,80,0.6) 60%, transparent 100%)",
                  filter: "blur(20px)",
                }}
                initial={{ width: 100, height: 100, opacity: 0, x: 20, y: 50, scale: 0 }}
                animate={
                  phase === "rumble"
                    ? {
                        opacity: [0, 0.6, 0.8], scale: [0, 1, 1.5],
                        x: [20, 100, 150],       y: [50, 0, -20],
                        transition: { duration: 1, ease: "easeOut", delay: 0.1 },
                      }
                    : phase === "launch"
                    ? {
                        opacity: [0.8, 1, 1, 0], scale: [1.5, 10, 20],
                        x: [150, 400, 800],       y: [-20, -300, -800],
                        transition: { duration: 1.5, ease: "easeOut" },
                      }
                    : { opacity: 0, scale: 0 }
                }
              />

              {/* Center Main Cloud */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,200,1) 0%, rgba(255,140,0,0.9) 25%, rgba(200,50,0,0.7) 50%, rgba(80,70,70,0.5) 75%, transparent 100%)",
                  filter: "blur(30px)",
                }}
                initial={{ width: 150, height: 150, opacity: 0, y: 100, scale: 0 }}
                animate={
                  phase === "rumble"
                    ? {
                        opacity: [0, 0.5, 0.9], scale: [0, 1, 2],
                        y: [100, 50, 0],
                        transition: { duration: 1, ease: "easeOut", delay: 0.2 },
                      }
                    : phase === "launch"
                    ? {
                        opacity: [0.9, 1, 1, 0],
                        scale:   [2, 15, 30],
                        y:       [0, -500, -1500],
                        transition: { duration: 1.5, ease: "easeOut" },
                      }
                    : { opacity: 0, scale: 0 }
                }
              />
            </div>

            {/* "Launching Innovation" Text */}
            <motion.p
              className="absolute bottom-16 text-white/40 text-sm font-mono tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "launch" ? 0 : 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Launching Innovation
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

## 🎨 Customization Reference

| What to Change | Where | What to Edit |
|---|---|---|
| Logo image | `SplashScreen.tsx` L102 | Change `src="/ecell-rocket-logo.png"` |
| Tagline text | `SplashScreen.tsx` L238 | Change `"Launching Innovation"` |
| Animation timing | `SplashScreen.tsx` L11–22 | Change `setTimeout` values |
| Flame colors | `SplashScreen.tsx` L118 | Change the `linear-gradient` values |
| Smoke colors | `SplashScreen.tsx` L149, L178, L207 | Change the `radial-gradient` values |
| Rocket fly height | `SplashScreen.tsx` L73 | Change `window.innerHeight * 1.2` multiplier |
| Overlay background | `SplashScreen.tsx` L54 | Change `rgba(0,0,0,1)` to any color |
| Website reveal blur | `SplashScreen.tsx` L42 | Change `blur(20px)` amount |

---

## 🔑 Key Framer Motion Concepts Used

| Concept | Usage in SplashScreen |
|---|---|
| `motion.div` | Animatable wrapper for all elements |
| `AnimatePresence` | Enables exit animations when overlay unmounts |
| `initial` | Starting state of animation |
| `animate` | Target state (can be an object or conditional expression) |
| `exit` | State to animate to when component is removed from DOM |
| `transition` | Timing, easing, duration, delay, repeat config |
| `repeatType: "loop"` | Makes rumble shake loop infinitely |
| `times: [0, 0.1, 1]` | Maps keyframe values to % of duration (for the launch dip) |
| Keyframe arrays | e.g. `x: [0, -3, 3, -2, 2, -1, 1, 0]` — multiple states in sequence |

---

*Generated from NIET TBI Website source — `src/components/layout/SplashScreen.tsx`*
