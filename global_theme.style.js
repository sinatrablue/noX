// Here comes my global theme's properties
// This code is to be required and enriched by the renderer(s)

import { CSS, px, pct, DynamicCSS } from 'electron-css';
import { darken } from 'electron-css/dist/color';

const MainTheme = DynamicCSS({
    MainColor: 'E1F5FE',
    SecondaryColor: 'CFD8DC',
    EnlightColor: '18FFFF'
})

const RotateAnimation = ElectronCSS.Keyframes({
    '0%' : {
        transform: 'rotate(0deg)'
    },
    '100%' : {
        transform: 'rotate(360deg)'
    }
})
/* Use exemple :
const someStyle = CSS({
    animation: `${rotateAnimation} 5s infinite`
});
*/
const BodyStyle = CSS({
    backgroundColor: MainTheme.MainColor,
})

const ButtonStyle = CSS({
    backgroundColor: MainTheme.SecondaryColor,
    padding: px(5),
    onHover: {
        border: [MainTheme.EnlightColor, 3, 'solid'],
        backgroundColor: darken(MainTheme.SecondaryColor, 0.2),
        color: MainTheme.EnlightColor
    }
})

export {
    BodyStyle,
    ButtonStyle
};