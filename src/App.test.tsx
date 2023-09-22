import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'


test('renders Welcome to the Star Wars people app! header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Star Wars people app!/i);
  expect(linkElement).toBeInTheDocument();
});


const server = setupServer(
  rest.get('https://swapi.dev/api/people/1/', (req, res, ctx) => {
    return res(ctx.json({
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
    }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders the star wars character Luke Skywalker', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Luke Skywalker/i);
  expect(linkElement).toBeInTheDocument();
});