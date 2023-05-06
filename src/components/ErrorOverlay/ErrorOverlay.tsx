import { Button, Overlay, Stack, Text, useMantineTheme } from "@mantine/core";
import { RETRY } from "../../constants/texts";
import useStyles from "./ErrorOverlay.styles.ts";

type ErrorOverlayProps = {
  title: string;
  message: string;
  retryCallback?: () => void;
};

function ErrorOverlay(props: ErrorOverlayProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { title, message, retryCallback } = props;
  return (
    <Overlay color={theme.colors.red[9]} className={classes.root}>
      <Stack align="center">
        <Text align="center" color="#fff" size="xl">
          {title}
        </Text>
        <Text align="center" color="#fff" size="sm">
          {message}
        </Text>
        {retryCallback && (
          <Button onClick={() => retryCallback()}>{RETRY}</Button>
        )}
      </Stack>
    </Overlay>
  );
}

export default ErrorOverlay;
