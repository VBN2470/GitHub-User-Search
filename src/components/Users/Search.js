
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Main.css';

export const Search = ({ clearUsers, searchUsers, showClearBar, showAlertBar }) => {

    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (text === '') {
            showAlertBar('Please enter a username', 'danger');
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
                {showClearBar && <Button className="btn" variant="dark" type="submit" onClick={clearUsers}>
                    Clear
                </Button>}
            </Form>
        </div>
    )
}

export default Search;
