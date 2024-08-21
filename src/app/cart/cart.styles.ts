"use client"
import styled from "styled-components";

export const Wrapper = styled.aside`
  width: 250px;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (min-width: 640px) {
    width: 500px;
    padding: 40px;
  }

  @media screen and (min-width: 1024px) {
  width: 600px;
  padding: 50px;
  }
`;
