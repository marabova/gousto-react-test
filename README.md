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

    ├── build                   # Compiled files 
    ├── node_modules            # Node modules 
    ├── public                  # Source files 
    ├── src                     # Source files 
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

- As a user I want to be able to search by product description (user is able to search only by product title)
- No tests

## Possible improvements/ functionality

- Add all categories option above the categories
- Add option for search by product description
- Add unit tests
