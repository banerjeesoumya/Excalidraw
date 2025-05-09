import Link from "next/link";
import { Footer } from "@/components/footer";
import { AuthForm } from "@/components/auth/auth-form";
import { Pencil } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { NavBar } from "@/components/NavBar";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background auth-gradient">
      <NavBar />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="mx-auto w-full max-w-md px-4 sm:px-6">
          <div className="flex flex-col space-y-4 text-center mb-8">
            <Link href="/" className="mx-auto">
              <div className="flex items-center justify-center space-x-2 group">
                <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <Pencil className="h-6 w-6" />
                </div>
                <span className="font-bold text-xl">{APP_NAME}</span>
              </div>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border rounded-xl shadow-sm p-6 sm:p-8">
            <AuthForm type="signin" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}