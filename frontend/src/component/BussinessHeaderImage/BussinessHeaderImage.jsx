import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const BussinessHeaderImage = () => {
  return (
    <>

            <Flex w={'full'}  h={{base:'25vh', md:'40vh'}} pos={'relative'}>
               <Box  className='bg-image-header'></Box>
               <Box w={'full'} h={'full'} pos={'absolute'} top={0} left={0} bg={'#000000'} opacity={'50%'}></Box>

                <Box w={'full'} h={'full'} pos={'absolute'} top={0} left={0} >
                      <Flex w={'full'} h={'full'} justifyContent={'center'} alignItems={'center'}>
                         <Box className='headertext'>
                            <Text fontSize={{base:'35px',sm:'50px'}}fontWeight={700} color={'white'}>
                              Business Unit</Text>
                        </Box>
                      </Flex>
                </Box>
            </Flex>
     
    </>
  )
}

export default BussinessHeaderImage
