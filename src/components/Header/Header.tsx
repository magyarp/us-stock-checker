import { HEADER_TEXT } from "../../constants/texts.ts";
import useStyles from "./Header.styles.ts";

function Header() {
  const { classes } = useStyles();

  return <div className={classes.root}>{HEADER_TEXT}</div>;
}

export default Header;
