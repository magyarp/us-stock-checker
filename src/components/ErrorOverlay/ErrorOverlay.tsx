import { Overlay, useMantineTheme } from "@mantine/core";
import Error from "../Error/Error.tsx";
import useStyles from "./ErrorOverlay.styles.ts";

export type ErrorOverlayProps = {
  title: string;
  message: string;
  retryCallback?: () => void;
}

function ErrorOverlay(props: ErrorOverlayProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { title, message, retryCallback } = props;
  return (
    <Overlay color={theme.colors.red[9]} className={classes.root}>
      <Error
        title={title}
        message={message}
        textColor="#fff"
        retryCallback={retryCallback}
      />
    </Overlay>
  );
}

export default ErrorOverlay;
