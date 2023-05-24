import {useState} from 'react'

import {
  AppContainer,
  PasswordContainer,
  Heading,
  Description,
  ErrorMsg,
  Input,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangeInput = event => {
    setPassword(event.target.value)
  }
  const ShowErrorMsg = password.length < 8
  return (
    <AppContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <Input type="password" onChange={onChangeInput} value={password} />
        {ShowErrorMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordContainer>
    </AppContainer>
  )
}

export default PasswordValidator
