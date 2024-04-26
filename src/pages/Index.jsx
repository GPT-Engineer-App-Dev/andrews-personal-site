import { Box, Flex, Text, VStack, Image, Link, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={10}>
      <Box p={5} shadow='md' borderWidth='1px' flex='1' borderRadius='md'>
        <Text fontSize='2xl' fontWeight='bold'>President Andrew Johnson</Text>
        <Image src="/images/andrew-johnson.jpg" alt="President Andrew Johnson" boxSize="300px" m="auto" />
        <Text mt={4}>Andrew Johnson, the 17th President of the United States, served from 1865 to 1869 following the assassination of President Abraham Lincoln. His presidency focused on the immediate aftermath of the Civil War and the reintegration of the Southern states.</Text>
      </Box>
      <Box p={5} shadow='md' borderWidth='1px' flex='1' borderRadius='md'>
        <Text fontSize='2xl' fontWeight='bold'>Projects</Text>
        <VStack spacing={4} mt={4}>
          <Text>Project 1: Reconstruction Acts</Text>
          <Text>Project 2: Purchase of Alaska</Text>
          <Text>Project 3: Impeachment Trial</Text>
        </VStack>
      </Box>
      <Box p={5} shadow='md' borderWidth='1px' flex='1' borderRadius='md'>
        <Text fontSize='2xl' fontWeight='bold'>Contact</Text>
        <Flex align='center' mt={4}>
          <Link href='https://github.com/andrewjohnson' isExternal>
            <Button leftIcon={<FaGithub />} colorScheme='teal' variant='solid'>
              GitHub
            </Button>
          </Link>
          <Link href='https://linkedin.com/in/andrewjohnson' isExternal ml={2}>
            <Button leftIcon={<FaLinkedin />} colorScheme='blue' variant='solid'>
              LinkedIn
            </Button>
          </Link>
          <Link href='mailto:andrew.johnson@example.com' ml={2}>
            <Button leftIcon={<FaEnvelope />} colorScheme='red' variant='solid'>
              Email
            </Button>
          </Link>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Index;