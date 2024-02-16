import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import logoheader from '../../assets/group.png';


const Header = () => {
  
  useEffect(() => {
    // Select all div elements within the component
    const divElements = document.querySelectorAll('div');
    const pElements = document.querySelectorAll('p');
    const imgElements = document.querySelectorAll('img');
    const aElements = document.querySelectorAll('a');
    // Iterate through each div element and set a custom attribute
    divElements.forEach((div, index) => {
            div.setAttribute('data-header', `.header-page-app-react${index}`);

      div.setAttribute('data-reactId', `.21jv590slsxl-y-2xta.b.2.0.0.${index}.0.0.0.0.0.0.${index}`);


      div.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.0.0.${index}`);

      div.setAttribute('react-qualifier', `.42.1a.ck.yml.0.2.4.01.1${index + 1}.2.0.4.0.1.${index + 100}`)

      div.setAttribute('styles', `xb57i2ifg x1q594okio x5lxg6scss x78zum5.1 xdt5ytfhi x6ikm8rgss x1ja2u2zio x1pq812kcss x1rohswgoe xfk6m8.12 x1yqm8sice xjx87ckcss x1l7klhgesc x1iyjqo2.2 xs83m0k.023 x2lwn1joce xx8ngbgecss xwo3gffgf x1oyok0egg x1odjw0fio x1e4zzelkl x1n2onr6ed xq1qtftfk1.2 `)
    });



            // Iterate through each div element and set a custom attribute
   pElements.forEach((p, index) => {
                p.setAttribute('data-header', `.41jp590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
      
                p.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
              });

         imgElements.forEach((img, index) => {
            img.setAttribute('data-reactId', `.41img590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
      
            img.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
      });

      aElements.forEach((a, index) => {
        a.setAttribute('data-reactId', `.41a590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
  
        a.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.p.0.${index}`);
  });
  }, []);
    const listyle = {
  listStyle:'none', padding:'8px',fontSize:'16px',fontWight:500,position:'relative',
    }

    const header = useRef(null)
     useEffect(() => { 


            {
               
                    window.addEventListener("scroll", function () {
                        if (window.scrollY >= 100) {
                          header.current.classList.add("activePcHeader");
                         
                        } else {
                          header.current.classList.remove("activePcHeader");
                      

                        
                        }
                      })
               
                
            }

    }, [])

  return (
    <>
        <Box w={'full'} bg={'#ffffff'} ref={header}borderBottom={'1px solid'}borderColor={'gray.200'}>
            <Container maxW={'container.xl'}>
                <Flex w={'full'} justifyContent={'space-between'} py={2}>
                    <Flex flex={1}>
                        <Box w={'full'} className="logoheader">
                            <Flex w={{base:'18%',md:'28%'}} h={'100%'} >
                               <Link to={'/'}>  <Image src={logoheader} alt="pridex" /></Link>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex flex={2} display={{base:'none', sm:'flex '}} justifyContent={'flex-end'} >
                        <Flex alignItems={'center'} >
                            <ul style={{display:'flex', gap:5, justifyContent:'space-between'}}>
                                <li style={listyle} className="li-header" ><Link to={'/'}><Text  className="about-us">Home</Text></Link>
    
                                </li>
                            <Box pos={'relative'} w={'auto'} className="li-header"  >
                                 <li  style={listyle} ><Link><Flex alignItems={'center'} gap={1}>
                                    <Text className="about-us">About Us</Text>
                                    <Box className="icona"  alignContent={'center'}><IoMdArrowDropdown /></Box>        
                                </Flex></Link>
                                </li>

                                 <Flex pos={'absolute'}  boxShadow='dark-lg' bg={'#ffff'} className="hover-item-show"  top={'100%'} left={0} zIndex={1} borderRadius={2}overflow={'hidden'}>
                                   <VStack alignItems={'start'} w={'100%'} h={'100%'}>
                                            <ul style={{width:'100%'}}>
                                             <li style={{width:'100%', listStyle:'none' ,padding:'0.5rem', fontWeight:500, }} className="li-show-index" > 
                                                <Link p={6}   > <Text>  Pridex Engineering &Construction Ltd</Text></Link>
                                           </li>

                                      <li style={{width:'100%', listStyle:'none' , background:'', padding:'0.5rem', fontWeight:500, }} className="li-show-index" > 
                                                <Link p={6}> <Text> Pridex Pridex Argo LimitedLtd</Text></Link>
                                         </li>

                                   
                                            </ul>
                                        </VStack>
                           </Flex>
                            </Box>
                                     <Box pos={'relative'} w={'auto'} className="li-header"  >
                                 <li  style={listyle} ><Link><Flex alignItems={'center'} gap={1}>
                                    <Text className="about-us">Management</Text>
                                    <Box className="icona"  alignContent={'center'}><IoMdArrowDropdown /></Box>        
                                </Flex></Link>
                                </li>

                                 <Flex pos={'absolute'} boxShadow='dark-lg' bg={'#ffff'} className="hover-item-show li-show-index-two"  top={'100%'} left={0} zIndex={1} borderRadius={2}overflow={'hidden'}>
                                   <VStack alignItems={'start'} w={'100%'} h={'100%'}>
                                            <ul style={{width:'100%'}}>
                                             <li style={{width:'100%', listStyle:'none' ,padding:'0.5rem', fontWeight:500, }} className="li-show-index" > 
                                                <Link p={6} to={'/board-of-directors'}  > <Text> Bord Of Derector</Text></Link>
                                           </li>

                                      <li style={{width:'100%', listStyle:'none' , background:'', padding:'0.5rem', fontWeight:500, }} className="li-show-index" > 
                                         <Link p={6}> <Text> Governece Bord</Text></Link>
                                         </li>

                                   
                                            </ul>
                                        </VStack>
                           </Flex>
                            </Box>
                                 
                                 <li style={listyle}  className="li-header" ><Link to={'/bussiness-units/all'}> <Text  className="about-us">bussiness Unit</Text>  </Link></li>

                                <li style={listyle} className="li-header"  ><Link ><Text  className="about-us">Investor</Text>  </Link></li>
                                
                                <li style={listyle}  className="li-header" ><Link>Career</Link></li>

                                <li style={listyle} className="li-header"  ><Link to={'/contact-us'}>Contact Us</Link></li>



                             
                            </ul>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    </>
  )
}

export default Header
