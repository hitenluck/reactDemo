import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {performAddition} from '../redux/actions/mathAction';

const Home = () => {
  const dispatch = useDispatch();
  
  const mathState = useSelector((state: any) => state.mathState);
  console.log('hey mathState',mathState)

  return (
    <div>
      <h2>{mathState.result}</h2>
      <div
        style={{backgroundColor: 'red', height: 48,  alignItems: 'center', justifyContent: 'center'}}
        onClick={() => dispatch({type: 'ADD'})}>
        <span>Click me </span>
      </div>

      <div
        style={{backgroundColor: 'red', height: 48, marginTop: 32, alignItems: 'center', justifyContent: 'center'}}
        onClick={() => dispatch({type: 'SUBS'})}>
        <span>Click me Substract</span>
      </div>
    </div>
  );
};

export default Home;
