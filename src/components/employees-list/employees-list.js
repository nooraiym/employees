import { Component } from "react";

import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

class EmployeesList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data, onDelete } = this.props
        const elements = data.map(employee => {
                    const { id, ...employeeProps } = employee
                    return (
                        <EmployeesListItem
                            key={id}
                            {...employeeProps}
                            onDelete={() => onDelete(id)}
                        />
                    )
                })
        return <ul className='app-list list-group'>{elements}</ul>
    }
}

export default EmployeesList;