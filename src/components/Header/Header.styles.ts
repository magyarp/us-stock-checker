import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  root: {
    gridArea: "header",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: theme.colors.blue[7],
    color: theme.white,
    fontSize: "2rem",
  },
}));
