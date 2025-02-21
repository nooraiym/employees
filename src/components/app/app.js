import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Alex C.', salary: 4000, increase: false, rise: false, id: 1 },
        { name: 'Flex C.', salary: 1400, increase: true, rise: false, id: 2 },
        { name: 'Samuel C.', salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4
  }

  deleteItem = id => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id),
      }
    })
  }

  addItem = (name, salary) => {
    if(name.length > 3 && salary) {
      const newEmployee = { name, salary, increase: false, rise: false, id: this.maxId++ }
      this.setState(({ data }) => {
        return {
          data: [...data, newEmployee],
        }
      })
    } else {
      console.error('Имя и зарплата должны быть заполнены')
    }
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({ data: data.map(item => (item.id === id ? { ...item, [prop]: !item[prop] } : item)) }))
  }

  searchEmployee = (items, term) => {
    if(term.length === 0 ) return items
    return items.filter(item => item.name.indexOf(term) > -1)
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterEmployees = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise)
      case 'over1000':
        return items.filter(item => item.salary > 1000)
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state
    const employeesCount = this.state.data.length
    const bonusedEmployeesCount = this.state.data.filter(employee => employee.increase).length
    const visibleData = this.filterEmployees(this.searchEmployee(data, term), filter)
    return (
      <div className='app'>
        <AppInfo
          employeesCount={employeesCount}
          bonusedEmployeesCount={bonusedEmployeesCount}
        />

        <div className='search-panel'>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter
            filter = {filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App;
