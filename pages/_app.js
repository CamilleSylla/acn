import Footer from '../components/templates/footer/Footer'
import Nav from '../components/templates/nav/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nav/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
