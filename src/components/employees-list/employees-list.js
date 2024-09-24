import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
    return (
        <ul className="app-list list-group">
            {data.map((employee, id) => {
            return (
                <EmployeesListItem
                    key={id}
                    {...employee}
                />
            )
            })}
        </ul>
    )
}

export default EmployeesList;