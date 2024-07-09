import React from "react";
import logo from "../../assets/images/logo.jpg"
import { connect } from "react-redux";

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         console.log('check timeout')
    //     }, 3000)
    // }

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

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}

export default connect(mapStateToProps)(Home)