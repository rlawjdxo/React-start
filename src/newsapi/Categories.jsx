import "./Categories.css";
import { NavLink } from "react-router-dom";

const Categories = ({category, onSelect}) => {
  return (
    <div className="categoriesBlock">
        { Categories.map(c=>(
            <div className="category" >
                <NavLink
                    activeClassName="active"
                    exact={c.name === 'all'}
                    to={c.name === 'all' ? '/' : '/'+c.name}>
                    {c.text}
                </NavLink>
            </div>
        ))}
    </div>
  )
}

export default Categories