# React Notes App

A small React notes application that supports creating, searching, deleting, and persisting notes in the browser using localStorage.

**Implemented features**
- **Add Notes:** create notes with a 200-character limit (see [src/components/AddNotes.js](src/components/AddNotes.js)).
- **Delete Notes:** delete any note from the list (see [src/components/Note.js](src/components/Note.js)).
- **Search:** filter notes by text with a search input (see [src/components/Search.js](src/components/Search.js)).
- **Dark Mode Toggle:** toggle app theme (basic toggle in [src/components/Header.js](src/components/Header.js)).
- **Timestamps:** each note stores creation date and time.
- **Persistence:** notes are saved to `localStorage` under the key `react-notes-app-data` and are initialized from storage on app load (see [src/App.js](src/App.js)).
- **Character counter & validation:** prevents saving empty notes and shows remaining characters while typing.

**Project structure (key files)**
- [src/App.js](src/App.js) — main app, state management, localStorage persistence.
- [src/index.js](src/index.js) — app entry.
- [src/index.css](src/index.css) — global styling.
- [src/components/AddNotes.js](src/components/AddNotes.js) — note creation component.
- [src/components/Note.js](src/components/Note.js) — single note display and delete.
- [src/components/NotesList.js](src/components/NotesList.js) — list of notes + add-note component.
- [src/components/Search.js](src/components/Search.js) — search input.
- [src/components/Header.js](src/components/Header.js) — app header and theme toggle.
- [package.json](package.json) — dependencies and scripts.

**Getting started**

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

**How persistence works**
- Notes are stored in the browser's `localStorage` as JSON at key `react-notes-app-data`.
- On app load `notes` state is initialized from that key (safe JSON parse). When notes change they are saved back to `localStorage`.

**How to verify**
- Open the app in the browser, add a note, then refresh the page — the note should persist.
- Inspect the browser devtools → Application → Local Storage to view the `react-notes-app-data` key and contents.

**Notes & suggestions**
- The app currently initializes notes from `localStorage` and will fall back to an empty list if none exist or parsing fails.
- Consider adding a default demo note set if you want first-time users to see sample notes.
- Consider exposing the theme preference in `localStorage` so theme persists across reloads.

If you want, I can: add sample notes on first run, persist dark-mode preference, or create a small README badge and deploy instructions. Let me know which you prefer.
