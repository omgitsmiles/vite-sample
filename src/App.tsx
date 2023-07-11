import './App.css'
import Test from './test'
import reactIMG from './assets/react.svg'

const App: React.FC = () => {

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      </div>
      <Test imageSrc={reactIMG}/>
      <Test imageSrc={'https://www.svgrepo.com/show/513696/banana.svg'}/>
      <Test imageSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png'}/>
    </>
  )
}

export default App
