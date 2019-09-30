/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState } from 'react';

import { TextField } from '../src';

export default {
  title: 'TextField',

  parameters: {
    component: TextField,
  },
};

export const userName = (): React.ReactElement => {
  const [userNameInputVal, setUserNameInputVal] = useState('');
  return (
    <>
      <TextField
        id="userName"
        label="Public Username *"
        placeholder="JaneDoe"
        type="text"
        valueState={userNameInputVal}
        valueSetter={setUserNameInputVal}
        isRequired
        minLength={3}
        maxLength={8}
        helperText={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <>
            The name that will identify you in your courses -{' '}
            <strong>(cannot be changed later)</strong>
          </>
        }
      />
      <i>
        <p>The value of the input field is: {userNameInputVal}</p>
      </i>
    </>
  );
};
