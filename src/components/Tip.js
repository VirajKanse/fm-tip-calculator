import { Button } from "@chakra-ui/react";
import { useState } from "react";

const Tip = ({ handleTipCallback, reset }) => {
  const [currentTip, setCurrentTip] = useState("");
  const tips = [5, 10, 15, 25, 50];
  return tips.map((tip, index) => (
    <Button
      key={index}
      onClick={(e) => {
        handleTipCallback(tip);
        setCurrentTip(tip);
      }}
      variant="unstyled"
      fontSize="24px"
      color={currentTip === tip && reset ? "tip.600" : "tip.100"}
      bgColor={currentTip === tip && reset ? "tip.500" : "tip.600"}
      h="3rem"
      cursor={["", "pointer"]}
      transition="all .3s ease"
      _hover={{ color: "tip.600", bgColor: "tip.450" }}
      _focus={{ color: "tip.600", bgColor: "tip.500" }}
    >
      {tip}%
    </Button>
  ));
};

export default Tip;
