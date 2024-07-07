import React from "react";

class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            console.log('check timeout')
        }, 3000)
    }

    render() {
        console.log("---> Check props: ", this.props)
        return (
            <>
                <div>Home page</div>
            </>
        )
    }
}


export default Home