# POKEMONML

## Build Instructions

I'm going to assume you have Node.js setup with Yarn installed `npm i -g yarn`. All you have to do is run these commands within the root folder of the project.

- `yarn` (to install all the npm dependencies)
- `yarn start` (to run the application on port 4000)
- `yarn test` (to run tests)

<!-- import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { SIGN_UP } from '../../graphql/auth';

const SignUp: FC = () => {
  const [signUp] = useMutation(SIGN_UP);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  return (
    <div>
      <input type="text" value={displayName} onChange={(event) => setDisplayName(event.target.value)}/>
      <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
      <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>

      <button onClick={() => {
        // NOTE: Put email and password length validation etc.
        signUp({ variables: { email, password } });
      }}>
        Signup
      </button>

    </div>

  );
};

export default SignUp; -->

<!--
  // NOTE: Force Update Function
  const [, updateState] = useState<{}>();
  const forceUpdate = useCallback(() => updateState({}), []); -->
