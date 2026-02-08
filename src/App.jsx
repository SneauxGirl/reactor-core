import './App.css'
import { CustomButton } from './components/button'

function App() {

  return (
    <div className='container'>
        <h1 className="heading">Hello World</h1>
        <h2 className="heading__sm">My First React App</h2>
        <CustomButton label={'Some custom text'} borderColor={'red'}/>
    </div>
  )
}

export default App
