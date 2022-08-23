import LandingPage from '../home/landing-page';
import classes from './starting-page.module.css';

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section className={classes.starting}>
      <LandingPage />
    </section>
  );
}

export default StartingPageContent;
