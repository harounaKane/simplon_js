import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { isConnected, isAdmin } = useAuth();

  if (!isConnected) return <Navigate to="/login" />;

  if (adminOnly && !isAdmin) return <Navigate to="/" />;

  return children;
}
