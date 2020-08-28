# Template for Pug - ScSS - Parcel

_I have included gsap3 and font awesome via cdn so they can be removed easy_

```
npx degit "b1m1nd/psp-template#develop" app-name
```

...then install dependencies

```
npm install
```

You can run the following scripts

```
# for testing on http://localhost:9001
npm run dev

# build ./dist/build/
npm run build

# for netlify or other static host exports root:/public/
npm run export

// Must have ./scripts/deploy.js configured
# for github pages exports ./dist/public/
npm run deploy
```
