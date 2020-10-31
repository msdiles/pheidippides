import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment"
import IconButton from "@material-ui/core/IconButton"
import Visibility from "@material-ui/icons/Visibility"
import {VisibilityOff} from "@material-ui/icons"
import NoSsr from '@material-ui/core/NoSsr';

interface IProps {
  toggleShow: () => void
  showPassword: boolean
}

const ShowPassword = ({toggleShow, showPassword}: IProps) => {
  return (
    <NoSsr>
      <InputAdornment position="end">
        <IconButton
          onClick={toggleShow}
          onMouseDown={e => e.preventDefault()}
        >
          {showPassword ? <Visibility/> : <VisibilityOff/>}
        </IconButton>
      </InputAdornment>
    </NoSsr>
  )
}

export default ShowPassword
