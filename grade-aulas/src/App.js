import logo from './logo.svg';

import HomePanel from './components/HomePanel';
import ResponsiveAppBar from './components/ResponsiveAppBar';


function App() {
  return (
    <div >
      <header>
        <ResponsiveAppBar/>
        <HomePanel/>

      </header>
    </div>
  );
}

export default App;
