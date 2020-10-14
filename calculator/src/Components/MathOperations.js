import React from 'react'
import PropTypes from 'prop-types'
import { isCompositeComponent } from 'prop-types'
import Button from './Button'
import App from '../App'

const MathOperation = ({onClickOperation, onClickEqual}) => (
)

MathOperation.propTypes ={
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default App