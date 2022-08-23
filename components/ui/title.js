import classes from "./title.module.css";

const Title = ({ title }) => {
    return (
        <h1 className={classes.title}>{title}</h1>
    )
}

export default Title