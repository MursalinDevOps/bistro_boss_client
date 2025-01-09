import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import menuBg from "../../assets/menu/banner3.jpg";
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './menuCategory/MenuCategory';
import dessertCover from "../../assets/menu/dessert-bg.jpeg";
import soupCover from "../../assets/menu/soup-bg.jpg";
import pizzaCover from "../../assets/menu/pizza-bg.jpg";
import saladCover from '../../assets/menu/salad-bg.jpg'
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
            {/* SOUP */}
            <section>
                <MenuCategory heading="Soup" coverImg={soupCover} subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." items={soupMenu}></MenuCategory>
            </section>
            {/* PIZZA */}
            <section>
                <MenuCategory heading="pizza" coverImg={pizzaCover} subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." items={pizzaMenu}></MenuCategory>
            </section>
            {/* DESSERT */}
            <section>
                <MenuCategory heading="Dessert" coverImg={dessertCover} subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." items={dessertMenu}></MenuCategory>
            </section>
            {/* SALAD */}
            <section>
                <MenuCategory heading="salad" coverImg={saladCover} subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." items={saladMenu}></MenuCategory>
            </section>
        </div>
    );
};

export default Menu;