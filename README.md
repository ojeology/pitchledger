# PitchLedger

Track every pitch, deadline, nudge, box and clip in your writing pipeline — plus a built-in drafts pad.

- **📌 Today** — what needs action right now (nudges due, overdue, standing orders)
- **📤 Outlets** — every publication with live countdowns to nudge/close dates, one-tap status buttons, activity log
- **🎯 Opportunities** — publishing platforms and markets, tiered, with pay and how to submit
- **📦 Boxes** — the material-allocation system: every essay's kit and off-limits list
- **📝 Drafts** — paste anything; auto-saves on your device with word count
- **⚙️ Settings** — pipeline stats, backup export/import, app name, wipe

## Deploying

This is a static site. Upload the three files (`index.html`, `manifest.webmanifest`, `sw.js`) to any static host (GitHub Pages, Netlify, Cloudflare Pages) or run locally:

```bash
python3 -m http.server 8080
```

Data stays in the browser (localStorage). Use **Settings → Export** to back up, and **Import** to restore on another device.

PWA: open the deployed URL in Chrome/Android and use "Add to Home Screen" — works offline.
