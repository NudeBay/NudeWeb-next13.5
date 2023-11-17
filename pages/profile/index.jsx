import Link from "next/link";
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Profile() {
    const { user, error, isLoading } = useUser();
    if(!user) return <h1>U need to <Link href="/api/auth/login">log in</Link></h1>;
    if(isLoading) return <section>Loading...</section>;
    if(error) return (
        <section className={errorStyles.styles}>
            <h1>Error</h1>
            <p>{error.message}</p>
        </section>
    );

    return (
        user && (
            <section>
                <h1>Settings</h1>
                <p>Hi, {user.name}!</p>
                <p>Here's your email: {user.email}</p>
                <p>Here's your user ID: {user.sub}</p>
                <p>Here's your profile picture:</p>
                <img src={user.picture} alt={user.name} width={100} height={100} />
            </section>
        )
    );
}