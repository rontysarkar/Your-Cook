
import './App.css'

import NavBar from './component/NavBar'

function App() {
  return (
    <>
      <header className='container mx-auto lg:px-32 py-10'>
      <NavBar></NavBar>
      </header>
      <main className='container mx-auto lg:px32 py-10 '>
        <div className="bg-img h-40 md:h-80 lg:h-[550px] my-8 bg-no-repeat bg-center bg-contain flex justify-center items-center ">
            <h1 className='text-4xl text-center  text-white'>Discover an exceptional cooking class tailored for you!</h1>
        </div>
      </main>
    </>
  )
}

export default App
