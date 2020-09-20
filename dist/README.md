# krc-keycloak-connect

## Features

```
- Define basic flow for connect with keycloak
- Define login/refresh with jwt flow
- Define logout/disconnect
```

## Install

- Install krc-keycloak-connect

```
npm install krc-keycloak-connect
```

## How it work

#### Basic using

- init with login:

```
import { initLogin } from "krc-keycloak-connect";

initLogin().then(token => {}).catch(error => {});
```

- logout

```
import { logout } from "krc-keycloak-connect";

logout().then(() => {}).catch(error => {});
```
