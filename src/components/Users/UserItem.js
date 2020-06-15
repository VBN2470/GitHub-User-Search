
import React from 'react';
import { Link } from 'react-router-dom';


const UserItem = ({ user }) => {

    const { avatar_url, login } = user;

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
    )
}

export default UserItem;
