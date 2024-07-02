
import React from 'react';
import './Demo.scss'
//  this is comment
class ChildComponent extends React.Component {

    //     handleOnChangeFName = event => {
    //         this.setState({
    //             firstName: event.target.value
    //         })
    //     }

    //     handleOnChangeLName = event => {
    //         this.setState({
    //             lastName: event.target.value
    //         })
    //     }

    //     handleOnClick = () => {
    //         alert('click button')
    //     }

    //     render() {
    //         let { line, name, jobs } = this.props
    //         return (
    //             <>

    //                 <div className='job-list'>
    //                     {
    //                         jobs && jobs.map((item, index) => {
    //                             return (
    //                                 <div key={item.id}>

    //                                     {item.id + " " + item.title + " " + item.salary}

    //                                 </div>
    //                             )
    //                         })
    //                     }

    //                 </div>
    //             </>
    //         )
    //     }
    // }

    state = {
        showJobs: true
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        this.props.handleDelete(job)
    }

    render() {
        let { handleDelete, jobs } = this.props
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn-show'
                            onClick={() => this.handleShowHide()}>
                            show
                        </button>
                    </div>
                    :
                    <div><div className='job-list'>
                        {
                            jobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.id + " " + item.title + " " + item.salary}
                                        <> </>
                                        <span onClick={() => this.handleOnClickDelete(item)}> X</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>hide</button>
                        </div>
                    </div>
                }
            </>
        )

    }
}

export default ChildComponent