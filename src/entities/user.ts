export interface User{ 
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    acessToken: string;
    refreshToken: string;
}

export interface LoginCredentials{
    username: string;
    password: string;
    expiresInMins?: number | undefined;
}

export interface RefreshToken{
    accessToken: string;
    refreshToken: string;
}