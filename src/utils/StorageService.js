export class StorageService {
  static storageTypes = Object.freeze({
    session: 'session',
    local: 'local',
  });

  _storage = null;
  _key = null;

  constructor(storageType, key) {
    if (storageType === StorageService.storageTypes.local)
      this._storage = localStorage;
    if (storageType === StorageService.storageTypes.session)
      this._storage = sessionStorage;
    this._key = key;
  }

  async getData() {
    try {
      const data = JSON.parse(this._storage.getItem(this._key));
      return data ? data : [];
    } catch (err) {
      return [];
    }
  }

  async _rewriteStorageData(data) {
    try {
      await this._storage.setItem(this._key, JSON.stringify(data));
      return true;
    } catch (err) {
      return false;
    }
  }
}

const storageService = new StorageService(
  StorageService.storageTypes.local,
  'shoppingCart'
);

export default storageService;
