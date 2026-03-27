import { AuthContextProvider } from "@/app/contexts/AuthContext";
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
