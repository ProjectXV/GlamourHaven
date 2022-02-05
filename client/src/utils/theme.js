import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    neutral: {
      900: "",
      800: "",
      700: "",
      600: "#242424",
      500: "#3A3A3A",
      400: "#8B8B8B",
      300: "#BEBEBE",
      200: "#EBEBEB",
      100: "#F9F9F9",
    },
    brand: {
      500: "#39585D",
      400: "#70A7A5",
      300: "#67B6B3",
      200: "#EFF9F8",
      100: "",
    },
  },
  global: {
    "a, button": {
      _focus: {
        outline: "none",
        borderColor: "none",
      },
      _active: {
        outline: "none",
        borderColor: "none",
      },
    },
    svg: {
      color: "#8B8B8B",
    },
  },
});

export { theme };
