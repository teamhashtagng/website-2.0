import React from 'react';
import classNames from 'classnames';

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
          <a target="_blank" rel="noreferrer" href="#">Collections</a>
        </li>
        {/* <li>
          <Link to="#0">About us</Link>
        </li> */}
        <li>
          <a target="_blank" rel="noreferrer" href="#">Mine</a>
        </li>
        {/* <li>
          <Link to="#0">Support</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;