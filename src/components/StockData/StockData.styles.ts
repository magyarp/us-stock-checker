import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "1rem",
    paddingTop: "2rem",

    ["@media (max-width: 768px)"]: {
      gridTemplateColumns: "1fr",
      paddingTop: "1rem",
    },
  },
  rootLoading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
  },
  leftColumnSymbol: {
    fontSize: theme.fontSizes.xl,
    fontWeight: "bold",

    ["@media (max-width: 768px)"]: {
      fontSize: theme.fontSizes.sm,
    },
  },
  leftColumnCompany: {
    fontSize: "2rem",
    fontWeight: "bold",

    ["@media (max-width: 768px)"]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  leftColumnCurrentPrice: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.colors.green[9],

    ["@media (max-width: 768px)"]: {
      fontSize: theme.fontSizes.lg,
      paddingBottom: "1rem",
    },
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  rightColumnLabelValueWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
  },
  rightColumnLabel: {
    fontWeight: "bold",

    ["@media (max-width: 768px)"]: {
      fontSize: theme.fontSizes.xs,
    },
  },
  rightColumnValue: {
    textAlign: "left",
    color: theme.colors.green[9],
    fontWeight: "bold",

    ["@media (max-width: 768px)"]: {
      fontSize: theme.fontSizes.xs,
    },
  },
}));
