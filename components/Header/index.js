import ActiveLink from '../ActiveLink'
import UserBar from '../UserBar'

const Header = () => {
  return (
    <>
      <style jsx global>{`
      .nav-link.active {
        color: #ffffff
      }
      `}</style>
      <header className="d-flex bg-dark">
        <nav className="nav flex-grow-1">
          <ActiveLink activeClassName="active" href="/">
            <a className="nav-link">home</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/about">
            <a className="nav-link">about</a>
          </ActiveLink>
        </nav>
        <UserBar />
      </header>
    </>
  )
}

export default Header