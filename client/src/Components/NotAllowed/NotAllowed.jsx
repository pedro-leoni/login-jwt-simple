import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/NotAllowed.module.css';

const NotAllowed = () => {
  return (
    <div className={styles.container}>
        <h3>
            Not Allowed
        </h3>
        <div className={styles.buttonsContainer}>
            <Link className={styles.textLink} to='/'>
                Go Login
            </Link>
            <Link className={styles.textLink} to='/createaccount'>
                Create Account
            </Link>
        </div>
    </div>
  )
}

export default NotAllowed