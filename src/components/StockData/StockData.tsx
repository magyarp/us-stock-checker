import { Loader, Text } from "@mantine/core";
import useAppStore from "../../stores/appStore.ts";
import { useStockData } from "../../hooks/use-stock-data.ts";
import {
  MISSING_OR_INVALID_API_KEY,
  PREVIOUS_CLOSE,
  STOCK_DATA_ERROR_TITLE,
  TODAYS_HIGH,
  TODAYS_LOW,
  TODAYS_OPEN,
} from "../../constants/texts.ts";
import { useErrorMessage } from "../../hooks/use-error-message.ts";
import Error from "../Error/Error.tsx";
import useStyles from "./StockData.styles.ts";

function StockData() {
  const { classes } = useStyles();
  const [symbol, stocks] = useAppStore((state) => [state.symbol, state.stocks]);
  const { data, isLoading, isError, error, refetch } = useStockData(symbol);
  const errorMessage = useErrorMessage(error);

  if (isLoading) {
    return (
      <div className={classes.rootLoading}>
        <Loader variant="dots" size="xl" />
      </div>
    );
  }
  if (isError) {
    const retryCallback =
      errorMessage !== MISSING_OR_INVALID_API_KEY ? refetch : undefined;
    return (
      <Error
        title={STOCK_DATA_ERROR_TITLE}
        message={errorMessage}
        textColor="black"
        retryCallback={retryCallback}
      />
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.leftColumn}>
        <Text className={classes.leftColumnSymbol}>{symbol}</Text>
        <Text className={classes.leftColumnCompany}>
          {stocks?.find((stock) => stock.symbol === symbol)?.description}
        </Text>
        <Text className={classes.leftColumnCurrentPrice}>{data.c}</Text>
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.rightColumnLabelValueWrapper}>
          <Text className={classes.rightColumnLabel}>{PREVIOUS_CLOSE}:</Text>
          <Text className={classes.rightColumnValue}>{data.pc}</Text>
        </div>
        <div className={classes.rightColumnLabelValueWrapper}>
          <Text className={classes.rightColumnLabel}>{TODAYS_OPEN}:</Text>
          <Text className={classes.rightColumnValue}>{data.o}</Text>
        </div>
        <div className={classes.rightColumnLabelValueWrapper}>
          <Text className={classes.rightColumnLabel}>{TODAYS_HIGH}:</Text>
          <Text className={classes.rightColumnValue}>{data.h}</Text>
        </div>
        <div className={classes.rightColumnLabelValueWrapper}>
          <Text className={classes.rightColumnLabel}>{TODAYS_LOW}:</Text>
          <Text className={classes.rightColumnValue}>{data.l}</Text>
        </div>
      </div>
    </div>
  );
}

export default StockData;
