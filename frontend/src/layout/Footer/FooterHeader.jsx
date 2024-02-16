import { Box, Button, Container, Flex, Image, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import { useLocation } from "react-router-dom"

import React from 'react'

const FooterHeader = () => {
    const  inputText = [
        {
            tittle:'Fast Name',
        },
        {
            tittle:'Last Name'
        },
        {
            tittle:'Email'
        },
        {
            tittle :'Phone'
        }
    ]
        const {pathname} = useLocation()
    console.log(pathname)
  return (
   <>
        <Box w={'full'} >
            {/* bg Image */}
            <Flex w={'full'} h={{base:'40vh', md:'60vh'}} pos={'relative'}>
                {
                    pathname !== '/contact-us' ? <Box className='my-image-contact' pos={'relative'}>
                    <Box pos={'absolute'} top={0} l={0} w={'full'} h={'full'} bg={'#000000'} opacity={'60%'} ></Box>

                </Box> : 
                <Box className='my-image-contact-page' pos={'relative'}>
                    <Box pos={'absolute'} top={0} l={0} w={'full'} h={'full'} bg={'#000000'} opacity={'60%'} ></Box>

                </Box>

                }
                
                     <Box w={'full'} pos={'absolute'} top={{base:'37%', md:'50%'}} left={0}>
                <Container maxW={'container.xl'}>
                    <VStack alignItems={'start'}>
                        <Flex justifyContent={'center'} alignItems={'center'} w={'full'} className='tittle-contact'>
                            <Text color={'#ffff'} fontSize={{base:'25px', md:'50px'}} fontWeight={700}> Contact Us</Text>
                        </Flex>

                        <Box w={'full'}>
                            <Flex flexWrap={'wrap'} boxShadow='dark-lg'  rounded='2xl' bg='white' overflow={'hidden'} >
                                <Flex w={{base:'100%', md:'40%'}} overflow={'hidden'}>
                                    <Box w={'full'} h={'100%'} pos={'relative'}>
                                        {
                                           
                                        <Image w={'full'} h={'full'} src= { pathname !== '/contact-us' ? 'https://res.cloudinary.com/daxvmjaff/image/upload/v1707832511/conestactor_mdwwzf.avif' :'https://res.cloudinary.com/daxvmjaff/image/upload/v1707833415/Untitled_design_3_yvayeq.png'}  alt='conatct' /> 
                                            
                                        }
                                        <Box w={'full'} h={'full'} bg={'#000000'}  opacity={'20%'} pos={'absolute'} top={0} left={0}></Box>
                                       
                                    </Box>
                                </Flex>
                               
                            <Flex w={{base:'100%', md:'60%'}} >
                             <Flex flexWrap={'wrap'} w={'full'} p={8} gap={'2%'}>

                                {
                                    inputText && inputText.map((el, index)=>{
                                        return(
                                    <Flex key={index} w={{base:'100%', md:'48%'}}>
                                                <VStack w={'full'} alignItems={'start'} spacing={1}>
                                                    <Box className='tittle'>
                                                        <Text>{
                                                                el?.tittle}</Text>
                                                    </Box>

                                                    <Box w={'full'}>
                                                          <Input placeholder={el?.tittle}  size='md' border={'1px solid'} borderColor={'blue.500'} />
                                                    </Box>
                                                </VStack>
                                          
                                        </Flex>
                                        )
                                    })
                                }
                                      
                                    
                                <Flex w={'full'}>
                                   <VStack alignItems={'start'} w={'full'}>
                                    <Box >
                                        Message
                                    </Box>

                                    <Box w={'full'}>
                                          <Textarea
                                         border={'1px solid'} borderColor={'blue.500'} 
                                        placeholder='Message'
                                        size='sm'
                                    />
                                    </Box>
                                   </VStack>
                                </Flex>
                                          
                                 <Flex w={'full'}mt={4}>
                                    <Button colorScheme='whatsapp' w={'full'}>Send</Button>
                                 </Flex> 
                              
                                    
                                </Flex>
                            </Flex>
                            </Flex>
                        </Box>
                    </VStack>
                </Container>
            </Box>
            </Flex>

       

        </Box>
   </>
  )
}

export default FooterHeader
