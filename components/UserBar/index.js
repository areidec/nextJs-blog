import { useSelector } from 'react-redux'
import ActiveLink from '../ActiveLink'
import {useState} from 'react'

const UserBar = () => {
  const {isLoggined, name} = useSelector((state) => state.auth)
  const [isOpenDropDown, setDropDown ] = useState(false)

  if (!isLoggined) {
    return (
      <ActiveLink activeClassName="active" href="/login">
        <a className="nav-link">login</a>
      </ActiveLink>
    )
  }

  return (
    <div className={"dropdown mr-5" + (isOpenDropDown ? " show" : "") }>
      <button 
        className="btn btn-secondary dropdown-toggle" 
        type="button"
        onClick={() => setDropDown(!isOpenDropDown)}
      >
        Dropdown button
      </button>
      <div className={"dropdown-menu" + (isOpenDropDown ? " show" : "")}>
        <a className="dropdown-item">Action</a>
        <a className="dropdown-item">Another action</a>
        <a className="dropdown-item">Something else here</a>
      </div>
    </div>
  )
}

export default UserBar