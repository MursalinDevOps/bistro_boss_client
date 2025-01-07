const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex items-center gap-4">
            <img className="w-[118px] h-[104px] rounded-r-full rounded-b-full border-2 border-[#d99827]" src={image} alt="" />
            <div>
                <h3 className="text-xl font-medium uppercase">
                    {name}--------
                </h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#d99827] font-medium">${price}</p>
        </div>
    );
};

export default MenuItem;