import React from "react";
import logo from "../../assets/images/logo.jpg"

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
                <img style={{ width: '200px' }} src={logo} />
            </>
        )
    }
}


export default Home