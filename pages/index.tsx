import type { NextPage } from 'next';
import { Default } from '../src/components/layouts/Default';
import { Home } from '../src/components/templates';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      <Home />
    </Default>
  );
};

export default HomePage;
