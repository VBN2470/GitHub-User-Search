
import React from 'react'

export const Alert = ({ alert }) => {

    return (
        alert !== null && <div style={alertStyle}>
            <i className="fas fa-info-circle"></i> {alert.message}
        </div>
    )
}

const alertStyle = { 
    background: 'rgb(240, 0, 0)',
    borderRadius: '2px',
    color: 'white',
    padding: '0.4rem' 
}

export default Alert;
