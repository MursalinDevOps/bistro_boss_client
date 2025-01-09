import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import menuBg from "../../assets/menu/banner3.jpg";
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './menuCategory/MenuCategory';
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
            <section>
                <Cover bgImg={menuBg} heading="Our menu" subHeading="Would you like to try a dish?"></Cover>
            </section>
            <SectionTitle title="today's offer" subTitle="---Don't Miss---"></SectionTitle>
            <MenuCategory items={offeredMenu}></MenuCategory>
        </div>
    );
};

export default Menu;