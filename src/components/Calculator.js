import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Left from "./Left";
import Right from "./Right";

const Calculator = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [reset, setReset] = useState(false);
  const handleResultCallback = (bill, tip, customTip, people) => {
    if (bill && people && (customTip || tip)) {
      const _tipAmount = ((bill / 100) * (customTip || tip)) / people;
      const _totalAmount = (bill + (_tipAmount || tip) * people) / people;
      setTipAmount(_tipAmount.toFixed(2));
      setTotalAmount(_totalAmount.toFixed(2));
    } else {
      setTipAmount(0);
      setTotalAmount(0);
    }
  };
  const handleResetCallback = (bool) => setReset(bool);
  const handleResetCallback2 = (bool, a, b) => {
    setReset(bool);
    setTipAmount(a);
    setTotalAmount(b);
  };

  return (
    <Flex
      w={["95%", "65%"]}
      p={["1.5rem", "2rem"]}
      mt={["3rem", "5rem"]}
      mb={["3rem", ""]}
      flexDirection={["column", "row"]}
      justifyContent="space-between"
      rounded="3xl"
      bgColor="white"
    >
      <Left
        handleResultCallback={handleResultCallback}
        reset={reset}
        handleResetCallback={handleResetCallback2}
        reset2={tipAmount && totalAmount ? true : false}
      />
      <Right
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        handleResetCallback={handleResetCallback}
        reset={tipAmount && totalAmount ? true : false}
      />
    </Flex>
  );
};

export default Calculator;
