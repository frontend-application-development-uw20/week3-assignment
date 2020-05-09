This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes

- React Router
  https://reacttraining.com/react-router/web/guides/quick-start
  needs to be wrapped inside <router> tag, easier to be in index.js
  Link
- Google Fonts
  Copy and paste link to index.html
- Font Awesome
add in index.html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
- Bootstrap
  https://react-bootstrap.github.io/getting-started/introduction
- use <React.Fragment> as parent container instead of <div>
- import can be used for img source
<img src={logo} alt="store" className="navbar-brand">
- context provider/consumer (this.props.children)
  // generating tags
  <ProductConsumer>
    {(value)=>{
      return value.products.map(product=>{
        return <Product key={product.id} product={product}/>
      })
    }}
  </ProductConsumer>
- Composition vs inheritance (https://reactjs.org/docs/composition-vs-inheritance.html)
- Object destructuring    
  state={
    products:storeProducts,
    detailProduct:detailProduct
  }
  ...this.state,
- getting file from public folder does not need ./ or ../. Public folder is the default path
- PropTypes, set data types and required data


- CSS (App.css)
  Use :root to set up parameters for colors
  bootstrap is overwriting body tag font, so use "!important" for body font
- Overflow: https://css-tricks.com/almanac/properties/o/overflow/
-   .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
  }
- componentDidMount(): https://reactjs.org/docs/react-component.html
- conditional rendering   
  border-color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
