//import { CSS, px, pct, DynamicCSS } from 'electron-css';
//import { darken } from 'electron-css/dist/color';
import React from 'react';
//import { BodyStyle, ButtonStyle} from './global_theme.style.js';

function renderBody() {
    return <div
        style="position: relative;
        margin: -20px -50px;
        top: 50%;
        left: 50%;">
            <button id="login-btn" /*className='{ButtonStyle}'*/>Enter the app</button>
        </div>
}
ReactDOM.render(
    <renderBody />,
    document.body
);

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
    window.noxLogin.loginOk()
})
