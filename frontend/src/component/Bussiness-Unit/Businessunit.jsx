import { Box, Button, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Businessunit = () => {
    const businessunit = [
        {
            image : 'https://motwanigreatness.com/pridex/wp-content/uploads/2024/01/pointing-sketch.jpg',
            tittle:'Pridex Engineering & Construction Ltd',
            description:'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
            link:''
        },
         {
            image : 'https://images.unsplash.com/photo-1620200423727-8127f75d7f53?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tittle:'Pridex Agro',
            description:'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
            link:''
        },
         {
            image : 'https://motwanigreatness.com/pridex/wp-content/uploads/2024/01/close-up-construction-site-excavator.jpg',
            tittle:'Biwas Enterprise',
            description:'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
            link:''
        },
         {
            image : 'https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            tittle:'Pridex Real Estate',
            description:'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
            link:''
        },
         {
            image : 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcnBvcnR8ZW58MHx8MHx8fDA%3D',
            tittle:'Safwan Air Express',
            description:'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
            link:''
        },
         {
            image : 'https://i0.wp.com/masonandmarlowe.co.uk/wp-content/uploads/2021/11/What-Is-an-Architect1.jpg?fit=1280%2C720&ssl=1',
            tittle:'Pridex Design & Development',
            description:'Leather detail shoulder contrastic colour contour stunning silhouette working peplum.',
            link:''
        }
    ]


  return (
    <>
    {/* BussinessHeader */}
    <Box w={'full'} py={8}>
        <Container maxW={'container.xl'} h={'100%'} >
           <VStack alignItems={'start'} spacing={3}>
                 <Box w={'full'}>
                    <Flex w={'full'} justifyContent={'center'} alignItems={'center'} >
                        <Box className='headertext'>
                            <Text fontSize={{base:'25px',sm:'35px'}}fontWeight={700} color={'blue.600'}>Business Unit</Text>
                        </Box>
                    </Flex>
                 </Box>

                 <Box w={'full'}>
                    <Flex w={'full'} flexWrap={'wrap'} gap={4}>
                     {
                        businessunit && businessunit.map((el, index)=>{
                            return(
                        <Flex key={index} w={{base:'100%',sm:'48%', md:'32%'}} borderRadius={8} overflow={'hidden'}>
                            <Box  pos={'relative'} className='image-role main_box' transition={'0.8s'} w={'full'}h={'full'} >
                                <Image w={'full'} h={'full'} src={el.image} alt='business' />
                                
                       
                                  <Box className='overlycolor' w={'full'} bg={'#000000'}  pos={'absolute'} top={0} left={0} h={'full'} opacity={'20%'} transition={'0.8s'}>

                                </Box>

                                <Box w={'full'} h={'full'} pos={'absolute'} top={0} left={0}>
                                    <VStack alignItems={'center'} transform={'translateY(0px)'} pos={'relative'} h={'full'} >
                                        <Box className='box-in-text' w={'80%'} pos={'absolute'} transition={'0.5s'} bottom={0} >
                                                                                                                        <Box w={'full'} className='tittle'>
                                                <Text color={'#fff'} fontSize={{base:'20px', sm:'23px'}} fontWeight={500}>{el.tittle}</Text>
                                            </Box>
 
                                            <Box transition={'0.10s'} h={0} w={'full'} className='info' mt={{base:2, sm:3}} >
                                                <VStack w={'full'} alignItems={'start'} spacing={3}>
                                                    <Box transform={'scaleY(0)'} transition={'0.3s'} className='infotextdes' w={'90%'}>
                                                        <Text color={'#fff'}>{el.description}</Text>
                                                    </Box>

                                                  <Box transform={'scaleY(0)'}transition={'0.3s'} className='infotextdes'>
                                                    <Button bg={'#32a9d1'} _hover={{bg:'orange.500'}}>Learn More</Button>
                                                  </Box>
                                                </VStack>
                                            </Box>
                                        </Box>
                                  </VStack>
                                </Box>
                                
                                
                            </Box>
                        </Flex>
                            )
                        })
                     }
                    </Flex>
                 </Box>
           </VStack>
        </Container>
    </Box>
    </>
  )
}

export default Businessunit
