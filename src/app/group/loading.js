import styles from './loading.module.css';

export default function LoadingPage() {
    return(
        <div>
            <p className={styles.loading}>
                Loading...
            </p>
        </div>
    )
}
