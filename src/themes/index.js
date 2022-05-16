import { createTheme } from "@mui/material/styles";

function createShadow(...px) {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${px[4]})`,
  ].join(",");
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#23a3f4",
    },
    secondary: {
      main: "#333333",
    },
    text: {
      primary: "#888888",
      secondary: "#23a3f4",
    },
  },
  shadows: [
    "none",
    createShadow(0, 3, 3, 2, 0.1),
    createShadow(0, 3, 3, 2, 0.2),
    createShadow(0, 3, 3, 2, 0.2),
    createShadow(0, 3, 3, 2, 0.2),
    createShadow(0, 3, 3, 2, 0.2),
    createShadow(0, 3, 3, 2, 0.2),
    createShadow(0, 3, 3, 2, 0.2),
    createShadow(0, 3, 3, 2, 0.2),
    createShadow(0, 3, 3, 2, 0.2),
    createShadow(0, 3, 3, 2, 0.2),
  ],
});

export default theme;
