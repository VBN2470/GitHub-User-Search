
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';

export const User = ({ user, match, getUser, repos, getUserRepos }) => {

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login, 4);
    }, []);

    const { avatar_url, blog, company, followers, following, 
        html_url, location, login, name, public_repos } = user;

    return (
        <>
            <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-dark"> 
                <i className="fas fa-arrow-left"></i> Back
            </Link>
            <div className="profile">
                <div className="text-center">
                    <img
                        src={avatar_url}
                        className="img"
                        style={{ width: '144px' }}
                        alt="" />
                    <h2>{name}</h2>
                    <p>{location}</p>
                </div>
                <div>
                    <ul style={{listStyle: 'none', padding: '0'}}>
                        <li>
                            {login && <> <strong>Username</strong>: {login} </> }
                        </li>
                        <li>
                            {company && <> <strong>Company</strong>: {company} </>}
                        </li>
                        <li>
                            {blog && 
                            <> 
                                <i className="fas fa-globe"></i> {blog}
                            </>}
                        </li>
                    </ul>
                    <a href={html_url} className="btn btn-dark"> 
                        <i className="fab fa-github"></i> Profile
                    </a>
                    <ul style={{listStyle: 'none', padding: '0'}}>
                        <li className="badge" style={{background: 'green'}}>
                            Followers: {followers}
                        </li>
                        <li className="badge">
                            Following: {following}
                        </li>
                        <li className="badge">
                            Public Repos: {public_repos}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="repos">
                <h3 style={{ color: 'black', padding: '0.8rem'}}>
                    <i className="fas fa-folder-open"></i> Recently Created Repositories
                </h3>
                <Repos repos={repos} />
            </div>
        </>
    )
}

export default User;
