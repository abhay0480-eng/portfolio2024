import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className='bg-[#f4f2ee] h-screen w-11/12 sm:w-11/12 md:w-11/12  lg:w-3/4 xl:w-3/4  2xl:w-3/4   mx-auto'>
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
