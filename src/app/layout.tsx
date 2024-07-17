import type { Metadata } from "next";
import { Mada as FontSans } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/app/StoreProvider";
import { Container } from "@/components";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./AuthProvider";
import { AuthProviderContext } from "@/contexts/AuthProviderContext";
// import { getUser } from "@/actions/user_actions";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Leadlly",
  description:
    "Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const userData = await getUser();
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased custom__scrollbar",
          fontSans.variable
        )}>
        <StoreProvider>
          <AuthProviderContext>
            <GoogleOAuthProvider
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
              <AuthProvider>
                <Container className="py-3">
                  <main className="h-main-height">{children}</main>
                </Container>
                <Toaster richColors position="top-center" />
              </AuthProvider>
            </GoogleOAuthProvider>
          </AuthProviderContext>
        </StoreProvider>
      </body>
    </html>
  );
}
