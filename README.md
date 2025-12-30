# 📝 Post It – A Social Posting Web App

Post It is a lightweight, modern web app built with **Next.js**, allowing users to sign up, create posts with images, like posts, and explore what others share.It's designed to be fast, elegant, and easy to extend — with built-in leaderboard rankings.

<div align="center">
  <img src="https://github.com/user-attachments/assets/ef8a5e47-97a8-4a07-a603-b700dac8b98d" width="400"/>
  <img src="https://github.com/user-attachments/assets/faa201bf-0f64-4afa-aabd-460eb61d16f1" width="400"/>
</div>

<br/>

<div align="center">
  <img src="https://github.com/user-attachments/assets/88fc400e-0e57-4013-b986-d2d6c8ed4eaa" width="300"/>
  <img src="https://github.com/user-attachments/assets/f1f608ab-0ce7-4f6a-9e4e-146702340d92" width="300"/>
  <img src="https://github.com/user-attachments/assets/7e69ddd9-d576-4e4b-a972-6d4ffd17ff00" width="300"/>
</div>





---

## 🚀 Features

--📝 **Full Post Creation**  
  Users can create posts with text, images, and real-time previews.
  
--🖊️ **Post Editing**  
  Edit your existing posts anytime — intuitive and smooth UX.
  
--🔐 **Secure Authentication**  
  Built with JWT and bcrypt for strong session security and data protection.
  
--❤️ **Like Functionality**  
  Like/unlike posts with instant visual feedback using React state hooks.
  
--📸 **Image Upload & Preview**  
  Solved tricky image handling with base64 encoding and dynamic routing in Next.js.
  
--🏆 **Leaderboard**  
  Displays top users based on activity.
  
--🧠 **Real-time UI Updates**  
  Seamless interactivity with React hooks and conditional rendering.
  
--🌐 **MongoDB Integration**  
  All data is persisted securely in a cloud-hosted MongoDB, with full CRUD support.
  

---

## 🚀 Live Demo

Check out the live app here: [Live Deployment](https://post-it-lac.vercel.app/)

---

## 🛠️ Installation

```bash
git clone https://github.com/AjayChikate/PostIt.git
npm install
npm run dev
```


---

## 🧑‍💻 Getting Started

First install dependencies

```bash
npm install axios jose bcryptjs mongoose react-icons 
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
