import Footer from '../components/templates/footer/Footer'
import Nav from '../components/templates/nav/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id='app'>
    <Nav/>
    <Component {...pageProps} />
    <Footer/>
    </div>
  )
}

export default MyApp
