import styled from "styled-components";

export const Screen = styled.div`
background-color: #4831D4;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
`;

export const Head = styled.div`
background-color: #4831D4;
height: 50px;
display: flex;
flex-direction: row;
padding: 25px;
align-items: center;
justify-content: space-between;
border-bottom: 2px solid;
@media (max-width: 600px) {
    flex-direction: column;
    height: 130px;
    justify-content: center;
}
`;

export const ConnectBTN = styled.button`
 padding: 17px 40px;
 border-radius: 50px;
 border: 0;
 background-color: white;
 box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
 letter-spacing: 1.5px;
 text-transform: uppercase;
 font-size: 15px;
 transition: all .5s ease;
 :active {
 letter-spacing: 3px;
 background-color: hsl(261deg 80% 48%);
 color: hsl(0, 0%, 100%);
 box-shadow: #f39805;
 transform: translateY(10px);
 transition: 100ms;
 }
 :hover {
    letter-spacing: 3px;
 background-color: #67ed37;
 color: hsl(0, 0%, 100%);
 box-shadow: #f39805;
 }
`;

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 30px;
grid-row-gap: 30px;
padding: 40px;
@media (max-width: 800px) {
grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(1, 1fr);
}
`;

export const BoxWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    padding: 30px;
    width: 200px;
background: rgba(255, 255, 255, 0.36);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.2px);
-webkit-backdrop-filter: blur(5.2px);
`;

export const HText = styled.h2`
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    color: #070607;
`;

export const PText = styled.p`
    font-size: 1rem;
    text-align: center;
    color: white;
`;

export const LINK = styled.a`
cursor: pointer;
text-decoration: none;
:hover {
    transform: translateY(-10px);
transition: transform 0.2s ;
}
`;
