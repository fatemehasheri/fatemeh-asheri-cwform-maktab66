import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div>
                <table class="table" id="contact-list">
                    <thead>
                        <tr class="tr">
                            <th>Name:</th>
                            <th>family:</th>
                            <th>Email:</th>
                            <th>Phone:</th>
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