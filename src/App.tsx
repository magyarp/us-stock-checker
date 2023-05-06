import useStyles from "./App.styles.ts";
import Form from "./components/Form/Form.tsx";
import Graph from "./components/Graph/Graph.tsx";
import Header from "./components/Header/Header.tsx";
import SimilarCompanies from "./components/SimilarCompanies/SimilarCompanies.tsx";
import StockData from "./components/StockData/StockData.tsx";

function App() {
  const { classes } = useStyles();
  return (
    <>
      <Header />
      <div className={classes.leftPanel}>
        <Form />
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
