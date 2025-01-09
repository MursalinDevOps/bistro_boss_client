import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({ items, heading, coverImg }) => {
    return (
        <div>
            {heading && <Cover heading="Desserts" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgImg={coverImg}></Cover>}
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