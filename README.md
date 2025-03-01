# Chat App

A real-time chat application built with **Next.js**, **Node.js**, **Express**, and **Socket.io** for seamless communication. The app provides a smooth and interactive chatting experience with a clean UI.

## Features
- 🗨️ **Real-time messaging** using WebSockets
- 🔐 **User authentication** (optional: JWT or OAuth)
- 🎨 **Responsive UI** with Tailwind CSS
- 📜 **Chat history** persistence (optional: MongoDB, Firebase, or local storage)
- 🔔 **Notifications** for new messages
- 🌙 **Dark mode support**

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS, React
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB (optional: Firebase, PostgreSQL)
- **Authentication**: JWT,

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root and add the necessary configurations:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the backend server**
   ```bash
   npm run server
   ```

5. **Run the frontend**
   ```bash
   npm run dev
   ```

6. **Open the app**
   Visit `http://localhost:3000` in your browser.

## Usage
- Sign up and log in to start chatting.
- Create a chat room or join an existing one.
- Send and receive messages in real time.
- Enable dark mode for better readability at night.

## Contributing
Feel free to fork the repository, make improvements, and submit a pull request! 🚀

## License
This project is licensed under the **MIT License**.
