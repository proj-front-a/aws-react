import React from 'react';
import {
  createStore,
  useStateMachine,
} from 'little-state-machine';

export const SessionSample = () => {
    createStore({
        yourDetail: { name: '' },
      });
      
      const updateName = (state, payload) => {
        return {
          ...state,
          yourDetail: {
            ...state.yourDetail,
            ...payload,
          },
        };
      }
    const { actions, state } = useStateMachine({ updateName });
  return (
    <div>
        <p>Javaでいうセッション管理ができる</p>
        <p>公式サイトは<a href="https://www.npmjs.com/package/little-state-machine" target="_blank" rel="noreferrer">コチラ</a></p>
        <p>{state.yourDetail.name}</p>
        <div onClick={() => actions.updateName({ name: 'bill' })}>
            billに変更
        </div>
        <div onClick={() => actions.updateName({ name: 'john' })}>
            johnに変更
        </div>
        <p>※index.jsに以下記述を追記する必要あり</p>
        
    </div>
  )
}
