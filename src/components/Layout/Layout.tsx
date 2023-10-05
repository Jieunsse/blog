import Header from './Header/index';
import Footer from './Footer/index';


const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Header />

            <main>
                {props.children}
            </main>

            <Footer />
        </>
    );
};


export default Layout;