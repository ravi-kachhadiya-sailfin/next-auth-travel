import Image from "next/image";
import classes from "./destination.module.css";

const Destination = (props) => {
	console.log("props", props);
	return (
		<div className={classes.card}>
			<div className={classes.imgDiv}>
				<Image src={props.image} alt={props.title} width={300} height={180} priority={true} />
			</div>

			<div className={classes.title}>
				<h2>{props.title}</h2>
			</div>

			<div className={classes.description}>
				<p>{props.description}</p>
			</div>

			{props.images && props.approxTime && props.price &&
				<div className={classes.moreInfo}>
					<div className={classes.imgAndTime}>
						<div className={classes.imagesContainer}>
							{props.images && props.images.map((image, index) => (
								<span className={classes.imgContainer}>
									<Image key={`image ${index}`} src={image} alt={`image ${index}`} width={25} height={15} priority={true} />
								</span>
							))}
						</div>

						<div className={classes.time}>
							<p>{props.approxTime}</p>
						</div>
					</div>

					<p className={classes.price}>
						{`₹${props.price}`}
					</p>
				</div>
			}

		</div>
	)
}

export default Destination