# Front-end Developer Test Project

[Live Demo](https://shutdown88.github.io/front-end-test-project)

## Technical details

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The app uses [React 16](https://reactjs.org/), [Sass](https://sass-lang.com/) and [Bootstrap 3](http://getbootstrap.com/docs/3.3/) as main technologies and frameworks.
It is bundled with [Webpack](https://webpack.js.org/) embedded in [`create-react-app`](https://github.com/facebookincubator/create-react-app), and then prerendered with [`react-snapshot`](https://github.com/geelen/react-snapshot)

The different parts of the page are modeled as components, which manages their own state where necessary, since there is no need to manage a shared global state, given the complexity of the interactions.

The validation logic for the Contact form, is tested with [`jest`](https://facebook.github.io/jest/) framework.

The production build can be automatically deployed to [GitHub Pages](https://pages.github.com/).

The built app has also an automatically generated service worker file that will precache local assets and will use a cache-first strategy.

## Development

For development `node` >= 8 is required.

Run the following commands

```sh
npm install

npm run start
```

or with `yarn`

```sh
yarn

yarn start
```

The app will be run in development mode at http://localhost:3000.

Then, to test the production build run

```sh
npm run build
```

or

```sh
yarn build
```

The app will be bundled in production mode and optimized for the best performance in the `build` folder, which can be statically served.
