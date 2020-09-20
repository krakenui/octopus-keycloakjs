"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenIsExpired = exports.parseJwtToken = void 0;
function parseJwtToken(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(atob(base64)
        .split("")
        .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join(""));
    var tokenObject = JSON.parse(jsonPayload);
    var roles = [];
    for (var i in tokenObject.resource_access) {
        roles.push.apply(roles, tokenObject.resource_access[i].roles);
    }
    var jwtToken = {
        exp: tokenObject.exp,
        azp: tokenObject.azp,
        roles: roles.join(","),
        dispalyName: tokenObject.name,
        email: tokenObject.email,
        userName: tokenObject.preferred_username,
    };
    return jwtToken;
}
exports.parseJwtToken = parseJwtToken;
function tokenIsExpired(token) {
    return token.exp && token.exp <= Date.now() / 1000;
}
exports.tokenIsExpired = tokenIsExpired;
//# sourceMappingURL=jsonwebtoken.js.map