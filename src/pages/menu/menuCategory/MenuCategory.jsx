import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({ items, heading, coverImg , subHeading }) => {
    return (
        <div>
            {heading && <Cover heading={heading} subHeading={subHeading} bgImg={coverImg}></Cover>}
            <div className="mb-12">
                <div className="gap-5 grid md:grid-cols-2">
                    {
                        items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;