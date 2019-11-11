import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSVReader } from 'react-papaparse';

class ingest extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = { 'data': null }
    }


    readfile = (data) => {        
       
        this.props.dispatch({ type:'converted','data': data })


    }
    errorHandling = (err, file, inputElem, reason) => {

    }

    handleImportOffer = () => {
        this.fileInput.current.click();
    }
    render = () => {
        return <>
            <CSVReader
                onFileLoaded={this.readfile}
                inputRef={this.fileInput}
                style={{ display: 'none' }}
                onError={this.errorHandling}
                configOptions={{ header: true /* Header row support */ }}
            />
            <button onClick={this.handleImportOffer}>Import</button>
        </>;
    }

}
const mapStateToProps = (state) => {
    return {data:state.data};
 }
export default connect(mapStateToProps)(ingest);

