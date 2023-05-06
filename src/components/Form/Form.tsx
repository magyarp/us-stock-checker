import { useEffect, useRef } from "react";
import { Stock } from "../../types/Common.ts";
import useStyles from "./Form.styles.ts";
import { ActionIcon, TextInput, useMantineTheme } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import {
  INVALID_STOCK_SYMBOL,
  STOCK_SYMBOL_INPUT_LABEL,
  STOCK_SYMBOL_INPUT_PLACEHOLDER,
} from "../../constants/texts.ts";

type FormProps = {
  supportedStocks: Array<Stock>;
};

function Form(props: FormProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
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
      // TODO: get stock data by symbol
      console.log("Symbol is valid");
    }
  };

  return (
    <div className={classes.root}>
      <TextInput
        label={STOCK_SYMBOL_INPUT_LABEL}
        placeholder={STOCK_SYMBOL_INPUT_PLACEHOLDER}
        ref={symbolInputRef}
        required
        {...form.getInputProps("symbol")}
        rightSection={
          <ActionIcon
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
