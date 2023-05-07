import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  leftPanel: {
    gridArea: "leftPanel",
    display: "grid",
    gridTemplateRows: "auto auto 1fr",
    height: "100%",
    padding: "2rem",
    borderRight: `2px solid ${theme.colors.gray[5]}`,
  },
  rightPanel: {
    gridArea: "rightPanel",
    height: "100%",
    padding: "2rem",
  },
}));
