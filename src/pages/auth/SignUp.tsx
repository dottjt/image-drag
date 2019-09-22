import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { LOGIN } from '../../graphql/auth';

const SignUp: FC = () => {
  const [login] = useMutation(LOGIN);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
      <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>

      <button onClick={() => {
        // NOTE: Put email and password length validation etc.
        login({ variables: { email, password } });
      }}>
        Signup
      </button>

    </div>

  );
};

export default SignUp;
