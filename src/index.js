/**
 * @module ReactCreateSideEffect
 */

/**
 * Creates a component that executes a side effect when component mounts. Return a function to handle any clean up when the component unmounts.
 *
 * @example
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import { createSideEffect } from 'react-create-side-effect';
 *
 * const LocationRedirect = createSideEffect(props => {
 *   window.location.replace(props.to);
 * });
 *
 * ReactDOM.render(
 *   <LocationRedirect to="/login" />,
 *   document.getElementById('root')
 * );
 *
 * @example <caption>cleaning up</caption>
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import { createSideEffect } from 'react-create-side-effect';
 *
 * const Body = createSideEffect(props => {
 *   document.body.classList.add(props.className);
 *   return () => document.body.classList.remove(props.className);
 * });
 *
 * ReactDOM.render(
 *   <Body className="mounted" />,
 *   document.getElementById('root')
 * );
 *
 * @name createSideEffect
 * @function
 * @param {function}
 * @return {ReactComponent}
 */
export { default as createSideEffect } from "./createSideEffect";
