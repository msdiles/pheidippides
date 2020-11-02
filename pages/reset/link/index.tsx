import EmptyLayout from "@/components/layouts/EmptyLayout"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import Link from "next/link"
import ValidationInput from "@/components/ValidationInput"
import {isEmail} from "@/utils/validators"
import useResetLinkPage from "@/hooks/useResetLinkPage"
import useCheckEmail from "@/hooks/useCheckEmail"
import ShowLoadingInput from "@/components/ShowLoadingInput"
import CircularProgress from "@material-ui/core/CircularProgress"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import Router from "next/router"
import Dialog from "@material-ui/core/Dialog"
import Head from "next/head"
import styles from "./link.module.scss"

const Login = () => {
  const {onSubmit, errors, register,isSent,loading} = useResetLinkPage()
  const {checkEmail, emailLoading} = useCheckEmail()
  return <EmptyLayout>
    <Head>
      <title>Reset Password | Pheidippides</title>
    </Head>
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
            validate: {
              isEmail: (value: string) => isEmail(value),
              isExist: async (value: string) => !(await checkEmail(value)),
            }
          })}
          errorMessage={{
            required: "Enter email",
            isEmail: "Invalid email format",
            isExist: "User with this email don't exist",
          }}
          InputProps={{
            endAdornment:
              <ShowLoadingInput loading={emailLoading}/>
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className="auth-button"
          type="submit"
          disabled={loading}
        >
          Send recovery link
          {loading && <CircularProgress size={24} className={styles.buttonProgress}/>}

        </Button>
      </form>
      <Divider variant="middle" className="auth-divider"/>
      <div className="auth-links">
        <Link href="/login"><a className="auth-link">Return to log in</a></Link>
      </div>
    </Paper>
    <Dialog open={isSent} onBackdropClick={() => {
    }} maxWidth="sm" fullWidth={true}>
      <DialogTitle>Check Your Email</DialogTitle>
      <DialogContent>
        <DialogContentText>
          We just sent instructions for completing your password reset to the
          designated email address.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => Router.push("/")} color="primary">
          Go to home page
        </Button>
      </DialogActions>
    </Dialog>
  </EmptyLayout>
}

export default Login

//TODO add header
