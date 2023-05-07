import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: '1rem',
    paddingTop: '2rem',
  },
  rootLoading: {
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      paddingTop: '2rem',
      paddingBottom: '2rem',
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
  },
  leftColumnSymbol: {
    fontSize: theme.fontSizes.xl,
    fontWeight: "bold",
  },
  leftColumnCompany: {
    fontSize: '2rem',
    fontWeight: "bold",
  },
  leftColumnCurrentPrice: {
    fontSize: '2rem',
    fontWeight: "bold",
    color: theme.colors.green[9]
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'flex-end'
  },
  rightColumnLabelValueWrapper: {
    display: 'grid',
    gridTemplateColumns: "1fr 2fr",
  },
  rightColumnLabel: {
    fontWeight: 'bold',
  },
  rightColumnValue: {
    textAlign: 'left',
    color: theme.colors.green[9],
    fontWeight: 'bold',
  }
}));
