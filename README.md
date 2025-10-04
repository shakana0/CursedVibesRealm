# 🩸 CursedVibesRealm  

The frontend companion for **CursedVibes** (backend API), bringing immersive storytelling and interactive animations to life.  

Currently under development ⚙️  

---

## 🌌 Background  
**CursedVibesRealm** is focused on delivering a rich narrative-driven experience with polished UX and captivating animations.  
It works alongside the **CursedVibes API**, powering dynamic scenes and interactive character experiences.  
The design follows a custom **Figma design**, ensuring a consistent visual identity throughout the game.  

---

## 🔧 Tech Stack  

| Technology | Purpose |
|------------|---------|
| **Next.js** | React framework for server-side rendering and modern web apps |
| **TypeScript** | Type-safe development for scalable code |
| **Tailwind CSS** | Utility-first styling for responsive and fast UI design |
| **Framer Motion** | Smooth animations and transitions for an immersive experience |
| **Custom Hooks & Types** | Encapsulate reusable logic and type-safe interfaces |
| **CursedText.tsx** | Dynamic text component supporting effects like `glow`, `drip`, `melt`, `glitch`, `bleed` with intensity, blur, pulse, and click handlers |

---

## 🚀 Getting Started  

Run the API locally:  
```bash
npm install

npm run dev

Open [http://localhost:3000](http://localhost:3000) 

```
---

## 🚀 Current Features  

- Dynamic text effects with **CursedText.tsx**  
- Scene rendering from local JSON files via **StoryController.tsx** and **SceneEngine.tsx**  
- Interactive animations and transitions powered by **Framer Motion**  
- Fully responsive UI built with **Tailwind CSS**  
- UX-focused design following the **Figma layout**  

---

## 🧩 Roadmap (WIP)  

- [ ] Implement player stats and choices affecting characters and story  
- [ ] Fetch scenes dynamically from **CursedVibes API** (Azure Blob Storage)
- [ ] Fetch characters from the backend API   
- [ ] Add AI-powered chat UI  
- [ ] Expand interactive animations and storytelling effects  
- [ ] Continue refining UI according to Figma design  
