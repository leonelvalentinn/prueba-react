import { Toaster } from 'sonner'
import reactLogo from './assets/react.svg'
import { Items } from './components/Items'

function App() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Toaster richColors />
      <header className='w-full flex justify-center items-center shadow-[0px_4px_4px_0px_rgba(240,235,240,1)] p-4'>
        <nav className='w-full flex justify-between items-center max-w-7xl'>
          <a href="https://react.dev" target="_blank" className='w-12'>
            <img src={reactLogo} className="w-full" alt="React logo" />
          </a>
          <p className='text-3xl'>Bienvenido</p>
        </nav>
      </header>
      <main className='w-full flex justify-center items-end flex-col max-w-7xl py-10 px-4'>
        <Items />
      </main>
    </div>
  )
}

export default App
