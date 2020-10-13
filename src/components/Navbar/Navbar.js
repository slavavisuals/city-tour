import React from 'react';
import logo from  '../../logo.svg';
import styles from './navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="city tours company"/>
            <ul className={styles['nav-links']}>
                <li>
                    <a href="/" className={styles['nav-link']}>
                        home
                    </a>
                </li>
                <li>
                    <a href="/" className={styles['nav-link']}>
                        about
                    </a>
                </li>
                <li>
                    <a href="/" className={styles['nav-link']} active>
                        tours
                    </a>
                </li>
            </ul>
        </nav>
    )
};