import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom";
const Navbar = () => {
    const [searchParms] = useSearchParams();
    const todoData = searchParms.get("todos");
  return (
    <nav>
        <Link to="/" className={todoData === null ? "active" : ""}>All</Link>
        <Link to="/?todos=active" className={todoData === "active" ? "active" : ""}>Active</Link>
        <Link to="/?todos=completed" className={todoData === "completed" ? "active" : ""}>Completed</Link>
    </nav>
  )
}

export default Navbar