import MainLayout from "@/components/layouts/MainLayout"
import styles from "./error.module.scss"

const error = () => {
  return (
    <MainLayout>
      <div className={styles.error}>
        <div className={styles.errorTitle}>Page not found.</div>
        <p className={styles.errorMessage}>
          This page may be private. If someone gave you this link, they may need
          to invite you to one of their boards or teams.
        </p>
      </div>
    </MainLayout>
  )
}

export default error
