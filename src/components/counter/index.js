/*
 * components
 * counter index.js
 */

import React from 'react'
import PropTypes from 'prop-types'
import './counter.styl'

const Counter = ({count, onIncrement, onDecrement}) => (
    <div>
        <h2>Redux Counter</h2>
        <button onClick = {onDecrement}> - </button>
        <span>{count}</span>
        <button onClick = {onIncrement}> + </button>
    </div>
)

Counter.defaultProps = {
    count: 0
}

Counter.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
}

export default Counter