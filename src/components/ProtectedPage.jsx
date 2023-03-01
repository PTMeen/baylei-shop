import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ProtectedPage({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/login");
    },
  });

  if (status === "loading") return null;

  return children;
}
