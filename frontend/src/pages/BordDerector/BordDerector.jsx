import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const BordDerector = () => {
    
  useEffect(() => {
    // Select all div elements within the component
    const divElements = document.querySelectorAll('div');
    const pElements = document.querySelectorAll('p');
    const imgElements = document.querySelectorAll('img');
    const aElements = document.querySelectorAll('a');
    // Iterate through each div element and set a custom attribute
    divElements.forEach((div, index) => {
            div.setAttribute('data-bord-of-reactor', `.bord-of-reactor-page-app-react${index}`);

      div.setAttribute('data-reactId', `.21jv590slsxl-y-2xta.b.2.0.0.${index}.0.0.0.0.0.0.${index}`);


      div.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.0.0.${index}`);

      div.setAttribute('react-qualifier', `.42.1a.ck.yml.0.2.4.01.1${index + 1}.2.0.4.0.1.${index + 100}`)

      div.setAttribute('styles', `xb57i2ifg x1q594okio x5lxg6scss x78zum5.1 xdt5ytfhi x6ikm8rgss x1ja2u2zio x1pq812kcss x1rohswgoe xfk6m8.12 x1yqm8sice xjx87ckcss x1l7klhgesc x1iyjqo2.2 xs83m0k.023 x2lwn1joce xx8ngbgecss xwo3gffgf x1oyok0egg x1odjw0fio x1e4zzelkl x1n2onr6ed xq1qtftfk1.2 `)
    });



            // Iterate through each div element and set a custom attribute
   pElements.forEach((p, index) => {
                p.setAttribute('data-bord-of-reactor', `.41jp590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
      
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
    const derectorinfo = [
        {
            image : 'https://res.cloudinary.com/daxvmjaff/image/upload/v1707815312/pridex_etff4k.jpg',
            tittle : 'Shafiul Islam Kamal',
            main : 'Chairman',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },

          {
            image : 'https://res.cloudinary.com/daxvmjaff/image/upload/v1707815521/chip_qblpo1.jpg',
            tittle : 'Shafiul Islam Kamal',
            main : 'Chairman',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
          {
            image : 'https://motwanigreatness.com/pridex/wp-content/uploads/2024/01/warren-VVEwJJRRHgk-unsplash-1-1536x1051.jpg',
            tittle : 'Shafiul Islam Kamal',
            main : 'Chairman',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
          {
            image : 'https://res.cloudinary.com/daxvmjaff/image/upload/v1707815844/chipp_sguhif.jpg',
            tittle : 'Shafiul Islam Kamal',
            main : 'Chairman',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ]
  return (
    <>
      <Box w={'full'}>
         <Container maxW={'container.xl'} py={'6rem'}>
            {
                derectorinfo && derectorinfo.map((el, index)=>{
                    return (
                   
                        <Flex key={index} w={'full'} flexWrap={'wrap'} gap={'2rem'} className='derector-nth-child'>
                            <Flex w={{base:'100%', md:'52%'}} justifyContent={'center'} alignItems={'center'}>
                                <Box w={'full'}>
                                    <VStack alignItems={'start'}>
                                        <Box w={'full'}>
                                            <Text className='name-of-chip' fontSize={'30px'}fontWeight={600} color={'blue.500'} >{el?.tittle}</Text>
                                        </Box>
                                        <Box w={'full'}><Text fontSize={'18px'}fontWeight={600}>{el?.main}</Text></Box>

                                        <Box w={'full'}>
                                        <Text>
                                            {el?.description}
                                        </Text>
                                        </Box>
                                    </VStack>
                                </Box>
                            </Flex>
                            <Flex w={{base:'100%', md:'40%'}} className='image-end-flex'>
                            
                                    <Flex w={'360px'} h={'360px'}>
                                        <Image className='image-design-clip' w={'full'} h={'full'} src={el?.image} alt='chif' />
                                    </Flex>
                            
                            </Flex>          
                        </Flex>
                   
                    )
                })
            }


         </Container>
      </Box>
    </>
  )
}

export default BordDerector
