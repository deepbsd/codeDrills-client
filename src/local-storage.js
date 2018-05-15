export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};




// Simulate browser scope with LocalStorage
// for testing with Jest
// ****** This doesn't work with Live App!!!!**************
//class LocalStorageMock {
//  constructor() {
//    this.store = {};
//  }
//
//  clear() {
//    this.store = {};
//  }
//
//  getItem(key) {
//    return this.store[key] || null;
//  }
//
//  setItem(key, value) {
//    this.store[key] = value.toString();
//  }
//
//  removeItem(key) {
//    delete this.store[key];
//  }
//};
//
//global.localStorage = global.localStorage || new LocalStorageMock;
