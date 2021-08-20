import { Box, Flex, Image } from "@chakra-ui/react";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Flex justifyContent="center" align="center">
      <Box
        w={["400px", "1440px"]}
        h={["auto","100vh"]}
        d="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgColor="tip.200"
      >
        <Box mt={["3rem", ""]}>
          <Image src={`/assets/logo.svg`} />
        </Box>
        <Calculator />
      </Box>
    </Flex>
  );
}

export default App;
