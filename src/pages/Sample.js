import React from 'react'
import FormSample from '../component/sample/FormSample';
import { RouterSample } from '../component/sample/RouterSample';
import { SessionSample } from '../component/sample/SessionSample';
import { UseStateSample } from '../component/sample/UseStateSample';

export const Sample = () => {
  return (
    <center>
        <h1>Sample Page</h1>
        <h2>1.useState</h2>
        <UseStateSample />
        <h2>2.react-router-dom</h2>
        <RouterSample />
        <h2>3.react-hook-dom</h2>
        <FormSample />
        <h2>4.little-state-machine</h2>
        <SessionSample />
        <h2>5.axios</h2>
        <h2>6.useEffect</h2>
    </center>
  )
}
