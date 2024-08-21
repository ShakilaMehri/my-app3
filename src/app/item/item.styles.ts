import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border : 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  height: 100%

  img {
    max-height: 250px;
    object-fit: cover;
    max-width: 100%;
    border-radius: 8px 8px 0 0;
  }

  & > div {
    padding: 0 10px;

    @media screen and (min-width: 640px) {
      padding: 0;
    }
  }

  button {
    width: 100%;
  }
`;