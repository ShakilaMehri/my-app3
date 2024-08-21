"use client"
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;

  .content {
    flex: 2;
    padding-right: 10px;
  }

  h3 {
    margin: 0;
    font-size: 1.1rem
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
    align-item: center;
  }

  .image {
    flex: 1;
    margin-left: 20px;

    img {
      max-width: 100%;
      object-fit: cover;
      border-radius: 4px;
      transition: transform 0.3s ease;
    }

    img: hover {
    transform: scale(1.05);
    }
  }

  @media screen and (max-width: 768px) {
  flex-direction: column;
  align-items: center;

  .content {
  padding-right: 0;
  text-align: center;
  }
  .image {
  margin: 15px 0 0 0;
  }
  }
`;
