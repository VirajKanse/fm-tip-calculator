import { Heading } from "@chakra-ui/react";

const Header = ({ text }) => {
  return (
    <Heading fontSize="1.6rem" letterSpacing="0.5rem" lineHeight='normal' color="tip.600">
      {text}
    </Heading>
  );
};

export default Header;
