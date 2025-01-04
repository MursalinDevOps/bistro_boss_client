import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <nav>

            </nav>
            <section>
                <Outlet></Outlet>
            </section>
            <footer>

            </footer>
        </div>
    );
};

export default Main;