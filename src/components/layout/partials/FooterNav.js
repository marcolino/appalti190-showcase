import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/contacts">Contatti</Link>
        </li>
        <li>
          <Link to="/aboutus">Su di noi</Link>
        </li>
        <li>
          <Link to="/faq">Domande &amp; Risposte</Link>
        </li>
        <li>
          <Link to="/support">Assistenza</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;