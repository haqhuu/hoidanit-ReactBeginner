import React from 'react'
import './ListToDo.scss'
import AddToDo from './AddToDo'

class ListToDo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Cooking' },
            { id: 'todo3', title: 'Find love' },
        ]
    }

    addToDoItem = (item) => {
        this.setState({
            listTodos: [...this.state.listTodos, item]
        })

    }

    render() {
        let { listTodos } = this.state

        return (
            <div className='list-todo-container'>
                <AddToDo
                    addToDo={this.addToDoItem} />
                <div className='list-todo-content'>
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    <span> {index + 1}: {item.title}</span>
                                    <button className='edit'>Edit</button>
                                    <button className='delete'>Delete</button>
                                </div>
                            )
                        })}



                </div>

            </div>
        )
    }
}


export default ListToDo
