import { Button, Flex, Stack } from "@chakra-ui/react";
import Label from "./Label";

const Right = ({ tipAmount, totalAmount, handleResetCallback, reset }) => {
  return (
    <Flex
      flexDirection="column"
      w={["100%", "47.5%"]}
      p="2.5rem"
      pt={["2rem", "3rem"]}
      mt={["2.5rem", "0"]}
      bgColor="tip.600"
      rounded="2xl"
    >
      <Flex>
        <Flex flexDirection="column" w="100%" as={Stack} spacing="1.5rem">
          <Flex justifyContent="space-between">
            <Flex flexDirection="column" alignSelf="center">
              <Label text="Tip Amount" color="white" />
              <Label text="/ person" color="white" fontSize="14px" />
            </Flex>
            <Label text={tipAmount} color="white" type="result" />
          </Flex>
          <Flex justifyContent="space-between">
            <Flex flexDirection="column" alignSelf="center">
              <Label text="Total" color="white" />
              <Label text="/ person" color="white" fontSize="14px" />
            </Flex>
            <Label text={totalAmount} color="white" type="result" />
          </Flex>
        </Flex>
        <Flex
          as={Stack}
          ml="auto"
          flexDirection="column"
          spacing="3.5rem"
        ></Flex>
      </Flex>
      <Button
        onClick={() => handleResetCallback(true)}
        variant="unstyled"
        mt={["3rem", "auto"]}
        size="lg"
        fontSize="24px"
        color="tip.600"
        bgColor={reset ? "tip.500" : "tip.300"}
        transition="background-color .3s ease"
        _hover={reset && { bgColor: "tip.450" }}
        _focus={reset && { bgColor: reset ? "tip.300" : "tip.500" }}
      >
        RESET
      </Button>
    </Flex>
  );
};

export default Right;
