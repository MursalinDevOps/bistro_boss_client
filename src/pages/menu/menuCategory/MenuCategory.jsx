import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({items}) => {
    return (
        <div className="mb-12">
            <div className="gap-5 grid md:grid-cols-2">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;