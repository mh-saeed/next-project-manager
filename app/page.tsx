"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.replace("/signin");
  return <p>Loading...</p>;
}
