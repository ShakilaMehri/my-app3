import styled, {keyframes} from "styled-components";


const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 10px 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 25px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: #f0f0f0;
  color: #333;
  font-size: 14px;
  cursor: pointer;

  ::placeholder {
    color: #888;
    padding-left: 5px;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 15%;
  right: 1px;
  transform: translateY(-50%);
  color: #888;
  cursor: pointer;

  &:hover {
    svg {
      path {
        color: var(--third-color);
      }
    }
  }
`;

export const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  svg {
    width: 24px;  
    height: 24px;
  }

  .cart-badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #777e5c;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    width: auto;
    height: auto;
  }
`;

export const ClosedSideBar = styled.header`
  max-width: 60px;
  width: 100%;
  height: 100%;
  border-radius: 0 12px 12px 0;
  background: var(--second-background);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;


  svg {
    color: #f9f9f9;
  }

  ul li {
    cursor: pointer;
  }

  /* Links */
  nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
	  margin-top: 20px;

    nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

    nav ul li {
    margin: 10px 0;
    }

    nav ul li svg {
    width: 24px;
    height: 24px;    
    }

    > button {
      width: 100%;
      padding: 18px;

      &:hover {
        svg {
          path {
            color: var(--third-color);
          }
        }
      }
    }

    > button svg {
      width: 24px;
      height: 24px;
      color: #c4c4c4;
    }

    ul {
      margin-top: 64px;
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;

      a {
        width: 100%;
        padding: 16px 0;
        border-radius: 8px 0 0 8px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: background 0.3s;

        &:hover {
          background: var(--primary-background);

          svg {
            path {
              color: var(--third-color);
            }
          }
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  /* Icones  */
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    ul {
      margin-bottom: 16px;
      text-align: center;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      button {
        padding: 16px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        transition: color 0.3s;
        &:hover {
          svg path {
            color: var(--third-color);
          }
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    span {
      padding: 16px 0;
      text-align: center;
      border-radius: 8px 8px 0 0;

      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--third-color);
      width: 100%;
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
  }
`;

export const OpenSideBar = styled.header`
  height: 100%;
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  padding: 1rem;
  background: var(--shadow-black-color);
  display: flex;
  align-items: center;

      @media (max-width: 768px) {
    max-width: 200px; 
  }

  @media (max-width: 480px) {
    max-width: 160px;
  }

  svg {
    color: #f9f9f9;
  }

  section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    max-width: 240px;
    height: 100%;

    background: var(--second-background);
    border-radius: 0 12px 12px 0;

    ul li {
      cursor: pointer;
    }

    /* Links  */
    nav {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-top: 35px;

      > span {
        width: 100%;
        display: flex;
        align-items: flex-start;

        button {
          cursor: pointer;
          padding: 10px;

          &:hover {
            svg path {
              color: var(--third-color);
            }
          }

          svg {
            width: 24px;
            height: 24px;

            color: #c4c4c4;
          }
        }
      }

      div {
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 24px;
        flex-direction: row;
        gap: 16px;

        h1 {
          color: #fff;
          font-size: 14px;

          animation: ${appearFromRight} 0.4s;
        }
      }

      ul {
        margin-top: 10px;
        width: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;

        a {
          color: #c4c4c4;
          padding: 16px 20px;
          border-radius: 8px 0 0 8px;

          display: flex;
          align-items: center;
          gap: 16px;

          transition: background 0.3s;
          &:hover {
            background: var(--shadow-black-color);

            svg path {
              color: var(--third-color);
            }
          }
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    /* Icones */
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;

      ul {
        margin-bottom: 16px;
        text-align: left;
        width: 100%;
        display: flex;
        flex-direction: column;

        button {
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background 0.3s;
          &:hover {
            background: var(--shadow-black-color);
            svg path {
              color: var(--third-color);
            }
          }
          svg {
            width: 20px;
            height: 20px;
          }
        }
      }

      span {
        padding: 16px 0;
        border-radius: 8px 8px 0 0;

        background: var(--third-color);
        width: 100%;

        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
  }
  aside {
    width: 100%;
    height: 100%;
  }
`;
