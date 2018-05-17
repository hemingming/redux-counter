/*
 * views home
 */

import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'
import Counter from '../../containers/counter.js'

const Home = () => (
    <div>
        <Counter />
    </div> 
)

export default Home