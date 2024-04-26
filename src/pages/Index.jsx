import { Box, Flex, Text, VStack, Image, Link, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={10}>
      <Box p={5} shadow='md' borderWidth='1px' flex='1' borderRadius='md'>
        <Text fontSize='2xl' fontWeight='bold'>About Andrew Johnson</Text>
        <Text mt={4}>Andrew Johnson is a software engineer with a passion for developing scalable web applications and working on innovative projects that leverage the latest technology.</Text>
      </Box>
      <Box p={5} shadow='md' borderWidth='1px' flex='1' borderRadius='md'>
        <Text fontSize='2xl' fontWeight='bold'>Projects</Text>
        <VStack spacing={4} mt={4}>
          <Text>Project 1: AI-driven Web App</Text>
          <Text>Project 2: Real-time Data Dashboard</Text>
          <Text>Project 3: E-commerce Platform Optimization</Text>
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