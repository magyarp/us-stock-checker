import useStyles from "./Graph.styles.ts";

function Graph() {
  const { classes } = useStyles();
  return <div className={classes.root}>Graph</div>;
}

export default Graph;
