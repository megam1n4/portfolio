# Modern AI/IoT Next.js Portfolio Template

A highly customizable, blazing fast, and beautifully animated portfolio template built with Next.js (App Router), Tailwind CSS v4, and Framer Motion. 

## 🚀 How to Customize (Just 3 Steps!)

You do **not** need to touch a single line of React code or understand Next.js to make this your own. The entire app generates itself flawlessly based on your data. 

Simply modify these three things:

1. **Your Data (`lib/data.ts`)**: Open this file and safely edit the text, experiences, education, and links with your own strings. The website will automatically adapt and create animated components sequentially.
2. **Your Photo (`public/images/profile.jpg`)**: Replace this image with your own portrait (Ensure you keep the filename strictly `profile.jpg`).
3. **Your Resume (`public/resume.pdf`)**: Drop your resume PDF into the `public` folder (Ensure you keep the filename strictly `resume.pdf`). 

*That's it!* Refresh your localized browser and you're fully customized.

## 🛠️ Local Development

1. Run `npm install` to install dependencies.
2. Run `npm run dev` to start the live-reloading development server.
3. Visit `http://localhost:3000` to magically preview all your changes as you edit `data.ts`!

## 🌐 Deploying directly to GitHub Pages

This portfolio is pre-configured to automatically deploy to GitHub pages using GitHub Actions seamlessly! Here is how to configure it on GitHub:

### Step 1: Push to GitHub
Create a Github repository and push your code securely to the `main` branch.

### Step 2: Configure GitHub Repository Settings
Before the action algorithm can run, you must securely grant GitHub the permission to host it:
1. Go to your repository **Settings** > **Pages** (on the left sidebar).
2. Under the **Build and deployment** section, open the **Source** dropdown and switch it immediately to **GitHub Actions**.

### Step 3: Watch it deploy!
The `.github/workflows/deploy.yml` pipeline is already actively bundled in the code I gave you. 
Once you complete Step 2, the pipeline triggers immediately. You can go to the **Actions** tab in GitHub to watch it build securely. In a few minutes, it will automatically publish your live URL!
