import React from "react";
import { mount } from "testUtils";
import { createSideEffect } from "../";

test("mounts side effect", () => {
  const spy = jest.fn();
  const SideEffect = createSideEffect(spy);
  mount(<SideEffect test={1} />);
  expect(spy.mock.calls).toEqual([[{ test: 1 }]]);
});

test("unmounts side effect", () => {
  const spy = jest.fn();
  const SideEffect = createSideEffect(props => () => spy(props));
  mount(<SideEffect test={1} key={1} />);
  mount(<SideEffect test={2} key={2} />);
  expect(spy.mock.calls).toEqual([[{ test: 1 }]]);
});
