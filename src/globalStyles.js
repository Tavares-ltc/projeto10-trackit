import {createGlobalStyle} from 'styled-components';
import "@fontsource/lexend-deca";

const GlobalStyle = createGlobalStyle`
@media screen and (min-width: 690px) {
    body {
        width: 375px;
        font-family: "Lexend Deca";
    }
    
}
`

export default GlobalStyle