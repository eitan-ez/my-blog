import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import SidePanel from "../SidePanel/SidePanel";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<BrowserRouter>
            <header>
                <Header />
            </header>

            <aside>
                <SidePanel />
            </aside>

            <main>
                <Routing />
            </main>

            <footer>
                <Footer />
            </footer>
            </BrowserRouter>
        </div>
    );
}

export default Layout;
