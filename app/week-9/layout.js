import { AuthContextProvider } from "./_utils/AuthContext";
 
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}