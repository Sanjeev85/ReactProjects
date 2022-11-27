import './App.css';
import { useRef } from "react"



function App() {
  const txtTitle = useRef()
  const hexColor = useRef()


  const submit = (e) => {
    e.preventDefault()
    const title = txtTitle.current.value
    const color = hexColor.current.value
    alert(`${title} ${color}`)
    txtTitle.current.value = ""
    hexColor.current.value = ""
  };


  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder='color title..' />
      <input ref={hexColor} type="color" />
      <button>Add</button>
    </form>
  )
}


// function App({library}) {
//   const [emotion, setEmotion] = useState("happy")
//   useEffect(()=>{
//     console.log(`It's ${emotion} right now`)
//   }, [emotion])

//   let toogleEmotion = () => {
//     if (emotion === 'happy') return 'sad'
//     else return 'happy'
//   }

//   return (
//     <div className="App">
//       <h1>Current emotion is {emotion}</h1>
//       <button onClick={()=> setEmotion(toogleEmotion())}>toogle Emotion</button>
//     </div>
//   );
// }
export default App;