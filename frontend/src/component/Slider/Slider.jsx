import { Box, Flex } from '@chakra-ui/react';
import SimpleSlider from './SimpleSlider';
const Slider = () => {
        const slides = [
         { url: "https://motwanigreatness.com/pridex/wp-content/uploads/2024/01/slider2-1.jpg", title: "beach" },
      { url: "https://motwanigreatness.com/pridex/wp-content/uploads/2024/01/slider1-1.jpg", title: "beach" },
      
      ];

      const containerStyles = {
        width: "100%",
        height: "82vh",
        margin: "0 auto",
        transition :'0.8s'
      };
  return (
    <>
  
                <Flex w={'full'} overflow={'hidden'}  >
                    <Box w={'full'} >
                    <div style={containerStyles}>
                        <SimpleSlider  slides={slides} />
                    </div>

                
                    </Box>
                </Flex>
   
    </>
  )
}

export default Slider
