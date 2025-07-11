# Email Service (JavaScript)

A mock email service using two fake providers, retry logic, fallback, idempotency, and rate limiting.

## Setup

1. Install Node.js
2. Run the following in terminal:

```
npm install
npm start
```

## API

### POST /send

Request:
```
{
  "id": "unique-id",
  "to": "user@example.com",
  "subject": "Hello",
  "body": "Test message"
}
```