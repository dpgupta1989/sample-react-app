import React, { Component } from 'react';

class FetchDataFromApi extends Component {

    constructor(props){
        super(props);
    }

    state = {  
        loading: true,
        apiCallSuccess: false
    };

    callStudentSearchAPI(){
        console.log(this.props);
        // alert('api method called: ' + this.props.props.vendorNumber + "-" + this.props.props.vendorName);
        this.samplePostApiCall();
    }

    async samplePostApiCall(){
        const headers = new Headers();
        headers.append('content-type','application/json');
        const data = {
            "vendorNo" : this.props.props.vendorNumber,
	        "vendorName" : this.props.props.vendorName
        };
        const options = {
            method: 'POST',
            headers : headers,
            body: JSON.stringify(data)
        }

        fetch('http://localhost:8091/StudentSearch/loadVendorDetails', options)
            .then(res => res.json())
            .then(data => {
                this.setState({ loading: false, studentSearchResponse: data, apiCallSuccess: true});
                    this.sendDataToParent();
            })
            .catch(console.log)
    }

    sendDataToParent = () =>{
        this.props.apiDataCallback(this.state);
    }

    render() { 
        return (  
            <div>
                {/* API Call */}
            </div>
        );
    }
}
 
export default FetchDataFromApi;