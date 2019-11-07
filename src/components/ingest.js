import React, { Component } from 'react'
import { CSVReader } from 'react-papaparse';

export default class ingest extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state={'data':null}
    }


    readfile = (data) => {
        console.log(data);
        this.setState({'data':data})


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
                configOptions={{header: true /* Header row support */ }}
            />
            <button onClick={this.handleImportOffer}>Import</button>
            {JSON.stringify(this.state.data)}
        </>;
    }

}
