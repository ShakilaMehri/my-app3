"use client"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    list-style: none;
    text-decoration: none;
    
    font-family: 'Roboto', sans-serif;

    color: var(--primary-font-color);
  }

  button {
    background: none;
		cursor: pointer;
    border: none;
  }

  :root {
    --primary-color: #777e5c;
    --third-color: #777e5c;

    --primary-background: #0D0E12;
    --second-background: #343a40;


    --shadow-black-color: rgba(0, 0, 0, 0.7);

  }

  body, html, #root {
    width: 100%;
    height: 100%;
    position: relative;

  }
  `;

