import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import menuBg from "../../assets/menu/banner3.jpg";
import PopularMenu from '../home/popularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <section>
                <Cover bgImg={menuBg} heading="Our menu" subHeading="Would you like to try a dish?"></Cover>
            </section>
            <section>
                <PopularMenu></PopularMenu>
            </section>
            {/*  */}
            <section>
                <Cover bgImg={menuBg} heading="Our menu" subHeading="Would you like to try a dish?"></Cover>
            </section>
            <section>
                <PopularMenu></PopularMenu>
            </section>
            {/*  */}
            <section>
                <Cover bgImg={menuBg} heading="Our menu" subHeading="Would you like to try a dish?"></Cover>
            </section>
            <section>
                <PopularMenu></PopularMenu>
            </section>
        </div>
    );
};

export default Menu;