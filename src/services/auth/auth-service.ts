import { LoginCredentials, User } from "../../entities/user";

export async function loginUser(credentials: LoginCredentials): Promise<User>{
    try{
        const payload = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: credentials.username,
                password: credentials.password,
                expiresInMins: credentials.expiresInMins != undefined ? credentials.expiresInMins : 60
            }),
            credentials: 'include'
        });
        const data = await payload.json();
        return data;
    }catch(error){
        throw new Error();
    }
}

export async function getUserInfo(user: User): Promise<User>{
    try{
        const payload = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user.acessToken}`
            },
            credentials: 'include'
        });
        const data = await payload.json();
        return data;
    }catch(error){
        throw new Error();
    }
}

// export async function refreshToken(){}