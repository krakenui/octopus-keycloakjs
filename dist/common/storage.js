"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearSSOStorage = exports.STORAGE_AUTH_USER_EMAIL = exports.STORAGE_AUTH_USER_NAME = exports.STORAGE_REFRESH_TOKEN = exports.STORAGE_ACCESS_TOKEN = exports.STORAGE_PREFIX = exports.STORAGE_DEFAULT_PREFIX = void 0;
exports.STORAGE_DEFAULT_PREFIX = process.env.STORAGE_DEFAULT_PREFIX || "kc-callback-";
exports.STORAGE_PREFIX = process.env.STORAGE_PREFIX || "krc-sso-";
exports.STORAGE_ACCESS_TOKEN = exports.STORAGE_PREFIX + "access-token";
exports.STORAGE_REFRESH_TOKEN = exports.STORAGE_PREFIX + "refresh-token";
exports.STORAGE_AUTH_USER_NAME = exports.STORAGE_PREFIX + "user-name";
exports.STORAGE_AUTH_USER_EMAIL = exports.STORAGE_PREFIX + "user-email";
function clearSSOStorage() {
    var storageKeys = Object.keys(localStorage);
    storageKeys
        .filter(function (k) { return k.startsWith(exports.STORAGE_PREFIX) || k.startsWith(exports.STORAGE_DEFAULT_PREFIX); })
        .forEach(function (k) {
        localStorage.removeItem(k);
    });
}
exports.clearSSOStorage = clearSSOStorage;
//# sourceMappingURL=storage.js.map