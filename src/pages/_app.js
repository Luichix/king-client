import '../styles/globals.css'
import '../styles/color.css'
import '../styles/minireset.css'
import { AuthProvider } from '../context/auth'
import DefaultLayout from '../components/layouts/Default'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}
export default MyApp
