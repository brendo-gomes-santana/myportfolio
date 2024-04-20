import { createContext, useState } from "react";
import { ThemeProvider } from 'styled-components';

import { tema } from "./styled";

export const BaseContext = createContext({});

export default function BaseProvider({ children }) {

    const [color, setColor] = useState(true);

    function ChangeColor(){
        setColor(!color)
    }
 
    return (
        <BaseContext.Provider value={{ 
            ChangeColor,
            color
         }}>
            <ThemeProvider theme={color ? tema.light : tema.dark}>
                {children}
            </ThemeProvider>
        </BaseContext.Provider>
    )
}