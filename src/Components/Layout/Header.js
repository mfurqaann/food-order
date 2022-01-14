import React, { Fragment } from 'react'
import mealsImage from '../../img/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = ({ onShow }) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onShow={onShow} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="" />
            </div>
        </Fragment>
    )
}

export default Header
