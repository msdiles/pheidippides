// import { useEffect, useRef, useState } from "react"
// import io from "socket.io-client"
// import { useSelector } from "react-redux"
// import { RootState } from "@/state/reducers"
// import MainLayout from "@/components/layouts/MainLayout"
// import MainSidebar from "@/components/MainSidebar"
// import MainBoards from "@/components/MainBoards"
// import styles from "./main.module.scss"
//
// const Main = () => {
//   return (
//     <MainLayout>
//       <div className={styles.main}>
//         <MainSidebar />
//         <MainBoards />
//       </div>
//     </MainLayout>
//   )
// }
//
// export default Main

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
