Episode 1
*Basics of html, css, js
*Injecting react using cdn links using script tag

Episode 2

*npm-manages packages
*package.json- is the configuration by npm
*importance of bundler package- it package the app that can be sent to production - here we use parcel bundler which ignites our app
*There are two types dependencies
1)web dependency- requires during development phase
2)normal - requires during production phase
*When we download a package we get entire node modules, why because it has dependencies in node modules which is called as transitive dependency.
*How will we know parcel have dependencies- can refer that in its own package.json
*node modules shouldn't be pushed to production so include that in gitignore
because that can be created using package.json and package-lock.json with the help of command -npm install
*npx- executing a package
*remove main attribute from package.json when we npx parcel index.html because it confuses npx for entry point
*when we give npx parcel index.html - it creates a development build and server for us
what all parcel giving
1)server
2)dev build
3)HMR - hot module replacement( done by file watching algorithm written in c++)
4)Cashing - faster builds
5)It does image optimization
6)bundling in production
7)Compressing
8)Consistent hashing
9)Code splitting
10)Differential Bundling to support older browsers
11)Error handling(diagnostics)
12)can be hosted in https as well
13)tree shaking- remove unused code
14)Different dev and prod bundles
\*There are two ways to get react into our app
1)through cdn links - not a preferred way because there are network call happening simply
2)through npm - already node modules will have react because we can keep that dependency in the package.json
\*We need type="module" because our code uses import and export statements, which are features of ES Modules (ESM).

Episode 3
--->in scripts attribute under package.json we can configure commands to run the application
1)npm start = npx parcel index.html
2)npm run build = npx parcel build index.html
--->React.createElement =>ReactElement-JS Object => HTMLElement(render)
--->JSX - to avoid the nested creating elements using createElement, we use JSX which is javascriptsyntax
--->JSX is not understood by js engine still we get output because parcel using babel which will transpile jsx code to js engine
---> how babel converts -- JSX=> React.createElement => ReactElement-JS Object => HTMLElement(render)
---> React Component
*Class Based Components-old
*Functional Components-new--> normal js function that returns react element/ jsx code
*JSX takes care of cross site scripting issues
*Component composition- any component can be passed to any component and also any element/ js code can be passed inside a component

//React element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// //JSX HTML like syntax
// const jsxheading = <h1 className="head">Namaste React using JSX</h1>

// //React functional componnet & component composition
// const number = 10000;
// const Title = () => (<h1 className="head" tabIndex="5">Namaste React</h1>);
// const HeadingComponent = () => (
// <div id="container">
// <Title />
// {jsxheading}
// {number}
// <h1 className="heading">Namaste React using functional component</h1>
// </div>
// );

Episode 4

--->passing a prop to a component is same as passing a argumanet to a function
--->config driven UI ---which is handled by backend
--->when we return list of objects from map function we need to use id to avoid re-rendering of items, ex:- if already there are 10items and there is a 11th item added using id it renders only that item using key(id)
Note:- it is not preferrable to use index as key because order might change

Food ordering app
/\*\*

- Header
- --Logo
- --Nav items
- Body
- -- Search
- --Restaurant Container
- -----Restaurant Card
- Footer
- --Links
- --Address
- --Contact
  \*/

Episode 5

--->Advantages of react
*Updating DOM efficiently
*Updates UI layer with Data Layer
--->Two types of import and export
1)Default Export/Import
*export default Component/variable;
*import Component from "path";;
2)Named Export/Import
*export const Component/variable;
*import {Component/variable} from "path";
--->state is superpowerful variable
\*that can be created using hooks

Hooks
1)Normal js functions
*useState()-to create state variables in react
*useEffect()
--->whenever state varaible updates react re-renders the components or react triggers a reconciliation cycle

React Algo
1)React uses recondiliation algo(react fiber)
*React creates a virtual DOM(representation of DOM(object))
*Then, algo finds the difference between old and new virtual DOM then updates the actual DOM
\*So react is fast as it doesnt touch actual DOM frequently(it does efficient virtual DOM)

Episode 6

1)Monolith & Micro service architecture
*Monolith
-->API, UI, Auth, DB in one folder
*Microservices
-->For everything there will be different services that follows SRP, which interact with each other using API
-->There are 2 ways to fetch data from backend
1)As soon as page loads we make API and then render data
2)As soon as page loads we render UI and then make API call again render data
2nd approach is better, as it gives better UX as it will have skeleton.
\*useEffect will be called after the component is renderered
--->Shimmer UI- before the API loads there will be dummy page

Episode 7

\*if there is no dependency array is called on every component render
syntax: - useEffect (()=>{

})
\*if dependency array is empty [] => useEffect is called on initial render(just once)
syntax: - useEffect (()=>{

},[])
\*if there is something in dependency array then it is called upated for any change of that something
syntax: - useEffect (()=>{

},[btnName])

React Router
\*use react-router-dom to add routing
--> use createBrowserRouter to create router object
-->use RouterProvider to render routes
--->There are two types of routing
*Client Side Routing-Single page application
*Server Side Routing-Webforms

Episode 8

*Class based components
--create a class and then extend it using React.Component
*Life cycle of a class based component
--Steps
\*when the class is instantiated first constructor is called then render is called, then componentdidmount is called
\*if there is a parent and child class then parent's componentdidmount is called at last.
\*when there is a multiple child above order doesnt work as we think
Below is the correct order of execution
1)Parent Constructor
2)Parent Render
3)Child 1 Constructor
4)Child 1 Render
5)Child 2 Constructor
6)Child 2 Render
DOM is updated in single batch
7)Child 1 componentdidmount
8)Child 2 componentdidmount
9)Parent componentdidmount
why it works like this - because, to avoid the DOM manipulation again and again
-->Component Life cycle
----Mounting
1)Constructor(dummy)
2)Render
3)Component Did Mount
----Update
1)Render
2)Component Did Update
----Unmount
1)Component Will Unmount

Episode 9

1)following SRP- creating custom hooks
2)Optimizing the code- chunking, code splitting, dynamic bundlling, lazy loading, on demand loading, dynamic import
3)Suspense keyword is used to initiate loading of lazy loaded components

Episode 10

1.SASS and SCSS, styled components
2.Tailwindcss- rapidly build modern websites without ever leaving html, postcss- a tool for transforming css with JS 3. pros and cons of tailwindcss
Pros -*there is no movement between files and no more usage of css
*very lightweight
Cons - as we deal with classNme there will be lengthy code inside it

Episode 11

1)Enhancing the existing component is called higher order components
2)Higher order components are pure functions - which will not change any exixting component
3)Controlled by parent means that component is controlled
4)props drilling-passing data from parent to deeper level children
5)React Context solves problem of props drilling
---->There is useContext hook that can be used in components instead passing props for irrelated components
---->Consumer and Provider consumes and provides the specific values, basically provider can used to wrap the components according to data to be shown
----> If we want the live data to shown or visible in the context then we can pas set function in provider

Episode 12

1)Redux- A JS library for predictable and maintainable global state management
2)Redux is not a mandotory library
3)If there is a need then we need to use redux
4)It is a store that keeps all the data
5)There are multiple slices to keep data separately
6)write data-When click on a add to a cart button(for which we have a store-slice) it dispatches an action to a function(reducer) that function modifies the slice of that cart
7)read data- we use selector to read the data that is called subscribing to the store
8)in redux we mutate the original state but behind the scenes immer library helps to find the difference between the original and mutated state
