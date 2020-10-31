export const isEmail =
  (email: string) => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) ? true : false)
export const mustHaveUppercase = (value: string) => /[A-Z]/.test(value)
export const mustHaveLowercase = (value: string) => /[a-z]/.test(value)
export const mustHaveDigit = (value: string) => /[\d]/.test(value)
export const mustHaveOnlyLettersAndDigits = (value: string) =>
  !/(?![A-Za-z0-9])./.test(value)
