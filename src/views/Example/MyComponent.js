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

    render() {

        return (
            <>
                <AddComponent />
                <ChildComponent
                    jobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent