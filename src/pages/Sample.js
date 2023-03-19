import React from "react";
import { AxiosTemplate } from "../components/templates/sample/axiosTemplate";
import FormTemplate from "../components/templates/sample/formTemplate";
import { RouterTemplate } from "../components/templates/sample/routerTemplate";
import { SessionTemplate } from "../components/templates/sample/sessionTemplate";
import { UseEffectTemplate } from "../components/templates/sample/useEffectTemplate";
import { UseStateTemplate } from "../components/templates/sample/useStateTemplate";
import { VirtualDomTemplate } from "../components/templates/sample/virtualDomTemplate";

export const Sample = () => {
  return (
    <>
      <h1>Sample Page</h1>
      <h2>1.useState</h2>
      <UseStateTemplate />
      <VirtualDomTemplate />
      <h2>2.react-router-dom</h2>
      <RouterTemplate />
      <h2>3.react-hook-dom</h2>
      <FormTemplate />
      <h2>4.little-state-machine</h2>
      <SessionTemplate />
      <h2>5.useEffect</h2>
      <UseEffectTemplate />
      <h2>6.axios</h2>
      <AxiosTemplate />
    </>
  );
};
