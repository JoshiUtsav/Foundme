import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href="/">
        <IoCloseSharp className="absolute top-4 left-4 text-3xl z-10" />
      </Link>
      {children}
    </>
  );
}
