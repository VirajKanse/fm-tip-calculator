import { Box, Flex } from "@chakra-ui/react";
import Calculator from "./components/Calculator";
import Header from "./components/Header";

function App() {
  return (
    <Flex justifyContent="center" align="center">
      <Box
        w="1440px"
        h="100vh"
        d="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgColor="tip.200"
      >
        <Box>
          <Header text="SPLI" />
          <Header text="TTER" />
        </Box>
        <Calculator />
      </Box>
    </Flex>
  );
}

export default App;
