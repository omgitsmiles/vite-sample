import { Box, 
  Heading, 
  Image, 
  ScaleFade, 
  Text,
  Badge,
  Button,
  Center,
  Flex,
  Link,
  Stack,
  useColorModeValue } from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

const test = ({ imageSrc }: { imageSrc: string }) => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
    {}
  );

  return (

    <Center py={12}>
      <ScaleFade
        initialScale={0.9}
        in={enterCount > 0}
        whileHover={{ scale: 1.1 }}
      >
    <Box
      role={'group'}
      p={6}
      maxW={'330px'}
      w={'full%'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
      cursor={'pointer'}
      overflow={'hidden'}
      ref={ref}
      >
      <Box
        rounded={'lg'}
        mt={-12}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: `url(${imageSrc})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}>
        <Image
          rounded={'lg'}
          height={230}
          width={282}
          objectFit={'cover'}
          src={imageSrc}
        />
      </Box>
      <Stack pt={10} align={'center'}>
        <Text color={'black'} fontSize={'sm'} textTransform={'uppercase'}>
          Brand
        </Text>
        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} color={'black'}>
          Nice Chair, pink
        </Heading>
        <Stack direction={'row'} align={'center'}>
          <Text fontWeight={800} fontSize={'xl'} color={'black'}>
            $57
          </Text>
          <Text textDecoration={'line-through'} color={'black'}>
            $199
          </Text>
        </Stack>
      </Stack>
    </Box>
    </ScaleFade>
  </Center>
   

    // <Box w="100%">
    //   <ScaleFade
    //     initialScale={0.9}
    //     in={enterCount > 0}
    //     whileHover={{ scale: 1.1 }}
    //   >
    //     <Box
    //       w="full"
    //       borderRadius="lg"
    //       borderWidth="1px"
    //       cursor="pointer"
    //       overflow="hidden"
    //       ref={ref}
    //     >
    //       <Image src={imageSrc}></Image>
    //       <Box p={6}>
    //         <Heading fontSize={20} letterSpacing="1px" pb="20px">
    //           123 Long Road, America
    //         </Heading>
    //         <Text>
    //           Sint commodo enim elit consectetur proident culpa aliqua voluptate
    //           ea pariatur mollit nisi esse nulla. Deserunt consectetur ullamco
    //           incididunt commodo ullamco quis ullamco commodo. Sint velit duis
    //           incididunt eiusmod reprehenderit nisi sunt laboris magna labore
    //           nisi.
    //         </Text>
    //       </Box>
    //     </Box>
    //   </ScaleFade>
    // </Box>

  );
};

export default test
