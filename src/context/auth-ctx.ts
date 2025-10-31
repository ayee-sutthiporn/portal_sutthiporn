import { createContext } from "react";

export type User = { id: string; email: string; name: string };

export type AuthState = {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

// ✅ แยก Context มาไฟล์นี้
export const AuthCtx = createContext<AuthState | null>(null);
