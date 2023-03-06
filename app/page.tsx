import styles from './Home.module.css';
import About from './pages/About/layout';
import Projects from './pages/Projects/layout';
import Pages from './pages/layout';

const Home = (): Promise<JSX.Element> | JSX.Element => {
  return <Pages pages={[<About key={'about'} />, <Projects key={'projects'} />]} />;
};

export default Home;
