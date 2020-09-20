"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.initLogin = void 0;
var core_1 = require("./core");
function initLogin(options) {
    var loginToken = core_1.checkLogin();
    if (loginToken == null) {
        // alway set onload to login-requireds
        options.onLoad = "login-required";
        return core_1.initAuthentication(options);
    }
    return Promise.resolve(loginToken);
}
exports.initLogin = initLogin;
function logout(options) {
    if (options.redirectUri == null) {
        options.redirectUri = window.location.href;
    }
    // alway set onload to login-requireds
    options.onLoad = "login-required";
    return core_1.clearAuthentication(options);
}
exports.logout = logout;
//# sourceMappingURL=index.js.map