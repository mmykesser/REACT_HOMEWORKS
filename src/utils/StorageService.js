export class StorageService {
  static storageTypes = Object.freeze({
    session: 'session',
    local: 'local',
  });

  _storage = null;
  _key = null;
  _currentId = null;

  // @param storageType = localStorage | sessionStorage
  constructor(storageType, key) {
    if (storageType === StorageService.storageTypes.local)
      this._storage = localStorage;
    if (storageType === StorageService.storageTypes.session)
      this._storage = sessionStorage;
    this._key = key;

    this.getData().then((value) => {
      this._currentId = value?.at(-1)?.id ? value.at(-1).id + 1 : 1;
    });
  }

  async getData() {
    const data = JSON.parse(this._storage.getItem(this._key));
    return data ? data : [];
  }

  async saveItem(item) {
    const data = await this.getData();
    data.push({
      ...item,
      id: this._currentId,
    });
    await this._rewriteStorageData(data);

    this._currentId += 1;

    const updatedData = await this.getData();
    return updatedData.at(-1);
  }

  async _rewriteStorageData(data) {
    try {
      await this._storage.setItem(this._key, JSON.stringify(data));
      return true;
    } catch (err) {
      return false;
    }
  }

  async deleteItem(id) {
    const data = await this.getData();
    const itemIndex = data.findIndex((el) => el.id === id);
    const [removedElement] = data.splice(itemIndex, 1);
    await this._rewriteStorageData(data);
    return removedElement;
  }
}

const storageService = new StorageService(
  StorageService.storageTypes.local,
  'formData'
);

export default storageService;
