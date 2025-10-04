Project Name: PolyGlot
A simple, single-page application built with React to provide quick translations between English and French, Japanese, or Spanish using the OpenAI API.

✨ Features
Multilingual Support: Translates English to French, Japanese, and Spanish.
Real-time Translation: Uses the OpenAI API for fast, accurate results.
Simple UI: Clean, intuitive interface built with React.

🛠️ Technology Stack
Frontend Framework:  React
Styling: CSS
API: OpenAI API (Specifically, the completions or chat endpoint)
Deployment: Cloudflare Pages (https://polyglot-translation-app.pages.dev/)

🚀 Quick Start (Local Development)
Prerequisites
You must have Node.js and npm installed on your machine.

1. Clone the Repository
git clone https://github.com/shukria-sultani/translation_app.git
cd translation-app

2. Install Dependencies
npm install

3. Configure the OpenAI API Key 🔑 (Crucial Step)
The application requires your secret API key to communicate with OpenAI.
Create a file named .env in the root directory of your project.
Add your API key to the file using the variable name your application expects (usually prefixed with VITE in standard Vite projects):


# Replace 'sk-...' with your actual key
VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
⚠️ Security Note: The .env file must be listed in your .gitignore to prevent committing your secret key to the repository.

4. Run the Application

npm run dev
The application will open in your browser at http://localhost:3000 (or another port if 3000 is occupied).