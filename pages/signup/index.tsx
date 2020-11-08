import EmptyLayout from "@/components/layouts/EmptyLayout"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import CircularProgress from "@material-ui/core/CircularProgress"
import Link from "next/link"
import ValidationInput from "@/components/ValidationInput"
import {
  isEmail,
  mustHaveDigit,
  mustHaveLowercase,
  mustHaveOnlyLettersAndDigits,
  mustHaveUppercase,
} from "@/utils/validators"
import useSignUpPage from "@/hooks/useSignUpPage"
import Router from "next/router"
import useCheckEmail from "@/hooks/useCheckEmail"
import useShowPasswordInput from "@/components/ShowPasswordInput/useShowPasswordInput"
import ShowPasswordInput from "@/components/ShowPasswordInput"
import ShowLoadingInput from "@/components/ShowLoadingInput"
import Head from "next/head"
import styles from "./signup.module.scss"

const Login = () => {
  const {
    onSubmit,
    errors,
    register,
    watch,
    loading,
    isSignup,
  } = useSignUpPage()
  const { checkEmail, emailLoading } = useCheckEmail()
  const { showPassword, toggleShow } = useShowPasswordInput()
  const {
    showPassword: showPasswordRepeat,
    toggleShow: toggleShowRepeat,
  } = useShowPasswordInput()
  return (
    <EmptyLayout>
      <Head>
        <title>SignUp | Pheidippides</title>
      </Head>
      <Paper elevation={3} className="auth-form-box">
        <ExitToAppIcon className="auth-icon" fontSize="large" />
        <h2 className="text-center">Sign Up</h2>
        <form className="auth-form" onSubmit={onSubmit}>
          <ValidationInput
            error={!!errors.username}
            label="Username"
            name="username"
            placeholder="Username"
            variant="outlined"
            className="auth-input"
            size="small"
            errors={errors}
            register={register({
              required: true,
              minLength: 6,
              maxLength: 128,
            })}
            errorMessage={{
              required: "Enter username",
              minLength: "Username must have at least 6 characters",
              maxLength: "Your Username can't be longer than 128 characters",
            }}
          />
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
              maxLength: 128,
              validate: {
                isEmail: (value: string) => isEmail(value),
                isExist: async (value: string) => await checkEmail(value),
              },
            })}
            errorMessage={{
              required: "Enter email",
              isEmail: "Invalid email format",
              maxLength: "Your email can't be longer than 128 characters",
              isExist: "User with this email already exists",
            }}
            InputProps={{
              endAdornment: <ShowLoadingInput loading={emailLoading} />,
            }}
          />
          <ValidationInput
            error={!!errors.password}
            label="Password"
            name="password"
            placeholder="Password"
            variant="outlined"
            className="auth-input"
            type={showPassword ? "text" : "password"}
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
            InputProps={{
              endAdornment: (
                <ShowPasswordInput
                  toggleShow={toggleShow}
                  showPassword={showPassword}
                />
              ),
            }}
          />
          <ValidationInput
            error={!!errors.repeatPassword}
            label="Repeat password"
            name="repeatPassword"
            placeholder="Password"
            variant="outlined"
            className="auth-input"
            type={showPasswordRepeat ? "text" : "password"}
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
            InputProps={{
              endAdornment: (
                <ShowPasswordInput
                  showPassword={showPasswordRepeat}
                  toggleShow={toggleShowRepeat}
                />
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className="auth-button"
            type="submit"
            disabled={loading}
          >
            SIGN UP
            {loading && (
              <CircularProgress size={24} className={styles.buttonProgress} />
            )}
          </Button>
        </form>
        <Divider variant="middle" className="auth-divider" />
        <div className="auth-links">
          <Link href={"/login"}>
            <a className="auth-link">Already have an account? Log in</a>
          </Link>
        </div>
      </Paper>
      <Dialog
        open={isSignup}
        onBackdropClick={() => {}}
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle>Congratulations</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have successfully registered.
          </DialogContentText>
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
