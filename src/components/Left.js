import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Label from "./Label";
import Tip from "./Tip";

const Left = ({ handleResultCallback, reset, handleResetCallback }) => {
  const [bill, setBill] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");
  const handleTipCallback = (tip) => {
    setTip(tip);
    setCustomTip("");
  };
  useEffect(() => {
    if (reset) {
      setBill("");
      setCustomTip("");
      setPeople("");
      setTip("");
      handleResetCallback(false, 0, 0);
      return;
    }
  }, [reset, handleResetCallback]);
  return (
    <Flex flexDirection="column" w={["100%", "47.5%"]}>
      <Label text="Bill" />
      <InputGroup mt="0.5rem">
        <InputLeftElement
          children={<Image src={`/assets/icon-dollar.svg`} />}
          mt="4px"
          pointerEvents="none"
        />
        <Input
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder={"0"}
          fontSize="24px"
          size="lg"
          color="tip.600"
          fontWeight="bold"
          bgColor="tip.100"
          textAlign="end"
          border="none"
          transition="border-color .2s ease"
          _placeholder={{ color: "tip.300", textAlign: "end" }}
          _focus={{
            border: "2px solid",
            borderColor: bill === "0" || bill === 0 ? "red.300" : "tip.500",
          }}
        />
      </InputGroup>
      <Box mt="2.5rem" mb="2.5rem">
        <Label text="Select Tip %" />
        <SimpleGrid columns={[2, 3]} spacing="1rem" mt="1rem">
          <Tip handleTipCallback={handleTipCallback} reset={tip} />
          <InputGroup>
            <Input
              value={customTip}
              onChange={(e) => setCustomTip(e.target.value)}
              placeholder="Custom"
              fontSize="24px"
              size="lg"
              color="tip.600"
              fontWeight="bold"
              bgColor="tip.100"
              textAlign="end"
              border="none"
              transition="border-color .2s ease"
              _placeholder={{ color: "tip.400", textAlign: "center" }}
              _focus={{
                border: "2px solid",
                borderColor:
                  customTip === "0" || customTip === 0 ? "red.300" : "tip.500",
              }}
            />
          </InputGroup>
        </SimpleGrid>
      </Box>
      <Flex justifyContent="space-between">
        <Label text="Number of People" />
        {(people === 0 || people === "0") && (
          <Label text="Can't be zero" color="tomato" />
        )}
      </Flex>
      <InputGroup mt="0.5rem">
        <InputLeftElement
          children={<Image src={`/assets/icon-person.svg`} />}
          mt="4px"
          pointerEvents="none"
        />
        <Input
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          onKeyPress={(e) =>
            e.key === "Enter" &&
            handleResultCallback(+bill, +tip, +customTip, +people)
          }
          placeholder={"0"}
          fontSize="24px"
          size="lg"
          color="tip.600"
          fontWeight="bold"
          bgColor="tip.100"
          textAlign="end"
          border="none"
          transition="border-color .2s ease"
          _placeholder={{ color: "tip.300", textAlign: "end" }}
          _focus={{
            border: "2px solid",
            borderColor: people === "0" || people === 0 ? "red.300" : "tip.500",
          }}
        />
      </InputGroup>
    </Flex>
  );
};

export default Left;
