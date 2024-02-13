import {BrowserRouter} from "react-router-dom";
import {render} from "react-dom";

import './styles/index.scss'
import App from "@src/app/App";

import {ThemeProvider} from "@src/shared/themeProvider";

render(
    <ThemeProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById("root")
);
