import EmptyLayout from "@/components/layouts/EmptyLayout"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import Link from "next/link"
import ValidationInput from "@/components/ValidationInput"
import {isEmail} from "@/utils/validators"
import useResetLinkPage from "@/hooks/useResetLinkPage"

const Login = () => {
  const {onSubmit, errors, register} = useResetLinkPage()
  return <EmptyLayout>
    <Paper elevation={3} className="auth-form-box">
      <VpnKeyIcon className="auth-icon" fontSize="large"/>
      <h2 className="text-center">Reset Password</h2>
      <div className="auth-text-message"><p>We'll send a recovery link to</p></div>
      <form className="auth-form" onSubmit={onSubmit}>
        <ValidationInput
          error={!!errors.email}
          label="Email"
          name="email"
          placeholder="Email"
          variant="outlined"
          className="auth-input"
          size="small"
          errors={errors}
          register={register({
            required: true,
            validate: (value) => isEmail(value)
          })}
          errorMessage={{
            required: "Enter email",
            validate: "Invalid email format",
          }}/>
        <Button variant="contained" color="primary" className="auth-button" type="submit">Send recovery link</Button>
      </form>
      <Divider variant="middle" className="auth-divider"/>
      <div className="auth-links">
        <Link href="/login"><a className="auth-link">Return to log in</a></Link>
      </div>
    </Paper>
  </EmptyLayout>
}

export default Login

//TODO add header
