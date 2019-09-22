import React, { FC, useState } from 'react';
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

export default SignUp;
