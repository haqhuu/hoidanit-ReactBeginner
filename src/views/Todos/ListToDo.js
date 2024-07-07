import React from 'react'
import './ListToDo.scss'
import AddToDo from './AddToDo'
import { toast } from 'react-toastify'
import Color from '../Example/Color.js'

class ListToDo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Cooking' },
            { id: 'todo3', title: 'Find love' },
        ],
        editTodo: {}

    }

    addToDoItem = (item) => {
        this.setState({
            listTodos: [...this.state.listTodos, item]
        })
    }

    handleDelete = (itemDelete) => {

        let listTodos = this.state.listTodos
        console.log('item: ' + itemDelete.id)
        console.log("list ti do: " + listTodos)
        let currentTodos = listTodos.filter(item => item.id !== itemDelete.id)
        console.log('current: ' + currentTodos)
        this.setState({
            listTodos: currentTodos
        })
        toast.success('Delete easy!')
    }

    handleUpdate = (itemUpdate) => {
        let { listTodos, editTodo } = this.state

        let isEmptyObj = Object.keys(editTodo).length === 0

        if (isEmptyObj === false && editTodo.id === itemUpdate.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((obj => obj.id === itemUpdate.id))
            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Update easy!')
            return
        }

        this.setState({
            editTodo: itemUpdate
        })
    }

    handleOnChangeUpdate = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0

        return (

            <>
                <p>
                    Simple to do app
                </p>
                <div className='list-todo-container'>
                    <AddToDo
                        addToDo={this.addToDoItem} />
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        {isEmptyObj === true ? <span> {index + 1}: {item.title}</span>
                                            : <>
                                                <span>{index + 1}: </span>
                                                {editTodo.id === item.id ?
                                                    <input value={this.state.editTodo.title}
                                                        onChange={(event) => this.handleOnChangeUpdate(event)} />
                                                    : <span> {item.title}</span>
                                                }
                                            </>
                                        }

                                        <button className='edit'
                                            onClick={() => this.handleUpdate(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}</button>
                                        <button className='delete'
                                            onClick={() => this.handleDelete(item)}>
                                            Delete
                                        </button>
                                    </div>
                                )
                            })}



                    </div>

                </div>
            </>

        )
    }
}


export default Color(ListToDo)
