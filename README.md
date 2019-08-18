# Gousto coding test

- author: @marabova;
- title: Gousto simple react app

## How to use:

### Prerequisites:

- `node js` >= 8.12
- `yarn` (you can install it globally by running `npm install -g yarn`)

### Commands:

- `yarn install` - installing dependencies
- `yarn start` - starting the app in dev mode
- `yarn start-windows` - starting the app in dev mode on windows
- `yarn build` - build the production artifacts
- `yarn now-start` - run the app with builted production artifacts

## Application structure

    ├── build                   # Compiled files (alternatively `dist`)
    ├── node_modules            # Node modules (alternatively `doc`)
    ├── public                  # Source files (alternatively `lib` or `app`)
    ├── src                     # Source files (alternatively `lib` or `app`)
    ├── .gitignore
    ├── package.json
    ├── renovate.json
    ├── yarn.lock
    └── README.md

### Technologies used

- UI - React
- State management - Redux
- Styling - Bootsrap

## Uncompleted requirements

- As a user I want to be able to search in the product description (user is able to search only in title)
- No tests

## Possible improvements/ functionality

- Add all categories option
- Add option for search in product description
- Add unit tests
