import React from 'react';
import ChildComponent from './ChildComponent';

//  this is comment
class MyComponent extends React.Component {

    state = {
        firstName: 'Huu',
        lastName: 'HaHa',
        arrJobs: [
            { id: '0', title: 'dev', salary: '500 $' },
            { id: '1', title: 'tester', salary: '400 $' },
            { id: '2', title: 'CEO', salary: '50000 $' },
        ]
    }

    handleOnChangeFName = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangeLName = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleOnClick = () => {
        alert('click button')
    }

    render() {

        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName}
                        onChange={event => this.handleOnChangeFName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={event => this.handleOnChangeLName(event)} /><br /><br />
                    <input type="button" value="Submit"
                        onClick={() => this.handleOnClick()}
                    />
                </form>
                <ChildComponent

                    line={'$below lines was passed from MyCPN to ChildCPN__'}
                    name={this.state.firstName + " " + this.state.lastName}
                    jobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent