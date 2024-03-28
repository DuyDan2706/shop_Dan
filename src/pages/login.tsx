import { NextPage } from 'next'
import LoginPage from 'src/views/pages/login'

type TProps = {}

const Login: NextPage<TProps> = () => {
  console.log('Dan')
  return <LoginPage />
}

export default Login
