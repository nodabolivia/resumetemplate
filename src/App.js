import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './navigation/RouterConfig';
import { AuthProvider } from './context/AuthContext';
import './styles/App.css';
import { Header } from './components';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
       <Header></Header>
        <Container className="mt-2">
           
          <RouterConfig></RouterConfig>

        </Container>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
