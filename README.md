# 📧 Email Service Implementation (Node.js)

This project simulates a robust email sending service using Node.js. It supports retry mechanisms, provider fallback, rate limiting, and email status tracking – all essential features for building scalable microservices or backend platforms.

## 🚀 Features

- 📤 Send emails using mock providers (Provider A and B)
- 🔁 Automatic retries with exponential backoff on failure
- 🔄 Provider fallback logic
- 🧠 Idempotent operation using unique `email id`
- 📈 Rate limiting (max 5 emails per minute)
- 📊 Status tracking of sent emails

---

## 🏗️ Project Structure

├── index.js # Entry point (Express server)
├── providers/
│ ├── MockProviderA.js # Simulates email provider A
│ └── MockProviderB.js # Simulates email provider B
├── services/
│ └── EmailService.js # Main business logic
├── utils/
│ ├── RateLimiter.js # Controls email rate limits
│ └── backoff.js # Handles exponential backoff
├── package.json # Project dependencies and config
└── README.md # Documentation


---

## 📦 Requirements

- Node.js (v18+ recommended)
- npm

---

## 🛠️ Installation & Run

```bash
# Clone the repo (or download manually)
cd <your-folder-name>

# Install dependencies
npm install

# Start the server
npm start


