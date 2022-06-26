# react-context-demo
Supplementary files for a blog post demonstrating the use of React Context to mitigate prop drilling.

## Usage
1. Clone this repo to your local machine.
1. In a terminal:
    1. `cd` into the root of the project directory.
    1. `npm i`
    1. `npm start`
1. Play around with the forms, then inspect the code to see the differences between a prop-drilling approach vs a React Context approach.
    1. Check out `/src/NoContextComponent.jsx` to see a non-contextual, "prop drilling" approach.
    1. Compare this with `/src/YesContextComponent.jsx` to see a context-based approach to prevent prop drilling.