import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Ville de Nancy - Place Stanislas</Text>
        <Image src="https://images.unsplash.com/photo-1598065412434-6544dc76f81f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxWaWxsZSUyMGRlJTIwTmFuY3klMjBwbGFjZSUyMFN0YW5pc2xhcyUyMHR3aXR0ZXJ8ZW58MHx8fHwxNzE4MTg4MzcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Ville de Nancy - Place Stanislas" />
      </VStack>
    </Container>
  );
};

export default Index;
