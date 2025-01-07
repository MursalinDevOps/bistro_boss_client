import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";

const PopularMenu = () => {
    const [popularMenu, setPopularMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then((res) => res.json())
            .then((data) => {
                const popular = data.filter(item => item.category === "popular")
                setPopularMenu(popular)})
    }, [])
    // console.log(popularMenu)
    return (
        <div>
            <SectionTitle subTitle="--- From our menu ---" title="Popular items"></SectionTitle>
            <div className="gap-5 grid md:grid-cols-2">
                {
                    popularMenu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;