import Image from "next/image";
import classes from "./landing-page.module.css";
const LandingPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.handing}>
        <h1 className={classes.title}>Explore<br />Dream Destination</h1>
        <p className={classes.description}>Offering comprehensive travel solutions to individuals and groups.</p>
      </div>
      {/* <Image src={"/assets/home/nature-mountain.jpg"} width="100%" height="100vh" layout="responsive" /> */}
    </div>
  )
}

export default LandingPage