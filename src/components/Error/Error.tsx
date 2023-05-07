import { Button, MantineColor, Stack, Text } from "@mantine/core";
import { RETRY } from "../../constants/texts";
import useStyles from "./Error.styles.ts";
import { ErrorOverlayProps } from "../ErrorOverlay/ErrorOverlay.tsx";

export type ErrorProps = ErrorOverlayProps & {
  textColor: MantineColor;
};

function Error(props: ErrorProps) {
  const { classes } = useStyles();

  const { title, message, textColor, retryCallback } = props;
  return (
    <Stack className={classes.root}>
      <Text align="center" color={textColor} size="xl">
        {title}
      </Text>
      <Text align="center" color={textColor} size="sm">
        {message}
      </Text>
      {retryCallback && (
        <Button onClick={() => retryCallback()}>{RETRY}</Button>
      )}
    </Stack>
  );
}

export default Error;
