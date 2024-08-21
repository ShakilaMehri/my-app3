import styled from "styled-components";
import { Button } from "@chakra-ui/react";

export const Wrapper = styled.div`
  @media screen and (min-width: 640px) {
    margin: 40px;
  }
`;

export const StyledButton = styled(Button)`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  background: hsla(0, 100%, 100%, 0.8);
  transition: background 200ms ease-in-out;

  &:hover {
    background: #fff;
  }
`;