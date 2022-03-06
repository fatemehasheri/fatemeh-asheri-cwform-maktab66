import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <div>
                <table className="table" id="contact-list">
                    <thead>
                        <tr className="tr">
                            <th>Name:{this.props.contacts}</th>
                            <th>family:{this.props.contacts.family}</th>
                            <th>Email:{this.props.contacts.email}</th>
                            <th>Phone:{this.props.contacts.phone}</th>
                        </tr>
                    </thead>
                   <tbody>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
