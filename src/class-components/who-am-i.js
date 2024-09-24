import { Component } from 'react'

class whoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // состояние
      years: 27,
      position: '',
    }
    this.nextYear = this.nextYear.bind(this) // привязка this к nextYear если обьявлен через function declaration, или вызвать обработчик через анонимнцю стрелочную функцию
  }

  nextYear = () => {
    // обработчик события
    console.log('+++')
    // this.setState({             // нельзя менять состояние напрямую, через сеттер. Он и запускает перерисовку компонента
    //   years: this.state.years + 1 // здесь не стоит делать ++this.state.years, т.к. это не меняет состояние
    // })
    this.setState(prev => ({
      years: state.years + 1, // даже если в state несколько свойств, то setState изменит необходимое, а об остальных переживать не стоит
    }))
  }

  commitInputChanges = e => {
    this.setState({
      position: e.target.value,
    })
  }

  render() {
    const { name, surname, link } = this.props
    return (
      <div>
        <button onClick={this.nextYear}>+++</button>
        <h1>
          My name is {name}, surname - {surname}, age - {this.state.years}, position - {this.state.position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Write your position</span>
          <input
            type='text'
            onChange={this.commitInputChanges}
          />
        </form>
      </div>
    )
  }
}

export default whoAmI
