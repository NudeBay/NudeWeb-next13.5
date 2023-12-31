import styles from '../assets/scss/Error.module.scss';

function Error({ statusCode }) {
    return (
        <section className={styles.error}>
            <h1>Error {statusCode}</h1>
            <p>
                {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
            </p>
        </section>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;