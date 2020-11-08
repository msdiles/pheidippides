import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { RootState } from "@/state/reducers"
import PageLoader from "@/components/PageLoader"
import pagesList from "@/utils/pagesList"
import { PageAccess } from "@/models/enums"

interface IProps {
  children: ReactNode
}

const AuthProvider = ({ children }: IProps) => {
  const router = useRouter()
  const { isStarted, isLoggedIn, loading } = useSelector(
    (state: RootState) => state.auth
  )
  const page = pagesList.find((page) => page.path === router.pathname)
  const pageAccess = page ? page.access : PageAccess.All

  if (loading || !isStarted) {
    return <PageLoader open={true} />
  } else if (pageAccess === PageAccess.OnlyAuth && !isLoggedIn) {
    router.push("/login")
    return <PageLoader open={true} />
  } else if (pageAccess === PageAccess.OnlyUnAuth && isLoggedIn) {
    router.push("/")
    return <PageLoader open={true} />
  } else {
    return <>{children}</>
  }
}

export default AuthProvider
