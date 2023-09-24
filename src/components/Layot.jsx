import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
export const Layot = () => {
  return (
    <>
      {' '}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
