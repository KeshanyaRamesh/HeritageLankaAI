# Heritage Lanka AI

Heritage Lanka AI is a complete MERN archaeology information system for Sri Lanka. It includes a public heritage archive, district-based intelligent discovery, Gemini image analysis, JWT-protected Department administration, MongoDB seed data, and an animated ancient visual theme.

## Requirements

- Node.js 20 or newer
- MongoDB Community Server running locally
- A Gemini API key for image analysis

## 1. Start the backend

```powershell
cd backend
npm install
npm run seed
npm run dev
```

The API runs at `http://localhost:5000`.

## 2. Start the frontend

Open a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

## Administrator account

- Email: `admin@heritagelanka.lk`
- Password: `Admin@123`

Change these values before deployment.

## Enable Gemini image analysis

Open `backend/.env` and add your key:

```env
GEMINI_API_KEY=your_key_here
```

Restart the backend after changing `.env`.

## Production checks

```powershell
cd frontend
npm run build
```

AI observations are educational aids. They must not be presented as official archaeological authentication.
