import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then((res) => res.json())
            .then((data) => setMenu(data))
    }, [])
    return (
        <div>
            <SectionTitle subTitle="--- From our menu ---" title="Popular items"></SectionTitle>
        </div>
    );
};

export default PopularMenu;