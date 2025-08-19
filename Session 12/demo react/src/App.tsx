import Header from "./components/Header"
import "./styles/app.css"

function App() {
  let textColor = "red"
  let h2Check = true
  let arr = [1, 2, 3, 4]
  return (
    <>
      <Header></Header>
      <h1 style={{ color: textColor }}>Demo react màu {textColor}</h1>
      {h2Check ? <h2>Đây là thẻ h2</h2> : <h3>Đây là thẻ h3</h3>}
      <p className="blue-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci a sed sit id amet animi, quos molestiae porro alias, aliquid ipsam facilis nostrum veniam modi, nisi accusamus. Accusantium, blanditiis consequatur.</p>
      <ul>
        {arr.map((element) => {
          return <li>{element}</li>
        })}
      </ul>
    </>
  )
}

export default App
