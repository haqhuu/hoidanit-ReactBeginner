import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListToDo from './Todos/ListToDo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Simple to do app
        </p>

        {/* <MyComponent /> */}
        <ListToDo />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />

    </div>
  );
}

export default App;
