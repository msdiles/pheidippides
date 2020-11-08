import MainLayout from "@/components/layouts/MainLayout"
import MainSidebar from "@/components/MainSidebar"
import styles from "./main.module.scss"

const Main = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <MainSidebar />
        <div>Main</div>
      </div>
    </MainLayout>
  )
}

export default Main

// const userToken = useSelector((state: RootState) => state.auth.user.userToken)
// useEffect(() => {
//   const socket =io(process.env.NEXT_PUBLIC_API_URL as string, {
//     query: {token: userToken}
//   })
//   console.log(socket)
//   socket.on('message', (data: string) => {
//     console.log(data)
//   })
//   socket.on("disconnect", () => {
//     console.log("disconnet")
//   })
// }, [])
