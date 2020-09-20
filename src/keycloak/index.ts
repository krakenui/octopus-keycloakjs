import { checkLogin, clearAuthentication, initAuthentication } from "./core";
import { IJwtToken } from "./jsonwebtoken";
import { ServerConfig } from "./types";

export function initLogin(options: ServerConfig): Promise<IJwtToken> {
  const loginToken = checkLogin();

  if (loginToken == null) {
    // alway set onload to login-requireds
    options.onLoad = "login-required";

    return initAuthentication(options);
  }

  return Promise.resolve(loginToken);
}

export function logout(options: ServerConfig): Promise<boolean> {
  if (options.redirectUri == null) {
    options.redirectUri = window.location.href;
  }

  // alway set onload to login-requireds
  options.onLoad = "login-required";

  return clearAuthentication(options);
}
