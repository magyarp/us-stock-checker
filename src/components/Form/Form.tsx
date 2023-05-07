import { useEffect, useRef } from "react";
import { Stock } from "../../types/Common.ts";
import useStyles from "./Form.styles.ts";
import { ActionIcon, TextInput, useMantineTheme } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import {
  INVALID_STOCK_SYMBOL,
  STOCK_DATA_QUERY_BUTTON_LABEL,
  STOCK_SYMBOL_INPUT_LABEL,
  STOCK_SYMBOL_INPUT_PLACEHOLDER,
} from "../../constants/texts.ts";
import useAppStore from "../../stores/appStore.ts";

type FormProps = {
  supportedStocks: Array<Stock>;
};

function Form(props: FormProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const setSymbol = useAppStore((state) => state.setSymbol);
  const { supportedStocks } = props;

  const symbolInputRef = useRef<HTMLInputElement>(null);

  const form = useForm({
    initialValues: {
      symbol: "",
    },
    validate: {
      symbol: (value) =>
        supportedStocks.find((stock) => stock.symbol === value) !== undefined
          ? null
          : INVALID_STOCK_SYMBOL,
    },
  });

  useEffect(() => {
    symbolInputRef.current?.focus();
  }, []);

  const handleGetStockData = () => {
    const validationResult = form.validate();
    if (!validationResult.hasErrors) {
      setSymbol(form.values.symbol);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleGetStockData();
    }
  };

  return (
    <div className={classes.root}>
      <TextInput
        label={STOCK_SYMBOL_INPUT_LABEL}
        placeholder={STOCK_SYMBOL_INPUT_PLACEHOLDER}
        ref={symbolInputRef}
        onKeyDown={(event) => handleKeyDown(event)}
        required
        {...form.getInputProps("symbol")}
        style={{ width: '100%'}}
        rightSection={
          <ActionIcon
            aria-label={STOCK_DATA_QUERY_BUTTON_LABEL}
            onClick={handleGetStockData}
            variant="filled"
            color={theme.primaryColor}
            disabled={form.values.symbol === ""}
          >
            <IconArrowRight />
          </ActionIcon>
        }
      />
    </div>
  );
}

export default Form;
