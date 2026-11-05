<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f59e0b&height=170&section=header&text=Weather%20Icon%20Display&fontSize=36&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship%20Day%2027&descAlignY=62&descSize=17" alt="Weather Icon Display header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2563eb&center=true&vCenter=true&width=780&lines=Veda+Technology+Internship+%E2%80%A2+Day+27;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Static+Weather+Data+%E2%80%A2+Themed+Backgrounds" alt="Typing introduction" />

  <p><b>Blue/Amber Palette &#183; Responsive &#183; Static Data &#183; No Frameworks</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=for-the-badge)
  ![Static Data](https://img.shields.io/badge/Static_Data-f59e0b?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-10b981?style=for-the-badge)

</div>

---

Weather Icon Display — Static Data by **Abhishek Jadhav** — Web Developer and first-year BCA student at VIIT, Baramati. Built with **HTML5 + CSS3 + Vanilla JavaScript**: a responsive weather condition selector where users pick a condition from a dropdown and instantly see its matching icon, description, and themed background. Static JavaScript data only — no APIs, no backend, no frameworks.

> **Internship attribution:** 45-day Web Development Internship at **Veda Technology** — Day 27: Weather Icon Display (Static Data).

## Features

- **8 weather conditions**: Sunny, Partly Cloudy, Cloudy, Rainy, Thunderstorm, Snowy, Foggy, Windy.
- **Dropdown selector** with a placeholder option "Select Weather Condition".
- **Instant update** of icon, name, description, and themed background on selection.
- **Large weather emoji** with condition-specific subtle animations.
- **Themed background** that changes per condition (gradient + accent).
- **Default welcome state** with a neutral icon and instructions.
- **Reset button** returns to the default state.
- **Smooth transitions** when switching conditions.
- **Responsive** layout for mobile, tablet, and desktop down to 320px.
- **No APIs / no backend** — all data is static JavaScript.
- **No console errors.**

## Technologies

| Technology | Use |
|------------|-----|
| HTML5 | Semantic `main`, `section`, `select`, `button`, ARIA attributes (`index.html`) |
| CSS3 | Custom properties, Flexbox, gradients, animations, media queries (`style.css`) |
| JavaScript (ES6+) | Static weather data object, DOM manipulation, event listeners (`script.js`) |
| SVG | Favicon (`assets/favicon.svg`) |
| No Frameworks | Zero dependencies |
| ARIA | Accessible labels, live regions |

## Project Structure

```text
weather-icon-display/
├── index.html          # Semantic structure and weather card markup
├── style.css           # Responsive styling and theming
├── script.js           # Static data, rendering, interactions
├── README.md           # This file
├── Veda_Technology_Task_27_Project_Report.docx  # Project report
└── assets/
    └── favicon.svg     # Weather favicon
```

## How to Run

1. Open the `weather-icon-display` folder.
2. Double-click `index.html` — opens in Chrome / Edge / Firefox.
3. Or serve it: `python -m http.server 8000` → http://localhost:8000
4. Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.

No install, no build, no dependencies.

Quick syntax check:

```powershell
node --check script.js
```

## Weather Conditions

| Condition | Icon | Description |
|-----------|------|-------------|
| Sunny | ☀️ | Clear skies with bright sunshine. |
| Partly Cloudy | 🌤️ | A mix of sunshine and clouds. |
| Cloudy | ☁️ | Mostly cloudy skies. |
| Rainy | 🌧️ | Rain is falling. |
| Thunderstorm | ⛈️ | Thunder and lightning with heavy rain. |
| Snowy | ❄️ | Snowfall with cold temperatures. |
| Foggy | 🌫️ | Reduced visibility due to fog. |
| Windy | 🌬️ | Strong winds are blowing. |

## Testing Checklist

- [x] All 8 weather conditions render icon, name, description, and themed background.
- [x] Dropdown placeholder "Select Weather Condition" present.
- [x] Selection updates the card immediately.
- [x] Reset button returns to default state.
- [x] Default welcome state shown on load.
- [x] Icon animations play per condition.
- [x] Smooth transitions between states.
- [x] Responsive design works on mobile and desktop.
- [x] No JavaScript console errors.
- [x] Static data only — no APIs used.

## Limitations

- Static data only: conditions and descriptions are hard-coded, not live weather.
- No geolocation, no API keys, no backend.
- Visual themes are CSS-based approximations.

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f59e0b&height=120&section=footer" alt="Footer wave" />
  <p><sub>Veda Technology Internship — Day 27: Weather Icon Display (Static Data) — HTML5 · CSS3 · Vanilla JavaScript</sub></p>
</div>
