import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Data from './components/Data'
import { useState } from 'react';

/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */


var loaded = false;
function App() {
    const [submited, setSubmited] = useState(false);
    const [arr, setArr] = useState([]);
    const [head, setHead] = useState({ formName: 'test form', formDesc: 'this is a test form, only to test' });

    const change = () => {
        console.log(arr);
        setArr([...arr, { fieldname: 'phone' }]);
    }
    const valueChange = (index, value) => {
        console.log(index, value);
        arr[index].fieldValue = value;
    }
    const submit = () => {
        var res = {};
        for (var i = 0; i < arr.length; i++) {
            res[arr[i].fieldname] = arr[i].fieldValue;
        }
        console.log(res);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(res)
        };
        fetch('http://localhost:9603/setForm', requestOptions)
            .then(response => response.json())
            .then(
                (result) => {
                    console.log(result);
                    //alert('response saved');
                    setSubmited(true);
                },
                (error) => {
                }
            )
    }
    if (!loaded) {
        fetch("http://localhost:9603/getForm")
            .then(res => res.json())
            .then(
                (result) => {
                    loaded = true;
                    result = result[0];
                    setHead({ formName: result.formName, formDesc: result.formDesc })
                    for (var i = 0; i < result.data.length; i++) {
                        result.data[i].fieldId = i;
                        result.data[i].fieldValue = '';
                    }
                    setArr(result.data);
                },
                (error) => {
                    loaded = true;
                }
            )
    }
    return (
        <div className="App">
            <Header data={head} />
            <Data data={arr} submit={submit} valueChange={valueChange} submited={submited}/>
        </div>
    );
}

export default App;