import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
    --gray: #6c757d;
    --gray-dark: #343a40;
    --success: rgb(110,189,0);
    --info: #17a2b8;
    --light: #f8f9fa;
    --dark: #343a40;
    --light-gray: #eee;
    --primary: #2d677f;
    --black90: rgba(0, 0, 0, 0.9)
    --white: #ffffff;
    --light-gray:#666;
     }

    body {
        background: var(--light);
        -webkit-font-smoothing: antialiased;
    }

    body,input, textarea, button {
        font-family: 'Roboto';
    }   

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    // Bootstrap overrides

    .btn-primary {
        background-color: var(--primary);
        border-color: var(--primary);
    }

    .btn-success {
        background-color: var(--success);
        border-color: var(--success);
    }

    .btn-light {
        background-color: var(--light);
        border-color: var(--light);
    }
    .btn-secondary {
        background-color: var(--gray);
        border-color: var(--gray);
    }

`;
