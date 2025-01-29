# React Router v6 Nested Route Issue

This repository demonstrates a problem with nested routes in React Router v6. When a parent route matches, child routes within that parent are not rendered correctly. Instead, a catch-all route (`/*`) is always used.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `/about`.  The About component should render but it does not; instead, the NotFound component renders.

## Solution

The issue is solved by using the `useRoutes` hook instead of `<Routes>` and `<Route>` components.