import "./app.scss"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import MacWindow from "./components/windows/MacWindow"

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <MacWindow>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aut, fugit eveniet est, dolorum veritatis, quam ducimus delectus quas nobis molestiae possimus aliquid! Minus reiciendis dicta sed adipisci ea nisi debitis aut voluptatum ut labore omnis optio molestias assumenda fuga rerum autem similique soluta suscipit maxime, mollitia corrupti necessitatibus architecto sapiente! Quidem fugiat sequi nesciunt.</p>
      </MacWindow>
    </main>
  )
}

export default App
