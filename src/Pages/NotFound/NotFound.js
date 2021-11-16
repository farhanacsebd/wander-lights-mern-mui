import React from 'react';
import notfound from '../../image/404.gif'
const Notfound = () => {
    return (
        <div>
            <img style={{ width: "100%", height: "400px" }} src={notfound} alt="" />
        </div>
    );
};

export default Notfound;