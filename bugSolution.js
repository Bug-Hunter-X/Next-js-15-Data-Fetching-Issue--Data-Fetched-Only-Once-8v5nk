```javascript
// pages/about.js

// Solution using getServerSideProps
export async function getServerSideProps(context) {
  console.log('getServerSideProps executed');
  // Fetch your data here
  return {
    props: {},
  };
}

export default function About() {
  return (
    <div>About</div>
  );
}
```