import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: '',
        salary: ''
    }
    handleOnChangeTitle = event => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleOnChangeSalary = event => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnClick = () => {
        alert('click button')
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">title:</label><br />
                    <input type="text" value={this.state.titleJob}
                        onChange={event => this.handleOnChangeTitle(event)} /><br />
                    <label htmlFor="lname">salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={event => this.handleOnChangeSalary(event)} /><br /><br />
                    <input type="button" value="Submit"
                        onClick={() => this.handleOnClick()} />
                </form>

            </>
        )
    }
}

export default AddComponent