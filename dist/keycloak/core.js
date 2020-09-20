"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAuthentication = exports.initAuthentication = exports.checkLogin = void 0;
var keycloak_js_1 = __importDefault(require("keycloak-js"));
var common_1 = require("../common");
var jsonwebtoken_1 = require("./jsonwebtoken");
function checkLogin() {
    var accessToken = localStorage.getItem(common_1.STORAGE_ACCESS_TOKEN);
    if (accessToken == null) {
        return null;
    }
    var token = jsonwebtoken_1.parseJwtToken(accessToken);
    if (token == null && jsonwebtoken_1.tokenIsExpired(token)) {
        return null;
    }
    return token;
}
exports.checkLogin = checkLogin;
function initAuthentication(options) {
    var keyCloakInstance = keycloak_js_1.default({
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
        .then(function (auth) {
        // reload if authorization invalid
        if (!auth && options.autoReloadFailure) {
            window.location.reload();
            return null;
        }
        var jwtToken = jsonwebtoken_1.parseJwtToken(keyCloakInstance.token);
        localStorage.setItem(common_1.STORAGE_AUTH_USER_NAME, jwtToken.dispalyName);
        localStorage.setItem(common_1.STORAGE_AUTH_USER_EMAIL, jwtToken.email);
        localStorage.setItem(common_1.STORAGE_ACCESS_TOKEN, keyCloakInstance.token);
        localStorage.setItem(common_1.STORAGE_REFRESH_TOKEN, keyCloakInstance.refreshToken);
        return jwtToken;
    });
}
exports.initAuthentication = initAuthentication;
function clearAuthentication(options) {
    var keyCloakInstance = keycloak_js_1.default({
        url: options.url,
        realm: options.realm,
        clientId: options.clientId,
    });
    return keyCloakInstance
        .logout({
        redirectUri: options.redirectUri,
    })
        .then(function () {
        common_1.clearSSOStorage();
        return true;
    });
}
exports.clearAuthentication = clearAuthentication;
//# sourceMappingURL=core.js.map