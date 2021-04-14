import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

class App extends Component {
  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      
      <div className="App bg">
       
        <div class="container">
        <div class="head"><h1>Enter Your Details to Download Cerificate</h1></div>
        <input class="box" type="text" placeholder="Enter Student Name" name="name" onChange={this.handleChange} />
        <br></br>
        <input class="box" type="text" placeholder="Enter Student Role" name="role" onChange={this.handleChange} />
        <br></br>
        <input class="box" type="text" placeholder="Enter Course Name" name="course" onChange={this.handleChange} />
        <br></br>
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
        </div>
      </div>
      
    );
  }
}

export default App;
