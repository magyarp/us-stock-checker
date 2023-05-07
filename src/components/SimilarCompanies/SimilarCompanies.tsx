import { Loader, Text } from "@mantine/core";
import { useCompanyPeers } from "../../hooks/use-company-peers.ts";
import useStyles from "./SimilarCompanies.styles.ts";
import useAppStore from "../../stores/appStore.ts";
import {
  MISSING_OR_INVALID_API_KEY,
  SIMILAR_COMPANIES,
  SIMILAR_COMPANIES_ERROR_TITLE,
} from "../../constants/texts.ts";
import { useErrorMessage } from "../../hooks/use-error-message.ts";
import Error from "../Error/Error.tsx";

function SimilarCompanies() {
  const symbol = useAppStore((state) => state.symbol);
  const { data, isLoading, isError, error, refetch } = useCompanyPeers(symbol);
  const { classes } = useStyles({ isLoading });

  const errorMessage = useErrorMessage(error);

  if (isLoading) {
    return (
      <div className={classes.root}>
        <Loader variant="dots" size="xl" />
      </div>
    );
  }
  if (isError) {
    const retryCallback =
      errorMessage !== MISSING_OR_INVALID_API_KEY ? refetch : undefined;
    return (
      <Error
        title={SIMILAR_COMPANIES_ERROR_TITLE}
        message={errorMessage}
        textColor="black"
        retryCallback={retryCallback}
      />
    );
  }

  return (
    <div className={classes.root}>
      <Text className={classes.title}>{SIMILAR_COMPANIES}</Text>
      <ul className={classes.list}>
        {data?.map((company) => (
          <li key={`peer_company_${company}`} className={classes.listItem}>
            {company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimilarCompanies;
