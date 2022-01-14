import React, { Fragment } from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSumarry from './MealsSummary'

const Meals = () => {
    return (
        <Fragment>
            <MealsSumarry />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals
