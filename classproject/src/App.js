import './App.css';
import MyCard from './components/MyCard'
import MyNavbar from './components/MyNavbar';
import MyOffcanvas from './components/MyOffcanvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
  <div className='app'>
    <MyNavbar/>
    <div className='main'>
    <MyOffcanvas/>
    <MyCard/>
    <div>
        <button className='btn btn-danger' onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    </div>
  </div>
  );
}

export default App;
