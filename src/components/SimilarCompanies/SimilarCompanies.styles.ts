import { createStyles } from "@mantine/core";

type SimilarCompaniesStyleProps = {
  isLoading: boolean;
}

export default createStyles((theme, { isLoading }: SimilarCompaniesStyleProps) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: isLoading ? 'center' : 'normal',
    paddingTop: '2rem',

    ['@media (max-width: 768px)']: {
      fontSize: theme.fontSizes.sm,
      paddingTop: '1rem',
    },
  },
  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: "bold",

    ['@media (max-width: 768px)']: {
      fontSize: theme.fontSizes.sm,
    },
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

    ['@media (max-width: 768px)']: {
      fontSize: theme.fontSizes.sm,
    },
  },
}));
