import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Notifications() {
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
        <h1>U are logged in</h1>
    );
}