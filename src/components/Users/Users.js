
import React, { useContext } from 'react';
import UserItem from './UserItem';
import GitHubContext from '../../context/GitHub/GitHubContext';

const Users = () => {
    const GHContext = useContext(GitHubContext);
    const { users } = GHContext;
    return (
        <div style={userStyle}>
            {users.map(user => <UserItem key={user.id} user={user}/> )}
        </div>
    )
}

const userStyle = { 
    display: 'grid', 
    gridGap: '1rem', 
    gridTemplateColumns: 'repeat(3, 1fr)' 
}

export default Users;
