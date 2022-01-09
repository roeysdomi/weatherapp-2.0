import logo from './logo.svg'
import './App.css'
import Main from './pages/main'
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
     <Provider store={store}>
    <div className="App">
      <Main />
    </div>
     </Provider>
  )
}

export default App
