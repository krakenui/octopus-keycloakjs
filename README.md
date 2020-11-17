# octopus-keycloakjs

## Features

```
- Define basic flow for connect with keycloak
- Define login/refresh with jwt flow
- Define logout/disconnect
```

## Install

- Install octopus-keycloakjs

```
npm install octopus-keycloakjs
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
