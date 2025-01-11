// components/CakeComponent.tsx
"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSlice, removeSlice } from './cakeSlice';
import { RootState } from '../store';


const CakeComponent = () => {
  const dispatch = useDispatch();
  const numSlices = useSelector((state: RootState) => state.cake.numSlices);

  return (
    <div>
      <h1>Number of Cake Slices: {numSlices}</h1>
      <button onClick={() => dispatch(addSlice())}>Add Slice</button>
      <button onClick={() => dispatch(removeSlice())}>Remove Slice</button>
    </div>
  );
};

export default CakeComponent;
