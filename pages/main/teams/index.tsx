import MainSidebar from "@/components/MainSidebar"
import MainLayout from "@/components/layouts/MainLayout"
import styles from "./teams.module.scss"

const teams = () => {
  return (
    <MainLayout>
      <div className="main-section">
        <MainSidebar />
        <div className={styles.main}>teams</div>
      </div>
    </MainLayout>
  )
}

export default teams
