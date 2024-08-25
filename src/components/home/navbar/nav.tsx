import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/auth';
import NavClient from './navClient';

const Nav = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return <NavClient user={user} />;
};

export default Nav;
