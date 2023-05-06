import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  leftPanel: {
    gridArea: "leftPanel",
    display: "grid",
    gridTemplateRows: "auto auto 1fr",
    height: "100%",
    borderRight: "1px solid black",
  },
  rightPanel: {
    gridArea: "rightPanel",
    height: "100%",
    backgroundColor: "pink",
  },
}));
