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

