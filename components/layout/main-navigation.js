import Link from 'next/link';
import { useRouter } from "next/router"
import { useSession, signOut } from 'next-auth/react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from 'react';

import classes from './main-navigation.module.css';

function MainNavigation() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useRouter();

  console.log(location)

  function logoutHandler() {
    signOut();
  }

  function toggleMenu() {
    setIsMenuOpen((menu) => !menu)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.asPath])

  return (
    <header className={`${classes.header} ${location.pathname === "/" ? classes.blurHeader : ""}`}>
      {isMenuOpen ?
        <AiOutlineClose className={classes.mobileDisplay} color="white" size="1.3em" onClick={toggleMenu} />
        : <AiOutlineMenu className={classes.mobileDisplay} color="white" size="1.3em" onClick={toggleMenu} />
      }
      <Link href='/'>
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      {isMenuOpen ?
        <div className={`${classes.menu} ${location.pathname === "/" ? classes.transparentBg : ""}`}>
          <ul>
            <li>
              <Link href='/destinations'>Destinations</Link>
            </li>
            <li>
              <Link href='/gallery'>Gallery</Link>
            </li>
            {!session && status !== 'loading' && <li>
              <Link href='/auth'>Login</Link>
            </li>
            }
            {session && <li>
              <Link href='/profile'>Profile</Link>
            </li>
            }
            {/* {session && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          } */}
          </ul>
        </div>
        : <nav className={classes.desktopNav}>
          <ul>
            <li>
              <Link href='/destinations'>Destinations</Link>
            </li>
            <li>
              <Link href='/gallery'>Gallery</Link>
            </li>
            {!session && status !== 'loading' && <li>
              <Link href='/auth'>Login</Link>
            </li>
            }
            {session && <li>
              <Link href='/profile'>Profile</Link>
            </li>
            }
            {session && <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
            }
          </ul>
        </nav>
      }
    </header>
  );
}

export default MainNavigation;
