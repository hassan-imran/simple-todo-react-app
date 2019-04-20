import React, { Component } from 'react';

class DisplayList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };


    render() {

        return (
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Task Number</th>
                            <th>Task Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DisplayList;