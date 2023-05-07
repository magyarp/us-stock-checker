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
  APPLICATION_ERROR_OVERLAY_TITLE,
  LOADING,
  MISSING_OR_INVALID_API_KEY,
} from "./constants/texts.ts";
import useAppStore from "./stores/appStore.ts";
import { useErrorMessage } from "./hooks/use-error-message.ts";
import { useEffect } from "react";

function App() {
  const { classes } = useStyles();
  const [symbol, stocks, setStocks] = useAppStore((state) => [state.symbol, state.stocks, state.setStocks]);

  const {
    data: supportedStocks,
    isLoading,
    isError,
    error,
    refetch,
  } = useSupportedStocks(!stocks);

  const errorMessage = useErrorMessage(error);

  useEffect(() => {
    if(supportedStocks) {
      setStocks(supportedStocks);
    }
  }, [supportedStocks])

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
        title={APPLICATION_ERROR_OVERLAY_TITLE}
        message={errorMessage}
        retryCallback={retryCallback}
      />
    );
  }

  return (
    <>
      <Header />
      <div className={classes.leftPanel}>
        <Form supportedStocks={supportedStocks} />
        {symbol && <StockData />}
        {symbol && <SimilarCompanies />}
      </div>
      <div className={classes.rightPanel}>{symbol && <Graph />}</div>
    </>
  );
}

export default App;
