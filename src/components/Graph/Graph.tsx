import { Loader } from "@mantine/core";
import sub from "date-fns/sub";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";
import { format } from "date-fns";
import {
  ReactECharts,
  ReactEChartsProps,
} from "../ReactEcharts/ReactEcharts.tsx";
import useAppStore from "../../stores/appStore.ts";
import { useErrorMessage } from "../../hooks/use-error-message.ts";
import { useHistoricalStockPrice } from "../../hooks/use-historical-stock-price.ts";
import {
  HISTORICAL_STOCK_PRICE_GRAPH_ERROR_TITLE,
  MISSING_OR_INVALID_API_KEY,
} from "../../constants/texts.ts";
import Error from "../Error/Error.tsx";
import useStyles from "./Graph.styles.ts";

function Graph() {
  const { classes } = useStyles();
  const currentDate = new Date();
  const symbol = useAppStore((state) => state.symbol);
  const { data, isLoading, isError, error, refetch } = useHistoricalStockPrice(
    symbol,
    "D",
    getUnixTime(sub(currentDate, { years: 1 })),
    getUnixTime(currentDate)
  );
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
        title={HISTORICAL_STOCK_PRICE_GRAPH_ERROR_TITLE}
        message={errorMessage}
        textColor="black"
        retryCallback={retryCallback}
      />
    );
  }

  const option: ReactEChartsProps["option"] = {
    title: {
      text: `Daily closing ${symbol} stock prices over the last year`,
    },
    xAxis: {
      type: "category",
      data: data.t.map((t) => format(fromUnixTime(t), "dd-MM-yyyy")),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.c,
        type: "line",
        label: {
          show: true,
        },
      },
    ],
    dataZoom: {
      type: "slider",
    },
  };

  return (
    <div className={classes.root}>
      <ReactECharts option={option} />
    </div>
  );
}

export default Graph;
