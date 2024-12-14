# Accessing environment variables in dynamically imported pages in Next.js 15

This repository demonstrates a bug in Next.js 15 where accessing environment variables in a page component that is dynamically imported results in an error. The error occurs even if the environment variable is correctly defined in the `.env` file.

## Steps to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the error in the console.

## Solution

The solution involves using the `next/config` module to access environment variables within the component:

```javascript
import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function About() {
  console.log(publicRuntimeConfig.MY_VARIABLE);
  return (
    <div>About page</div>
  );
}
```

This solution uses the `publicRuntimeConfig` object in the `next/config` module to access environment variables from the component.  The solution utilizes Next.js's built-in methods rather than directly accessing `process.env` which is not guaranteed to be populated in all Next.js contexts.