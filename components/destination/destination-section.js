import Title from "../ui/title";
import Destination from "./destination";
import classes from "./destination-section.module.css";



const DestinationSection = (props) => {
	return (
		<section className={classes.section}>
			<Title title={props.title} />
			<div className={classes.cardContainer}>
				{props.data.map((destination, index) => (
					<Destination key={`${destination.title + index}`} {...destination} />
				))}
			</div>
		</section>
	)
}

export default DestinationSection