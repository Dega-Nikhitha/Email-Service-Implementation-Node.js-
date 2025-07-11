class IdempotencyStore {
  constructor() {
    this.store = new Set();
  }

  isDuplicate(id) {
    return this.store.has(id);
  }

  markProcessed(id) {
    this.store.add(id);
  }
}

module.exports = IdempotencyStore;