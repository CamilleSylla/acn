import Footer from '../components/templates/footer/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
