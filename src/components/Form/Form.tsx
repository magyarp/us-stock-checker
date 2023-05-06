import useStyles from "./Form.styles.ts";

function Form() {
  const { classes } = useStyles();
  return <div className={classes.root}>Form</div>;
}

export default Form;
