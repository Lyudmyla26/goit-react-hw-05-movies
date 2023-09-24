import { NavLink } from 'react-router-dom';

export const GoToBack = ({ to }) => {
  return (
    <>
      <NavLink to={to}>Go To Back</NavLink>
    </>
  );
};
