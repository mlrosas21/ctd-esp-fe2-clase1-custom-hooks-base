import { NavDesktop } from './desktop';
import { NavMobile } from './mobile';
import { FC } from 'react';

const Navbar: FC = () => (
  <div className={'container'} style={{ width: '100vw' }}>
    <NavDesktop />
    <NavMobile />
  </div>
);

export default Navbar;
