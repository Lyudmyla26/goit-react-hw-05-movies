import { NavLink, useLocation } from 'react-router-dom';

export const GoToBack = ({ to }) => {
  const location = useLocation();
  return (
    <>
      <NavLink to={to}>Go To Back</NavLink>
    </>
  );
};
