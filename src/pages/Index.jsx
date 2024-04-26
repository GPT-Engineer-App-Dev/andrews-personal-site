import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';

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
        <Text mt={4}>For inquiries, please contact the historical archives.</Text>
      </Box>
      <Text fontSize="md" mt={6} textAlign="center">
        This page is dedicated to the historical presidency of Andrew Johnson.
      </Text>
    </VStack>
  );
};

export default Index;