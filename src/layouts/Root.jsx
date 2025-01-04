import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";

const Root = () => {
    return (
        <div>
            <nav>

            </nav>
            <section>
                <Outlet></Outlet>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;