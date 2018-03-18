<!-- Generated from README.hbs using jsdoc2md -->

# react-create-side-effect

Declarative side effects!

## Install

```
yarn add react-create-side-effect react
```

<a name="module_ReactCreateSideEffect"></a>

## ReactCreateSideEffect

<a name="module_ReactCreateSideEffect..createSideEffect"></a>

### ReactCreateSideEffect~createSideEffect() ⇒ <code>ReactComponent</code>

Creates a component that executes a side effect when component mounts. Return a function to handle any clean up when the component unmounts.

**Kind**: inner method of [<code>ReactCreateSideEffect</code>](#module_ReactCreateSideEffect)

| Type                  |
| --------------------- |
| <code>function</code> |

**Example**

```js
import React from "react";
import ReactDOM from "react-dom";
import { createSideEffect } from "react-create-side-effect";

const LocationRedirect = createSideEffect(props => {
  window.location.replace(props.to);
});

ReactDOM.render(
  <LocationRedirect to="/login" />,
  document.getElementById("root")
);
```

**Example** _(cleaning up)_

```js
import React from "react";
import ReactDOM from "react-dom";
import { createSideEffect } from "react-create-side-effect";

const Body = createSideEffect(props => {
  document.body.classList.add(props.className);
  return () => document.body.classList.remove(props.className);
});

ReactDOM.render(<Body className="mounted" />, document.getElementById("root"));
```
