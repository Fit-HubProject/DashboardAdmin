import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Dashboard from './dashboard';
import Home from './index';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <Dashboard/> */}
      <Component {...pageProps} />
      {/* <Home/> */}
    </ChakraProvider>
  )
}

export default MyApp
