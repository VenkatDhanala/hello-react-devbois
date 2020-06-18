import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import App from '../components/App';
import { unmountComponentAtNode } from 'react-dom';

const initialState = {developer:[]};
const mockStore = configureStore();
let store, container;

beforeEach(()=>{
  store = mockStore(initialState);
  container = document.createElement("div");
})

afterEach(()=>{
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

test('renders learn react link', () => {
  const { getByText } = render(<App store={store}/>, container);
  const linkElement = getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
