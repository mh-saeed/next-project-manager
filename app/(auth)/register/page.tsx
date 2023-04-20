import AuthForm from "@/components/AuthForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Project Management App",
  description: "Welcome to Next.js",
};
export default function Register() {
  return (
    <>
      <AuthForm mode="register" />
    </>
  );
}
