import { Box, VStack } from "@chakra-ui/react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Pagelayout = ({children}) => {
  return (
    <>
        <VStack alignItems={'start'} justifyContent={'start'} spacing={0}>
            <Header />

            <Box w={'full'}>
                {children}
            </Box>

            <Footer />
        </VStack>
    </>
  )
}

export default Pagelayout
