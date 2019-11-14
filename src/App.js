/*
 * @LastEditTime: 2019-09-18 15:00:45
 * @LastEditors: litianfu
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: props.name,
            isGoing: true,
            numberOfGuests: 2,
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
    componentDidMount() { 
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    activateLasers() { 
        console.log('被点击了')
    }
    handleChange(event) { 
        console.log(event.target.name);
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event) {
        console.log('提交的名字: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        名字:
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <label>
                        参与:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>
                        <br />
                    <label>
                        来宾人数:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="提交" />
                </form>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <h1>{this.state.name}</h1>
                <button onClick={this.activateLasers}>
                点击试试
                </button>
            </div>
            
        );
    }
}
// function App(props) {
//   return (
//     <div className="App">
//           <header className="App-header">
//               哈哈哈
//               <h1>{props.name}</h1>
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

export default App;
