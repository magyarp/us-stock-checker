import { AxiosError } from "axios";
import useStyles from "./App.styles.ts";
import Form from "./components/Form/Form.tsx";
import Graph from "./components/Graph/Graph.tsx";
import Header from "./components/Header/Header.tsx";
import SimilarCompanies from "./components/SimilarCompanies/SimilarCompanies.tsx";
import StockData from "./components/StockData/StockData.tsx";
import { useSupportedStocks } from "./hooks/use-supported-stocks.ts";

function App() {
  const { classes } = useStyles();

  const { data, isLoading, isError, error } = useSupportedStocks();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
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
