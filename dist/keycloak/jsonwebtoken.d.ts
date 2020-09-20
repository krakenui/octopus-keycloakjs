export interface IJwtToken {
    exp: number;
    azp: string;
    roles: string;
    userName: string;
    email?: string;
    dispalyName: string;
}
export declare function parseJwtToken(token: any): IJwtToken;
export declare function tokenIsExpired(token: any): boolean;
