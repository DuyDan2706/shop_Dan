import { NextPage } from 'next'
import BlankLayout from 'src/views/layouts/BlankLayout'
import LoginPage from 'src/views/pages/login'

type TProps = {}

const Login: NextPage<TProps> = () => {
  // eslint-disable-next-line newline-before-return
  return <LoginPage />
}

export default Login

Login.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>
