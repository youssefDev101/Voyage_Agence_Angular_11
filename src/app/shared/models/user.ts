export interface User{
    id?: number;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    status?: string;
    cin?: string;
    entreprise?:Entrprise;
}
export interface Entrprise{
    id?: number;
    name: string;
    size: string;
}
