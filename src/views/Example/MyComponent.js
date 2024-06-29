import React from 'react';
//  this is comment
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
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
        let name = 'AAA'
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

            </>
        )
    }
}

export default MyComponent