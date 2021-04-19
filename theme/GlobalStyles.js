import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        font-size: 16px;
        box-sizing:border-box;
    }
    *, *::before, *::after {
        padding:0;
        margin:0;
        box-sizing:inherit;
        font-family: ${props => props.theme.fontFamily.primary};
        color:${props => props.theme.colors.blackText};
    }
    body {
        font-size:1rem;
        line-height:1.5;
        background-color: ${props => props.theme.colors.bgGray};
    }
    .overflow-y{
        overflow-y:scroll;
    }
    .overflow-x{
        overflow-x:scroll;
    }
    .container{
        max-width:2560px;
        width:90%;
        margin:0 auto;
    }
`;