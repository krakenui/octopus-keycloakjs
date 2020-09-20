import { KeycloakConfig, KeycloakOnLoad } from "keycloak-js";

export interface ServerConfig extends KeycloakConfig {
  onLoad?: KeycloakOnLoad;
  checkLoginIframe?: boolean;
  redirectUri?: string;
  maxAge?: number;
  autoReloadFailure?: boolean;
  refreshTimeOut: number;
}
