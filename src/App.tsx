import './App.css'
import Test from './components/test'
import reactIMG from './assets/react.svg'
import Login from './components/Login'

const App: React.FC = () => {

  return (
    <>
      {/* <Test imageSrc={reactIMG}/>
      <Test imageSrc={'https://www.svgrepo.com/show/513696/banana.svg'}/>
      <Test imageSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png'}/> */}
      <Login />
    </>
  )
}

export default App
