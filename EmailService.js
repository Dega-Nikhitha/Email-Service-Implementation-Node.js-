const RateLimiter = require('../utils/RateLimiter');
const IdempotencyStore = require('../utils/IdempotencyStore');

class EmailService {
  constructor(providers) {
    this.providers = providers;
    this.rateLimiter = new RateLimiter(5, 10000);
    this.idempotencyStore = new IdempotencyStore();
  }

  async trySend(provider, email, retries = 3) {
    let delay = 100;
    for (let i = 0; i < retries; i++) {
      try {
        const success = await provider.sendEmail(email);
        if (success) return true;
      } catch (err) {
        console.log('Retry error:', err);
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2;
    }
    return false;
  }

  async send(email) {
    if (!this.rateLimiter.allow()) return 'Rate limit exceeded';
    if (this.idempotencyStore.isDuplicate(email.id)) return 'Duplicate request';

    for (let provider of this.providers) {
      const success = await this.trySend(provider, email);
      if (success) {
        this.idempotencyStore.markProcessed(email.id);
        return 'Email sent';
      }
    }
    return 'Failed after all retries and fallbacks';
  }
}

module.exports = EmailService;