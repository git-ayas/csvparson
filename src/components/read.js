import React, { Component } from 'react'
import { connect } from 'react-redux'

 class read extends Component {
    componentDidMount() {
        console.log(JSON.stringify(this.props.data))
    }
    
    fetchDataFrmState = () => {

    }
    render = () => {
        return (
            <div>
                {JSON.stringify(this.props.data)}
            </div>
        )
    }
}

const mapStateToProps = function (state)  {
    console.log("Imported state",state)
    return {data: state.data};
}

/* const mapDispatchToProps = {
    
}
 */
export default connect(mapStateToProps)(read)
