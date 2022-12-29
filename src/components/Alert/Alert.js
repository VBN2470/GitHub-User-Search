
import React, { useContext } from 'react';
import AlertContext from '../../context/Alert/AlertContext';

const Alert = () => {
    const ALERTContext = useContext(AlertContext);
    const { alert } = ALERTContext;
    return (
        alert && <div style={alertStyle}>
            <i className="fas fa-info-circle"></i> {alert.message}
        </div>
    );
}

const alertStyle = { 
    background: 'rgb(240, 0, 0)',
    borderRadius: '2px',
    color: 'white',
    padding: '0.4rem' 
}

export default Alert;
