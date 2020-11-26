import GlobalStyle from '../constants/globalStyle';
import Head from "next/head";
import { Layout } from 'containers';
import { AuthProvider } from 'lib/useUser';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function MyApp({ Component, pageProps }) {
  library.add(fab, faCoffee);
  return(
    <>
    <Head>
      <title>Udforske_</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <GlobalStyle />
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  )
}

export default MyApp
