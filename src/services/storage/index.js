class StoreService {
  constructor() {
    this.store = localStorage;
  }
  Get(key) {
    return this.store.getItem(key) || null;
  }
  Remove(key) {
    this.store.removeItem(key);
  }
  Set(key, val) {
    this.store.setItem(key, val);
  }
}

const storeService = new StoreService();

export { storeService, StoreService };
