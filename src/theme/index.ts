import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import Button from "./components/Button"
import Heading from "./components/Heading"

const config: ThemeConfig = {
    initialColorMode:"dark",
    useSystemColorMode: true,
    
}

const theme = extendTheme({
  styles: {
    fonts: {
      heading: "CeraProBold",
      body: "CeraProRegular",
  },
    global: {
      'html, body': {
        color: 'gray.600',
        lineHeight: 'tall',
        backgroundColor:"#F7F8FA",
        overflowX: 'hidden',
        padding:0,
        margin:0
      },
      a: {
        color: 'teal.500',
      },
    },
  },
    config,
    components: {
      Button,
      Heading
    },
    colors: {
      pri:"#0070f3",
      brand: {
        primary: "#3836CD",
        greyPrimary: "red",
        greySecondary: "#42414d",
      },
    },
    breakpoints: {
        "sm": "320px",
        "md": "768px",
        "lg": "960px",
        "xl": "1200px",
        "2xl": "1536px"
      },
      
    });

    
    export default theme;