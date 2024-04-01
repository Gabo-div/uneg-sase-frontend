import { useState } from "react"

type Validator = {
  message: string
  validator: (password: string) => boolean
}

type ValidatorResult = {
  message: string
  valid: boolean
}

type Props = {
  validators: Validator[]
}

export default function usePasswordStrengthChecker({ validators }: Props) {
  const [results, setResults] = useState<ValidatorResult[]>(validators.map((validator) => ({ message: validator.message, valid: false })));

  const check = (password: string) => {
    setResults(validators.map((validator) => {
      return {
        message: validator.message,
        valid: validator.validator(password),
      }
    }))
  }

  return { check, results }
}
