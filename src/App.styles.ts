import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import BGImage from './images/bg-image.jpg';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
html{
    height: 100%;
}
body{
    background-image: url(${BGImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >p{
        color: #fff;
    }
    .score{
        color: #fff;
        font-size: 2rem;
    }
    h1{
        font-family: Fascinate Inline, Haettenschweiller, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        --webkit-background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }
    .start, 
    .next {
        cursor: pointer;
        background: linear-gradient(180deg, #ffffff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }
    
    .start {
        max-width: 200px;
    }

`