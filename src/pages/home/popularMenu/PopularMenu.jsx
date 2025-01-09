import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    return (
        <div>
            <SectionTitle subTitle="--- From our menu ---" title="Popular items"></SectionTitle>
            <div className="gap-5 grid md:grid-cols-2">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline border-0 border-b-2 mt-10 mb-3 ">View full menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;