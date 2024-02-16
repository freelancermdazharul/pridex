import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from '../../assets/logoheader.png';


const FooterEnd = () => {
  const listyle = {
      listStyle:'none',
      fontWeight:400,
      paddingTop:'14px'
  }
   const listyle2 = {
      listStyle:'none',
      paddingTop:'10px'
     
  }
  const information = [
    {
      icons:<EmailIcon />,
      email :'info@pridexgroup.com'
    },
        {
      icons:<PhoneIcon />,
      email :'+8809611865093'
    },
        {
      icons:<PhoneIcon />,
      email :'+8801827445544'
    },

  ]

  const followus = [
    {
      icon :<BiLogoFacebookCircle />
    },
        {
      icon :<IoLogoWhatsapp />
    },
        {
      icon :<IoLogoYoutube />
    },

  ]
  return (
    <>
    <Box w={'full'} pb={8}>
      <Container maxW={'container.xl'}>
         <Box w={'full'}>
          <Flex flexWrap={'wrap'} gap={{base:8, md:'3%'}} className='footer-des-mobail'>
             <Flex w={{base:'100%', md:'30%'}}>
               <Box w={'full'}>
                <VStack alignItems={'start'}>
                  <Box>
                    <Image src={logo} alt='footer-logo' />
                  </Box>

                  <Box>
                    <Text  > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text>
                  </Box>
                </VStack>
               </Box>
             </Flex>
             <Flex w={{base:'100%', md:'30%'}} ml={{base:0, md:8}}>
               <Box w={'full'}>
                 <VStack alignItems={'start'} w={'full'}>
                   <Box>
                     <Text fontSize={'23px'} fontWeight={600} color={'blue.500'} >Quick Links</Text>
                   </Box>

                   <Box w={'full'} >
                      <VStack alignItems={'start'} >
                          <ul style={{padding:'10px'}}>
                            <li style={listyle} className='foooter-ul-li'><Link className='footerLink'to={'/'} >Home</Link></li>
                            <li style={listyle} className='foooter-ul-li'><Link className='footerLink' to={'/about-us'} >About Us</Link></li>
                            <li style={listyle} className='foooter-ul-li'><Link className='footerLink' to={'#'}>Our Services</Link></li>
                            <li style={listyle} className='foooter-ul-li'><Link className='footerLink' to={'/contact-us'}>Contact Us</Link></li>
                          </ul>
                      </VStack>
                   </Box>
                 </VStack>
               </Box>
             </Flex>
             <Flex w={{base:'100%', md:'30%'}}>
               <Box w={'full'}>
                <VStack alignItems={'start'}>
                   <Box w={'full'}>
                     <VStack alignItems={'start'}>
                           <Box>
                     <Text fontSize={'23px'} fontWeight={600} color={'blue.500'} >Information</Text>
                   </Box>

                      <Box w={'full'}>
                         <VStack alignItems={'start'}>
                              <ul>
                                {
                                  information && information.map((el, index)=>{
                                    return(
                                   <li key={index} style={listyle2}>
                                  <Link _hover={{textDecoration:'none'}} className='lifooter-information'>
                                    <Flex gap={2} >
                                      <Box color={'blue.500'} className='footer-icons'>
                                        {
                                          el?.icons
                                        }
                                      </Box>
                                      <Box>
                                        <Text fontWeight={500} _hover={{color:'blue.500', transition:'0.5s'}} transition={"0.5s"}>
                                     {el?.email}</Text>
                                      </Box>
                                    </Flex>
                                  </Link>
                              </li>
                                    )
                                  })
                                }
                          

                              
                            </ul>
                         </VStack>
                      </Box>
                     </VStack>
                   </Box>

                   <Box>
                     <VStack alignItems={'start'}>
                       <Box>
                     <Text fontSize={'23px'} fontWeight={600} color={'blue.500'} >Follow Us</Text>
                   </Box>

                   <Flex gap={3} >
                    {
                      followus && followus.map((el,index)=>{
                        return(
                      <Flex key={index} justifyContent={'center'} alignItems={'center'} w={8} h={8} bg={'blue.500'} className='footer-followus' borderRadius={2} _hover={{bg:'gray.800'}}>
                        <Link>
                          {
                            el?.icon
                          }
                        </Link>
                      </Flex>
                        )
                      })
                    }

                   </Flex>
                     </VStack>
                   </Box>
                </VStack>
               </Box>
             </Flex>
          </Flex>
         </Box>
      </Container>
    </Box>
    </>
  )
}

export default FooterEnd
