import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Button from './components/Button';
import ResponsiveDialog from './components/ResponsiveDialog';
import Home from './containers/Home';
import store from './redux/store';
import MainScreen from './Screen';

function App() {
  const [response, setResponse] = useState()
  useEffect(() => {
    getDataFromAPI();
    getDataUsingThen();
  }, [])

  const getDataFromAPI = async () => {
    // code with async await
    const data = await axios.get('https://reqres.in/api/unknown')
    console.log('data hows you', data)
    setResponse(data.data)
  }

  const getDataUsingThen = () => {
    axios.get('https://reqres.in/api/unknown').then((response) => {
      // block statements
      console.log('hey then statemebnt', response)
    })
  }
console.log('hey state data',response)
  return (
    <div className="App">
      <Provider store={store} >
        {/* <ResponsiveDialog /> */}
      </Provider>
    </div>
  );
}

export default App;
