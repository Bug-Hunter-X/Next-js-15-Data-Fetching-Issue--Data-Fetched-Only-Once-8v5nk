```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if you refresh the about page
  // because the data is not fetched again.
  // The error is caused by the page not fetching new data,
  // so it only works correctly when it's first loaded.
  // This is because the data fetching is only done once,
  // and not on every render cycle.
  console.log('About page rendered');
  return (
    <div>About</div>
  );
}
```