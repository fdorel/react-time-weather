import React, { Component } from 'react';

class  Clock extends Component {
    state = {
        time: new Date()
    };

    componentDidMount() {
        this.timerId = setInterval(() => this.ticktack(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    ticktack() {
        this.setState({
            time: new Date()
        })
    }

    render() {
        return(

                    <h2>{this.state.time.toLocaleTimeString()}</h2>


        );
    }
}

export default Clock;