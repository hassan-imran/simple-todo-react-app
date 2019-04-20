import React, { Component } from 'react';

class DisplayList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };

    componentWillReceiveProps(newProps) {
        //alert(JSON.stringify(newProps));
    }

    render() {


        if (this.props.todo.length) {
            return (
                <div>
                    <table border='1'>
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Task Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.todo.map((todo, i) => {
                                return <tr key={i}>
                                    <td>{todo.task}</td>
                                    <td>{todo.desc}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }
        else return '';
    }
}

export default DisplayList;