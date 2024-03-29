import { ChakraProvider } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'


const styles = {
  global: (props) => ({
		body: {
			bg: mode("#fff", "#f7f7f7f7")(props),
			color: mode("gray.800", "black")(props),
      fontFamily: "Poppins, sans-serif",
      
		},
	}),

 }

 const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config, styles });
ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>

    <BrowserRouter>
      <ChakraProvider theme ={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>

 // </React.StrictMode>
)
