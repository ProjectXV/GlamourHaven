import { extendTheme } from "@chakra-ui/react";

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
    _focus: {
      outline: "none",
    },
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "none",
      borderColor: "none",
      color: "purple.500",
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

const theme = extendTheme({
  components: {
    Button,
  },
  styles: {
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
  },
});

export { theme };
