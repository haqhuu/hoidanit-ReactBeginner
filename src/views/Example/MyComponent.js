import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

//  this is comment
class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: '0', title: 'dev', salary: '500 $' },
            { id: '1', title: 'tester', salary: '400 $' },
            { id: '2', title: 'CEO', salary: '50000 $' },
        ]
    }

    addAJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {

        return (
            <>
                <AddComponent
                    addJob={this.addAJob}
                />
                <ChildComponent
                    jobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent