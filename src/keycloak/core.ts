import Keycloak from "keycloak-js";

import {
  clearSSOStorage,
  STORAGE_ACCESS_TOKEN,
  STORAGE_AUTH_USER_EMAIL,
  STORAGE_AUTH_USER_NAME,
  STORAGE_REFRESH_TOKEN,
} from "../common";
import { IJwtToken, parseJwtToken, tokenIsExpired } from "./jsonwebtoken";
import { ServerConfig } from "./types";

export function checkLogin(): IJwtToken {
  const accessToken = localStorage.getItem(STORAGE_ACCESS_TOKEN);

  if (accessToken == null) {
    return null;
  }

  const token = parseJwtToken(accessToken);

  if (token == null && tokenIsExpired(token)) {
    return null;
  }

  return token;
}

export function initAuthentication(options: ServerConfig): Promise<IJwtToken> {
  const keyCloakInstance = Keycloak({
    url: options.url,
    realm: options.realm,
    clientId: options.clientId,
  });

  return keyCloakInstance
    .init({
      checkLoginIframe: options.checkLoginIframe || false,
      redirectUri: options.redirectUri,
      onLoad: options.onLoad,
    })
    .then((auth) => {
      // reload if authorization invalid
      if (!auth && options.autoReloadFailure) {
        window.location.reload();

        return null;
      }

      const jwtToken = parseJwtToken(keyCloakInstance.token);
      localStorage.setItem(STORAGE_AUTH_USER_NAME, jwtToken.dispalyName);
      localStorage.setItem(STORAGE_AUTH_USER_EMAIL, jwtToken.email);
      localStorage.setItem(STORAGE_ACCESS_TOKEN, keyCloakInstance.token);
      localStorage.setItem(STORAGE_REFRESH_TOKEN, keyCloakInstance.refreshToken);

      return jwtToken;
    });
}

export function clearAuthentication(options: ServerConfig): Promise<boolean> {
  const keyCloakInstance = Keycloak({
    url: options.url,
    realm: options.realm,
    clientId: options.clientId,
  });

  return keyCloakInstance
    .logout({
      redirectUri: options.redirectUri,
    })
    .then(() => {
      clearSSOStorage();

      return true;
    });
}
