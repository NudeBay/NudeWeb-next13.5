import styles from '../assets/scss/Error.module.scss';

function Error({ statusCode }) {
    return (
        <section className={styles.error}>
            <h1>404</h1>
            <p>Page not found</p>
        </section>
    );
}

export default Error;