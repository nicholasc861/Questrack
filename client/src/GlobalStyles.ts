import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

    body {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        margin: 0px;
        width: 100%;
        height: 100vh;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;
