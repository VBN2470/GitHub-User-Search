
import React from 'react'

const RepoItem = ({ repo }) => {
    const {html_url, name, stargazers_count, forks } = repo;
    return (
        <div className="repo">
            <h4>
                <i className="fas fa-chevron-right"></i> <a href={html_url}> {name} </a>
            </h4>
            <div style={{display: 'flex'}}>
                {/* <div style={propertyStyle}>
                    {language}
                </div> */}
                <div style={propertyStyle}>
                    <i className="fas fa-star"></i> {stargazers_count}
                </div>
                <div style={propertyStyle}>
                    <i className="fas fa-code-branch"></i> {forks} 
                </div>
            </div>
        </div>
    )
}

const propertyStyle = {
    margin: '16px',
    marginLeft: '0px'
}

export default RepoItem;
