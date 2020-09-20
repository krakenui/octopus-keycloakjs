export const STORAGE_DEFAULT_PREFIX = process.env.STORAGE_DEFAULT_PREFIX || "kc-callback-";
export const STORAGE_PREFIX = process.env.STORAGE_PREFIX || "krc-sso-";
export const STORAGE_ACCESS_TOKEN = STORAGE_PREFIX + "access-token";
export const STORAGE_REFRESH_TOKEN = STORAGE_PREFIX + "refresh-token";
export const STORAGE_AUTH_USER_NAME = STORAGE_PREFIX + "user-name";
export const STORAGE_AUTH_USER_EMAIL = STORAGE_PREFIX + "user-email";

export function clearSSOStorage() {
  const storageKeys = Object.keys(localStorage);

  storageKeys
    .filter((k) => k.startsWith(STORAGE_PREFIX) || k.startsWith(STORAGE_DEFAULT_PREFIX))
    .forEach((k) => {
      localStorage.removeItem(k);
    });
}
