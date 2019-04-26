import React, { Component } from 'react';

class Users extends Component {
    render() {
        return (
            <div>
                <h1>User {JSON.stringify(this.props.match.params.id)}</h1>
                <p>this is the Users page</p>
            </div>
        );
    }
}

export default Users;