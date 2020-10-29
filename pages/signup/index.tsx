import EmptyLayout from "@/components/layouts/EmptyLayout"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Link from "next/link"
import ValidationInput from "@/components/ValidationInput"
import {
  isEmail,
  mustHaveDigit,
  mustHaveLowercase,
  mustHaveOnlyLettersAndDigits,
  mustHaveUppercase
} from "@/utils/validators"
import useSignUpPage from "@/hooks/useSignUpPage"

const Login = () => {
  const {onSubmit, errors, register,watch} = useSignUpPage()
  return <EmptyLayout>
    <Paper elevation={3} className="auth-form-box">
      <ExitToAppIcon className="auth-icon" fontSize="large"/>
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
            validate: {
              isEmail: (value: string) => isEmail(value),
              isExist: async (value: string) => await true,
              // isExist: async (value:string) => await checkEmailDebounce(value),
            }
          })}
          errorMessage={{
            required: "Enter email",
            isEmail: "Invalid email format",
            maxLength: "Your email can't be longer than 128 characters",
            isExist: "User with this email already exists",
          }}/>
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
        <Button variant="contained" color="primary" className="auth-button" type="submit">SIGN UP</Button>
      </form>
      <Divider variant="middle" className="auth-divider"/>
      <div className="auth-links">
        <Link href="/login"><a className="auth-link">Already have an account? Log in</a></Link>
      </div>
    </Paper>
  </EmptyLayout>
}

export default Login

//TODO add header
