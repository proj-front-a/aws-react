import React from 'react';
import {
  createStore,
  useStateMachine,
} from 'little-state-machine';

createStore({
  yourDetail: { email: '' },
});

export function updateUser(state, payload) {
  return {
    ...state,
    yourDetail: {
      ...state.yourDetail,
      ...payload,
    },
  };
}

export function Store() {
  const { state } = useStateMachine({ updateUser });

  return (
    <center>
      {state.yourDetail.email ? state.yourDetail.email + "でログイン中" : ""}
    </center>
  );
}