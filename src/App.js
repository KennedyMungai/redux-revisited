import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App()
{
  return (
    <>
      <Header />
      <Auth />
      <Counter />
    </>
  );
}

export default App;
