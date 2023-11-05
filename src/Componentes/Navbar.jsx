import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Principal</Link> {' '}
            <Link to='about'>Acerca de</Link> {' '}
            <Link to='contact'>Principal</Link> {' '}
            <Link to='galery'>Principal</Link> {' '}
            <Link to='room'>Principal</Link> {' '}
        </div>
    );
}

export default Navbar;