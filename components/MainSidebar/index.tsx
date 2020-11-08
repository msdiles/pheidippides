import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import DashboardIcon from "@material-ui/icons/Dashboard"
import GroupIcon from "@material-ui/icons/Group"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from "@material-ui/icons/Add"
import { useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { useRouter } from "next/router"
import styles from "./mainSidebar.module.scss"

interface IProps {
  setIsFormOpen?: (is: boolean) => void
}

const MainSidebar = ({ setIsFormOpen }: IProps) => {
  const teams = useSelector((state: RootState) => state.team.teams)

  const router = useRouter()
  return (
    <>
      <div className={styles.sidebar}>
        <List component="div">
          <ListItem
            className={styles.listItem}
            button
            selected={router.pathname === "/main/home"}
            onClick={() => router.push("/main/home")}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            className={styles.listItem}
            button
            selected={router.pathname === "/main/boards"}
            onClick={() => router.push("/main/boards")}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Boards" />
          </ListItem>
          <ListItem
            className={styles.listItem}
            button
            selected={router.pathname === "/main/teams"}
            onClick={() => router.push("/main/teams")}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Teams" />
          </ListItem>
        </List>

        <div className={styles.teamList}>
          <p className={styles.teamListTitle}>Teams</p>
          <List component="div">
            {teams.map((team) => (
              <ListItem
                key={team._id}
                className={styles.listItem}
                button
                selected={
                  router.asPath === `/main/teams/${team.title}_${team._id}`
                }
                onClick={() =>
                  router.push(`/main/teams/${team.title}_${team._id}`)
                }
              >
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary={team.title} />
              </ListItem>
            ))}
          </List>
          <IconButton
            className={styles.addButton}
            size="small"
            onClick={() => setIsFormOpen && setIsFormOpen(true)}
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </>
  )
}

export default MainSidebar
