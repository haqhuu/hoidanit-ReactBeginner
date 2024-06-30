

import React from 'react';
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

    render() {
        let { jobs } = this.props
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>show</button>
                    </div>
                    :
                    <div><div className='job-list'>
                        {
                            jobs.map((item, index) => {
                                return (
                                    <div key={item.id}>

                                        {item.id + " " + item.title + " " + item.salary}

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