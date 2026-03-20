import LoginForm from "@/app/components/auth/LoginForm";
import Link from "next/link";
    
export default function Page() {
    
    return(
        <div className="min-h-screen flex items-center justify-center w-full bg-gray-100">
            <LoginForm/>
        </div>
    )
}