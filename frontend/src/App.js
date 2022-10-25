import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Layout from './layout/Layout';


import { Provider } from 'react-redux'
import store from './store'

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              {/* <Route index /*element={} /> */}
            </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
