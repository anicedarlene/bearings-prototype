# Bearings – app screens (prototype UI)

React + Vite prototype of the six phone screens from Mei's journey (0:45–1:10 of the pitch video).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

## Get the PNGs for Canva

On the gallery page, click **Download PNG** under a phone, or **Download all PNGs**.
Files are 1368×2580 (3×), transparent background, named `phone-<id>.png`.
Chrome may ask once to allow multiple downloads.

You can also open one screen alone at `http://localhost:5173/#/screen/<id>`
(`tellonce`, `battery`, `confirm`, `alert`, `options`, `choose`) and screenshot it.

## Structure

```
src/
  data/mei.js          all text/copy (edit wording and battery values here)
  components/Phone.jsx the phone frame
  components/Icons.jsx warning + check icons (inline SVG)
  screens/*.jsx        one component per screen
  screens/index.js     screen list: id, timestamp, caption (add new screens here)
  App.jsx              gallery page + PNG export (html-to-image)
  styles.css           design tokens (CSS variables) and all styles
```

## Add a screen

1. Create `src/screens/MyScreen.jsx` (start with `<p className="brand">Bearings</p>`).
2. Register it in `src/screens/index.js`.

## Notes

- Battery type and capacity are sample values, not real data.
- Colours and sizes follow the design in the team's Claude artifact "Bearings – Mei's Journey".
