import { IJwtToken } from "./jsonwebtoken";
import { ServerConfig } from "./types";
export declare function checkLogin(): IJwtToken;
export declare function initAuthentication(options: ServerConfig): Promise<IJwtToken>;
export declare function clearAuthentication(options: ServerConfig): Promise<boolean>;
