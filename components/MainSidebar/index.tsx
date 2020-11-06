import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { useRouter } from "next/router"

const MainSidebar = () => {
  const router = useRouter()
  return (
    <div>
      <List component="div">
        <ListItem
          button
          selected={router.pathname === "/main/home"}
          onClick={() => router.push("/main/home")}
        >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          selected={router.pathname === "/main/boards"}
          onClick={() => router.push("/main/boards")}
        >
          <ListItemText primary="Boards" />
        </ListItem>
        <ListItem
          button
          selected={router.pathname === "/main/teams"}
          onClick={() => router.push("/main/teams")}
        >
          <ListItemText primary="Teams" />
        </ListItem>
      </List>
    </div>
  )
}

export default MainSidebar
