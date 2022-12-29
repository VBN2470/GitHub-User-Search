
import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GitHubContext from '../../context/GitHub/GitHubContext';
import AlertContext from '../../context/Alert/AlertContext';
import '../Main.css';

const Search = () => {
    const GHContext = useContext(GitHubContext);
    const ALERTContext = useContext(AlertContext);
    const { users, clearUsers, searchUsers } = GHContext;
    const { setAlert } = ALERTContext;
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter a username', 'danger');
        } else {
            searchUsers(text);
            setText('');
        }
    }

    const handleChange = e => {
        setText(e.target.value);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Search GitHub Users" onChange={handleChange}/>
                </Form.Group>
                <Button className="btn" variant="primary" type="submit">
                    Search
                </Button>
                {users.length > 0 && <Button className="btn" variant="dark" type="submit" onClick={clearUsers}>
                    Clear
                </Button>}
            </Form>
        </div>
    );
}

export default Search;
