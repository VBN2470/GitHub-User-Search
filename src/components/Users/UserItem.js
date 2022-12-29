
import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login } }) => {    
    return (
        <div className="card">
            <img 
                className="img" 
                src={avatar_url}
                style={{width: '80px'}}
                alt=""/>
            <h4>
                {login}
            </h4>
            <Link to={process.env.PUBLIC_URL + `/user/${login}`} className="btn btn-dark">More</Link>
        </div>
    );
}

export default UserItem;
