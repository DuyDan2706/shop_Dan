import { NextPage } from 'next'
import RegisterPage from 'src/views/pages/register'


type TProps = {}

const Register: NextPage<TProps> = () => {
  console.log('Dan')
  // eslint-disable-next-line newline-before-return
  return <RegisterPage />
}

export default Register
