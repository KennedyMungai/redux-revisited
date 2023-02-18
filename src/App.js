import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { authActions } from './store';

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
