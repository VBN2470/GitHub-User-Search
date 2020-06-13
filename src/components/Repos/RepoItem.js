
import React from 'react'

export const RepoItem = ({ repo }) => {

    const {html_url, name} = repo;

    return (
        <div className="repo">
            <h4>
                <i className="fas fa-chevron-right"></i> <a href={html_url}> {name} </a>
            </h4>
        </div>
    )
}

export default RepoItem;
