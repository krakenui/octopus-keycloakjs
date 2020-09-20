export interface IJwtToken {
  exp: number;
  azp: string;
  roles: string;
  userName: string;
  email?: string;
  dispalyName: string;
}

export function parseJwtToken(token): IJwtToken {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  const tokenObject = JSON.parse(jsonPayload);
  const roles = [];
  for (let i in tokenObject.resource_access) {
    roles.push(...tokenObject.resource_access[i].roles);
  }

  const jwtToken: IJwtToken = {
    exp: tokenObject.exp,
    azp: tokenObject.azp,
    roles: roles.join(","),
    dispalyName: tokenObject.name,
    email: tokenObject.email,
    userName: tokenObject.preferred_username,
  };

  return jwtToken;
}

export function tokenIsExpired(token) {
  return token.exp && token.exp <= Date.now() / 1000;
}
