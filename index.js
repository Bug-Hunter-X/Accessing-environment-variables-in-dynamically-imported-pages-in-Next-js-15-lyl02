```javascript
//pages/about.js
import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function About() {
  console.log(publicRuntimeConfig.MY_VARIABLE); // Access env variable here
  return (
    <div>About Page</div>
  );
}
```
```javascript
//next.config.js
module.exports = {
  publicRuntimeConfig: {
    MY_VARIABLE: process.env.MY_VARIABLE,
  },
};
```