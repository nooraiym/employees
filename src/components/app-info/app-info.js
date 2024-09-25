import "./app-info.css";

const AppInfo = ({ employeesCount, bonusedEmployeesCount }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {bonusedEmployeesCount}</h2>
        </div>
    )
}

export default AppInfo;