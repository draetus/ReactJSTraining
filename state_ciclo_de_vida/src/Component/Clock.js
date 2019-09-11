import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            date: new Date(),
            counter: 0,
        };
    }

    componentDidMount() {
        this.timerID =  setInterval(
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
        this.setState((state) => {
            return {
                date: new Date(),
                counter: state.counter + 1
            };
        });
    }
   

   render()  {
       const {date} = this.state
       return (
            <div>
                <h1>Hello, World</h1>
                <FormattedDate date={this.state.date}/>
                <h1>Contador: {this.state.counter}</h1>
            </div>
       )
   };
}

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}