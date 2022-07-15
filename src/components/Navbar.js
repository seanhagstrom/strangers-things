import { NavLink } from 'react-router-dom';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <header className='flex'>
      <p className='flex center'>Stranger's Things</p>
      <nav className='flex flex-end space-evenly'>
        <NavLink to='/' className={'none'}>
          Home
        </NavLink>
        <NavLink to='posts' className={'none'}>
          Posts
        </NavLink>
        <NavLink to='auth' className={'none'}>
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
