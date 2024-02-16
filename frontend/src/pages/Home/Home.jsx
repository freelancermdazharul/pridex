import { Box, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import Businessunit from "../../component/Bussiness-Unit/Businessunit";
import Slider from "../../component/Slider/Slider";

const Home = () => {

  useEffect(() => {
    // Select all div elements within the component
    const divElements = document.querySelectorAll('div');
    const pElements = document.querySelectorAll('p');
    const imgElements = document.querySelectorAll('img');
    const aElements = document.querySelectorAll('a');
    // Iterate through each div element and set a custom attribute
    divElements.forEach((div, index) => {
            div.setAttribute('data-homepage', `.home-page-app-react${index}`);

      div.setAttribute('data-reactId', `.21jv590slsxl-y-2xta.b.2.0.0.${index}.0.0.0.0.0.0.${index}`);


      div.setAttribute('data-react-checksum', `.15ajhar3ul.b.2.0.0.${index}.0.0.0.0.0.${index}`);

      div.setAttribute('react-qualifier', `.42.1a.ck.yml.0.2.4.01.1${index + 1}.2.0.4.0.1.${index + 100}`)

      div.setAttribute('styles', `xb57i2ifg x1q594okio x5lxg6scss x78zum5.1 xdt5ytfhi x6ikm8rgss x1ja2u2zio x1pq812kcss x1rohswgoe xfk6m8.12 x1yqm8sice xjx87ckcss x1l7klhgesc x1iyjqo2.2 xs83m0k.023 x2lwn1joce xx8ngbgecss xwo3gffgf x1oyok0egg x1odjw0fio x1e4zzelkl x1n2onr6ed xq1qtftfk1.2 `)
    });



            // Iterate through each div element and set a custom attribute
   pElements.forEach((p, index) => {
                p.setAttribute('data-reactId', `.41jp590slpxl-y-2xta.b.2.0.0.${index}.0.0.0.p.0.0.${index}`);
      
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


  return (
    <>
    <VStack alignItems={'start'} spacing={0}>
        <Box w={'full'} h={''}>
            <Slider />
        </Box>
        <Box w={'full'}>
            <Businessunit />
        </Box>
    </VStack>
    </>
  )
}

export default Home
