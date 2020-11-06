import MainSidebar from "@/components/MainSidebar"
import MainLayout from "@/components/layouts/MainLayout"
import styles from "./home.module.scss"

const home = () => {
  return (
    <MainLayout>
      <div className="main-section">
        <MainSidebar />
        <div className={styles.main}> home</div>
      </div>
    </MainLayout>
  )
}

export default home
