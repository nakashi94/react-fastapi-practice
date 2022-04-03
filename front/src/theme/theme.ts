import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'gray.800',
            },
            button: {
                bg: 'blue.400',
                color: 'white',
                borderRadius: 'md',
                padding: "3",
                margin: "4",
            }
        }
    }
})
