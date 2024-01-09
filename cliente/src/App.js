import './App.css';
import { MainHeader } from './components';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <div className="App">
      <MainHeader />
      <AppRoutes />
    </div>
  );
}

export default App;
