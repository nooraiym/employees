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
        {name: 'Alex C.', salary: 4000, increase: false, id: 1},
        {name: 'Flex C.', salary: 1400, increase: true, id: 2},
        {name: 'Samuel C.', salary: 5000, increase: false, id: 3},
      ]
    }
    this.maxId = 4
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newEmployee = {name, salary, increase: false, id: this.maxId++}
    this.setState(({data}) => {
      return {
        data: [...data, newEmployee],
      }
    })
  }

  render() {
      return (
        <div className='app'>
          <AppInfo />

          <div className='search-panel'>
            <SearchPanel />
            <AppFilter />
          </div>

          <EmployeesList
            data={this.state.data}
            onDelete={this.deleteItem}
          />
          <EmployeesAddForm onAdd={this.addItem} />
        </div>
      )
  }
}

export default App;
