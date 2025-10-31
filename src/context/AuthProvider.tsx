import { useEffect, useMemo, useState } from "react";
import { AuthCtx, type AuthState, type User } from "./auth-ctx";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = localStorage.getItem("ayee_auth");
    if (raw) {
      try {
        setUser(JSON.parse(raw) as User);
      } catch {
        localStorage.removeItem("ayee_auth");
      }
    }
    setLoading(false);
  }, []);

  const value = useMemo<AuthState>(
    () => ({
      user,
      loading,
      async login(email, password) {
        void password;
        await new Promise((r) => setTimeout(r, 500));
        const mock: User = { id: "u_1", email, name: email.split("@")[0] };
        setUser(mock);
        localStorage.setItem("ayee_auth", JSON.stringify(mock));
      },
      async register(name, email, password) {
        void password;
        await new Promise((r) => setTimeout(r, 700));
        const mock: User = { id: "u_2", email, name };
        setUser(mock);
        localStorage.setItem("ayee_auth", JSON.stringify(mock));
      },
      async logout() {
        await new Promise((r) => setTimeout(r, 300));
        setUser(null);
        localStorage.removeItem("ayee_auth");
      },
    }),
    [user, loading]
  );

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export default AuthProvider;
