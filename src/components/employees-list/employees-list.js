import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {
    const { data, onDelete, onToggleProp } = props
    const elements = data.map(employee => {
                const { id, ...employeeProps } = employee
                return (
                    <EmployeesListItem
                        key={id}
                        {...employeeProps}
                        onDelete={() => onDelete(id)}
                        onToggleProp={(e) => {
                            onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
                        }}
                    />
                )
            })
    return <ul className='app-list list-group'>{elements}</ul>
}

export default EmployeesList;