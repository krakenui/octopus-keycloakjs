import { IJwtToken } from "./jsonwebtoken";
import { ServerConfig } from "./types";
export declare function initLogin(options: ServerConfig): Promise<IJwtToken>;
export declare function logout(options: ServerConfig): Promise<boolean>;
