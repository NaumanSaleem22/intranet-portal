import Navbar from './Navbar';
import Topbar from './Topbar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <>
            <Topbar/>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
}

export default Layout;
