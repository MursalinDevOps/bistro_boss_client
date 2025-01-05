const SectionTitle = ({subTitle, title}) => {
    return (
        <div className="my-10 w-72 mx-auto">
            <p className="text-[#D99904] text-center">{subTitle}</p>
            <hr />
            <h2 className="text-4xl font-semibold text-center my-3">{title}</h2>
            <hr />
        </div>
    );
};

export default SectionTitle;