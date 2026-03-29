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
\*useEffect will be called after the component renderered
--->Shimmer UI- before the API loads there will be dummy page
