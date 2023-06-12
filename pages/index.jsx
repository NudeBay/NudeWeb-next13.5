import styles from '../assets/scss/Home.module.scss';
import Post from '../components/Post';

export default function Home() {
    return (
        <section className={styles.home}>
            <Post id={'507f191e810c19729de860ea'} content={['', '']} contentType={'image'} tags={['dupa', 'kupa']} author={{nick:'Zuzaa Olechowska', picture: '', badges:[]}} date={new Date()} likes={1} views={2137} />
        </section>
    );
}