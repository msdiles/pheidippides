import EmptyLayout from "@/components/layouts/EmptyLayout"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
import Link from "next/link"
import ValidationInput from "@/components/ValidationInput"
import {
  mustHaveDigit,
  mustHaveLowercase,
  mustHaveOnlyLettersAndDigits,
  mustHaveUppercase,
} from "@/utils/validators"
import useResetPasswordPage from "@/hooks/useResetPassword"
import useCheckResetToken from "@/hooks/useCheckResetToken"
import { FetchResult } from "../../../models/enums"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import Router from "next/router"
import Dialog from "@material-ui/core/Dialog"
import CircularProgress from "@material-ui/core/CircularProgress"
import PageLoader from "@/components/PageLoader"
import Head from "next/head"
import styles from "./resetPassword.module.scss"

const Login = () => {
  const {
    onSubmit,
    errors,
    register,
    watch,
    loading: resetLoading,
    isChanged,
  } = useResetPasswordPage()
  const { isValid, loading: checkLoading } = useCheckResetToken()
  return (
    <EmptyLayout>
      <Head>
        <title>Reset Password | Pheidippides</title>
      </Head>
      <PageLoader open={checkLoading} />
      <Paper elevation={3} className="auth-form-box">
        <VpnKeyIcon className="auth-icon" fontSize="large" />
        <h2 className="text-center">Change Password</h2>
        <div className="auth-text-message">
          <p>Enter your new password</p>
        </div>
        <form className="auth-form" onSubmit={onSubmit}>
          <ValidationInput
            error={!!errors.password}
            label="Password"
            name="password"
            placeholder="Password"
            variant="outlined"
            className="auth-input"
            type="password"
            size="small"
            errors={errors}
            register={register({
              required: true,
              minLength: 8,
              maxLength: 128,
              validate: {
                hasUpperCase: (value) => mustHaveUppercase(value),
                hasLowerCase: (value) => mustHaveLowercase(value),
                hasDigit: (value) => mustHaveDigit(value),
                hasNotSpecial: (value) => mustHaveOnlyLettersAndDigits(value),
              },
            })}
            errorMessage={{
              required: "Enter password",
              minLength: "Password must have at least 8 characters",
              maxLength: "Your password can't be longer than 128 characters",
              hasUpperCase: "Password must have at least one uppercase letter",
              hasLowerCase: "Password must have at least one lowercase letter",
              hasDigit: "Password must have at least one digit character",
              hasNotSpecial: "Password mustn't have any special characters",
            }}
          />
          <ValidationInput
            error={!!errors.repeatPassword}
            label="Repeat password"
            name="repeatPassword"
            placeholder="Password"
            variant="outlined"
            className="auth-input"
            type="password"
            size="small"
            errors={errors}
            register={register({
              required: true,
              validate: (value) => value === watch("password"),
            })}
            errorMessage={{
              required: "Repeat password",
              validate: "Passwords don't match",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className="auth-button"
            type="submit"
            disabled={resetLoading}
          >
            Reset password
            {resetLoading && (
              <CircularProgress size={24} className={styles.buttonProgress} />
            )}
          </Button>
        </form>
        <Divider variant="middle" className="auth-divider" />
        <div className="auth-links">
          <Link href="/login">
            <a className="auth-link">Return to log in</a>
          </Link>
        </div>
      </Paper>

      <Dialog
        open={isValid === FetchResult.FALSE}
        onBackdropClick={() => {}}
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle>Your reset link is invalid</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please try resetting your password again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => Router.push("/")} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => Router.push("/reset/link")}
            color="primary"
            autoFocus
          >
            Reset password
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isChanged}
        onBackdropClick={() => {}}
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle>Succeeded!</DialogTitle>
        <DialogContent>
          <DialogContentText>Your password has been changed.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => Router.push("/")} color="primary">
            Go to home page
          </Button>
          <Button
            onClick={() => Router.push("/login")}
            color="primary"
            autoFocus
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </EmptyLayout>
  )
}

export default Login
