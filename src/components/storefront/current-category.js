import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  centerBody: {
    marginTop: 30,
    width: "fit-content",
    margin: "auto",
    textAlign: "center",
  },
  centerTitle: {
    fontSize: 60,
    fontFamily: "Roboto",
    textTransform: "uppercase",
  },
  centerText: {
    fontSize: 30,
    color: "#757575",
  },
}));


const activeCategory = props => {
  const classes = UseStyles();

  return (
    
    <article className={classes.centerBody}>
      <div className={classes.centerTitle}>{props.category.displayName}</div>
      <div className={classes.centerText}>{props.category.description}</div>
    </article>
  )
}

export default activeCategory; 