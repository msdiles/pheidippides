import EmptyLayout from "@/components/layouts/EmptyLayout"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Link from "next/link"
import useLoginPage from "@/hooks/useLoginPage"
import ValidationInput from "@/components/ValidationInput"
import {isEmail} from "@/utils/validators"
import CircularProgress from "@material-ui/core/CircularProgress"
import styles from "../signup/signup.module.scss"
import React from "react"

const Login = () => {
  const {onSubmit, errors, register,loading} = useLoginPage()
  return <EmptyLayout>
    <Paper elevation={3} className="auth-form-box">
      <ExitToAppIcon className="auth-icon" fontSize="large"/>
      <h2 className="text-center">Log In</h2>
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
        <ValidationInput
          error={!!errors.password}
          label="Password"
          name="password"
          placeholder="Password"
          variant="outlined"
          className="auth-input"
          size="small"
          type="password"
          errors={errors}
          register={register({required: true})}
          errorMessage={{
            required: "Enter password",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className="auth-button"
          type="submit"
          disabled={loading}
        >
          LOG IN
          {loading && <CircularProgress size={24} className={styles.buttonProgress}/>}
        </Button>
      </form>
      <Divider variant="middle" className="auth-divider"/>
      <div className="auth-links">
        <Link href="/reset/link"><a className="auth-link">Forgot password?</a></Link>
        <Link href="/signup"><a className="auth-link">Don't have an account? Sign up</a></Link>
      </div>
    </Paper>
  </EmptyLayout>
}

export default Login

//TODO add header
