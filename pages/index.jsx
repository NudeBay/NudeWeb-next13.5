import styles from '../assets/scss/Home.module.scss';
import errorStyles from '../assets/scss/Error.module.scss';
import { useUser } from '@auth0/nextjs-auth0/client';
import Post from '../components/Post';

export default function Home() {
    const { user, error, isLoading } = useUser();
    if(isLoading) return <section>Loading...</section>;
    if(error) return (
        <section className={errorStyles.styles}>
            <h1>Error</h1>
            <p>{error.message}</p>
        </section>
    );

    return (
        <section className={styles.home}>
            <Post id={'507f191e810c19729de860ea'} content={['', '']} contentType={'image'} tags={['dupa', 'kupa']} author={{nick:'Zuzaa Olechowska', picture: '', badges:[]}} date={new Date()} likes={1} views={2137} />
        </section>
    );
}