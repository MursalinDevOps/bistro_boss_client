import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import menuBg from "../../assets/menu/banner3.jpg";
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './menuCategory/MenuCategory';
import dessertCover from "../../assets/menu/dessert-bg.jpeg";
const Menu = () => {
    const [menu] = useMenu();
    const offeredMenu = menu.filter(item => item.category === "offered");
    const dessertMenu = menu.filter(item => item.category === "dessert");
    const pizzaMenu = menu.filter(item => item.category === "pizza");
    const saladMenu = menu.filter(item => item.category === "salad");
    const soupMenu = menu.filter(item => item.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* MAIN COVER */}
            <section>
                <Cover bgImg={menuBg} heading="Our menu" subHeading="Would you like to try a dish?"></Cover>
            </section>
            {/* OFFERED */}
            <section>
            <SectionTitle title="today's offer" subTitle="---Don't Miss---"></SectionTitle>
            <MenuCategory items={offeredMenu}></MenuCategory>
            </section>
            {/* DESSERT */}
            <section>
            <MenuCategory heading="Dessert" coverImg={dessertCover}  items={dessertMenu}></MenuCategory>
            </section>
        </div>
    );
};

export default Menu;