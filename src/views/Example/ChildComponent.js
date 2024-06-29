

import React from 'react';
//  this is comment
class ChildComponent extends React.Component {

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
        let { line, name, jobs } = this.props
        return (
            <>

                <div className='job-list'>
                    {
                        jobs && jobs.map((item, index) => {
                            return (
                                <div key={item.id}>

                                    {item.id + " " + item.title + " " + item.salary}

                                </div>
                            )
                        })
                    }

                </div>
            </>
        )
    }
}

export default ChildComponent