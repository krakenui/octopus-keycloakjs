# octopus-keycloakjs

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/octopus-keycloakjs.svg?style=flat-square
[npm-url]: http://npmjs.org/package/octopus-keycloakjs
[download-image]: https://img.shields.io/npm/dm/octopus-keycloakjs.svg?style=flat-square
[download-url]: https://npmjs.org/package/octopus-keycloakjs

## Install

[![octopus-keycloakjs](https://nodei.co/npm/octopus-keycloakjs.png)](https://npmjs.org/package/octopus-keycloakjs)

```
npm install --save octopus-keycloakjs
```

## Features

```
- Define basic flow for connect with keycloak
- Define login/refresh with jwt flow
- Define logout/disconnect
```

## How it work

#### Basic using

- init with login:

```
import { initLogin } from "octopus-keycloakjs";

initLogin().then(token => {}).catch(error => {});
```

- logout

```
import { logout } from "octopus-keycloakjs";

logout().then(() => {}).catch(error => {});
```
