import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Routes>
          <Route path= '/'
          element={<Main />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
