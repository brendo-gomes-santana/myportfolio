import { createContext, useState } from "react";
import { ThemeProvider } from 'styled-components';

import { tema } from "./styled";

export const BaseContext = createContext({});

export default function BaseProvider({ children }) {

    const [color, setColor] = useState(tema.dark);


    return (
        <BaseContext.Provider value={{  }}>
            <ThemeProvider theme={color}>
                {children}
            </ThemeProvider>
        </BaseContext.Provider>
    )
}