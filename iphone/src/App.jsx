import Navbar from "./components/Navbar"
import Highlights from "./components/Highlights"
import Hero from "./components/Hero"
export default function App() {
  return (
   <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlights/>
   </main>
  )
}