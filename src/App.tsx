import { HttpStatusCode } from "axios";
import useStyles from "./App.styles.ts";
import Form from "./components/Form/Form.tsx";
import Graph from "./components/Graph/Graph.tsx";
import Header from "./components/Header/Header.tsx";
import SimilarCompanies from "./components/SimilarCompanies/SimilarCompanies.tsx";
import StockData from "./components/StockData/StockData.tsx";
import { useSupportedStocks } from "./hooks/use-supported-stocks.ts";
import { Loader, LoadingOverlay, Stack, Text } from "@mantine/core";
import ErrorOverlay from "./components/ErrorOverlay/ErrorOverlay.tsx";
import {
  ERROR_OVERLAY_TITLE,
  LOADING,
  MISSING_OR_INVALID_API_KEY,
  NETWORK_ERROR_TRY_LATER,
  UNKNOWN_ERROR_TRY_AGAIN,
} from "./constants/texts.ts";
import { useMemo } from "react";

function App() {
  const { classes } = useStyles();

  const { data, isLoading, isError, error, refetch } = useSupportedStocks();

  const errorMessage = useMemo(() => {
    if (error && !error.response) {
      return NETWORK_ERROR_TRY_LATER;
    }
    if (error && error.response?.status === HttpStatusCode.Unauthorized) {
      return MISSING_OR_INVALID_API_KEY;
    }
    return UNKNOWN_ERROR_TRY_AGAIN;
  }, [error]);

  if (isLoading) {
    return (
      <LoadingOverlay
        visible
        loader={
          <Stack align="center">
            <Loader size="xl" variant="dots" />
            <Text size="xl">{LOADING}</Text>
          </Stack>
        }
      />
    );
  }

  if (isError) {
    const retryCallback =
      errorMessage !== MISSING_OR_INVALID_API_KEY ? refetch : undefined;
    return (
      <ErrorOverlay
        title={ERROR_OVERLAY_TITLE}
        message={errorMessage}
        retryCallback={retryCallback}
      />
    );
  }

  return (
    <>
      <Header />
      <div className={classes.leftPanel}>
        <Form supportedStocks={data} />
        <StockData />
        <SimilarCompanies />
      </div>
      <div className={classes.rightPanel}>
        <Graph />
      </div>
    </>
  );
}

export default App;
