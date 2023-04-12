import React from 'react'
import PropTypes from "prop-types";

const Button = props => {
    return (
        <button
            className={`btn-2 ${props.className}`}
            children={props.children ? props.children : (<span>Submit</span>)}
            onClick={props.onClick ? () => props.onClick() : null
            }/>
    )
};

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;
