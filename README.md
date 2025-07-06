# DocSync

A collaborative document editor built with Next.js, TypeScript, Liveblocks, Lexical Editor, ShadCN, and Tailwind CSS.

## Quick Start

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adrianhajdin/collaborative-editor.git
   cd collaborative-editor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables and fill in your credentials:
     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
     CLERK_SECRET_KEY=
     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
     LIVEBLOCKS_SECRET_KEY=
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Features
- Authentication (GitHub via NextAuth)
- Real-time collaborative text editing
- Document management (create, delete, share, list)
- Comments and notifications
- Responsive design

## Tech Stack
- Next.js
- TypeScript
- Liveblocks
- Lexical Editor
- ShadCN
- Tailwind CSS

## License
MIT
