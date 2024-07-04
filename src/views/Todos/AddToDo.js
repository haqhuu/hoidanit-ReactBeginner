import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    submitAddTodo = () => {
        let { addToDo } = this.props

        if (!this.state.title) {
            toast.error("Missing parameter!");
            return
        }

        let todo = {
            id: Math.floor(Math.random() * 1000 + 1),
            title: this.state.title
        }
        addToDo(todo)

        toast.success("Wow so easy!");

        this.setState({
            title: ''
        })

    }
    render() {

        return (
            <div className='add-todo'>
                <input type='text'
                    value={this.state.title}
                    onChange={(event) => this.handleOnChange(event)}
                />
                <button
                    className='add'
                    onClick={() => this.submitAddTodo()}
                >Add</button>
            </div>
        )
    }

}

export default AddToDo;