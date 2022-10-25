import React from 'react'
import { AxiosSample } from '../component/sample/AxiosSample';
import FormSample from '../component/sample/FormSample';
import { RouterSample } from '../component/sample/RouterSample';
import { SessionSample } from '../component/sample/SessionSample';
import { UseEffectSample } from '../component/sample/UseEffectSample';
import { UseStateSample } from '../component/sample/UseStateSample';
import { VDomSample } from '../component/sample/VDomSample';

export const Sample = () => {
  return (
    <center>
        <h1>Sample Page</h1>
        <h2>1.useState</h2>
        <UseStateSample />
        <VDomSample />
        <h2>2.react-router-dom</h2>
        <RouterSample />
        <h2>3.react-hook-dom</h2>
        <FormSample />
        <h2>4.little-state-machine</h2>
        <SessionSample />
        <h2>5.useEffect</h2>
        <UseEffectSample />
        <h2>6.axios</h2>
        <AxiosSample />
    </center>
  )
}
