import Link from "next/link";

export default function Settings() {
    return (
        <h1>U need to <Link href="/api/auth/login">log in</Link></h1>
    );
}