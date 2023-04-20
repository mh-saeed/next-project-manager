import AuthForm from "@/components/AuthForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin | Project Management App",
  description: "Welcome to Next.js",
};

export default function Signin() {
  return (
    <>
      <AuthForm mode="signin" />
    </>
  );
}
