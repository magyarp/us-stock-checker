import { createStyles } from "@mantine/core";

type SimilarCompaniesStyleProps = {
  isLoading: boolean;
}

export default createStyles((theme, { isLoading }: SimilarCompaniesStyleProps) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: isLoading ? 'center' : 'normal'
  },
  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: "bold",
  },
  list: {
    display: "flex",
    columnGap: "1rem",
    flexWrap: "wrap",
    listStyleType: "none",
    paddingTop: "1rem",
  },
  listItem: {
    color: theme.colors.blue[9],
    fontWeight: "bold",
    fontSize: theme.fontSizes.xl,
  },
}));
