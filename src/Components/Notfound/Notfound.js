import React from 'react';
import './Notfound.css';

const Notfound = () => {
    return (
        <div className="notfound">
            <h3> <span className="error"> 404</span> Page not found</h3>
            <small>Link may be broken or Wrong link. Check and try again.</small>
        </div>
    );
};

export default Notfound;