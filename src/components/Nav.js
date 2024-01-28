import Logo from '../images/Logo.svg'
import '../style/Nav.css';

function Nav() {
    return (
        <nav className='nav'>
            <ul className="nav-links">
                <img src={Logo} alt="Logo" className='nav-logo' />
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/"> Menu</a>
                </li>
                <li>
                    <a href="/"> Reservations</a>
                </li>
                <li>
                    <a href="/"> Order Online</a>
                </li>
                <li>
                    <a href="/"> Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;