import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./footer.module.css";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
// import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const location = useRouter();

  return (
    <footer className={`${classes.footer} ${location.pathname === "/" ? classes.blurFooter : ""}`}>
      <div className={classes.copyright}>
        <p>{`Copyright © ${new Date().getFullYear()} TIMETRAVEL. All rights reserved`}</p>
      </div>
      <div className={classes.routes}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>

          <li>
            <Link href='/profile'>Gallery</Link>
          </li>
        </ul>
      </div>
      <div className={classes.socialMedia}>
        <ul>
          <li>
            <a>
              <BsFacebook />
            </a>
          </li>

          <li>
            <a>
              <BsLinkedin />
            </a>
          </li>

          <li>
            <a>
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer