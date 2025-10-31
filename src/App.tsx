import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-8">
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
          Built with ❤️ Ayee Portal • React • TypeScript • Tailwind
        </footer>
      </div>
    </AuthProvider>
  );
}
