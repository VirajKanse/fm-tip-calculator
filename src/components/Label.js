import { Text } from "@chakra-ui/react";

const Label = ({ text, color, fontSize, type }) => {
  return type === "result" ? (
    <Text
      fontSize={["2rem", "3rem"]}
      fontWeight="bold"
      alignSelf="center"
      color="tip.500"
    >
      {!text ? "$0.00" : `$${text}`}
    </Text>
  ) : (
    <Text
      fontSize={fontSize}
      fontWeight="700"
      color={
        fontSize === "14px"
          ? "tip.300"
          : color === "white"
          ? "white"
          : color === "tomato"
          ? "tomato"
          : "tip.400"
      }
    >
      {text}
    </Text>
  );
};

export default Label;
