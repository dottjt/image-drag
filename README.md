# MYOB

Thank you for reading my coding exercise! It's super basic, but I imagine it will provide you with enough information to evaluate my desgin, coding and testing skills.

https://nostalgic-boyd-9461d5.netlify.com/


## Build Instructions

I'm going to assume you have Node.js setup with Yarn installed `npm i -g yarn`. All you have to do is run these commands within the root folder of the project.

- `yarn` (to install all the npm dependencies)
- `yarn start` (to run the application on port 4000)
- `yarn test` (to run tests)


## Assumptions

- Each pay period is of 1 month duration. The specification only noted a `payment start date` which provides no indication of the duration of the payment period. I've also just specified the first day of the month for the `payment start date` value.
- The application is simply designed for the viewing of payslips, with dynamic ids assigned to each payslip per refresh of the application.
- The unit tests surrounding the `calculateTax` function are a reflection of the exact values provided by specification file, since a number of online tax calculators all returned different values. Which is also to say that `calculateTax` is mathematically correct.


## Technology Decisions

- I decided to use create-react-app for a basic React setup. I also decided to use the TypeScript template as well, so I can receive the benefits of types.
- I've tried various implementations of Javascript CSS solutions in the past (styled-components, emotion, JSS etc.) and although they do some things very well, the debugging situation was also a complete nightmare. So I just went with stanard SCSS for styling.
- Apollo is essentially the best of Redux without the unreasonable boilerplate. Not to mention, GraphQL is just awesome.
- I personally feel like Router5 provides a more simple API than compared to React-Router, although I'm happy to go with whatever.


## Future Features

### CSV
- Ability to upload a CSV file with payslip information to be interpreted by the application.
- Ability to select a specific payment period from a date calendar.
- Ability to export all payslip data as a CSV.

### Database
- Setup an actual GraphQL database to serve the CSV.
- System would save uploaded payslip data into a database.

### UX
- Accessibility labels.
- Ability to sort the payslips.
- Grid view of the payslips.
- Ability to print the payslips as a PDF.
- Provide user with error information to notify if specific fields in the uploaded CSV file were of an invalid format.


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
