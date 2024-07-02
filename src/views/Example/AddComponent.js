import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleOnChangeTitle = event => {
        this.setState({
            title: event.target.value
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

    handleAddJob = (event) => {
        try {
            let { addJob } = this.props
            let { title, salary } = this.state
            console.log(this.state)

            if (!title || !salary) {
                alert('Missing parameter!')
                return
            }

            let job = {
                id: Math.floor(Math.random() * 101),
                title: title,
                salary: salary
            }

            addJob(job)

            this.setState({
                title: '',
                salary: ''
            })
        } catch (error) {
            console.log(error.message)
        }

    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">title:</label><br />
                    <input type="text" value={this.state.title}
                        onChange={event => this.handleOnChangeTitle(event)} /><br />
                    <label htmlFor="lname">salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={event => this.handleOnChangeSalary(event)} /><br /><br />
                    <input type="button" value="Submit"
                        onClick={(event) => this.handleAddJob(event)} />
                </form>

            </>
        )
    }
}

export default AddComponent