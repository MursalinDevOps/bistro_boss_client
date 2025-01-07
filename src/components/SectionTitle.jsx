const SectionTitle = ({ subTitle, title }) => {
    return (
        <div className="my-10 w-fit mx-auto">
            <p className="text-[#D99904] text-center uppercase">{subTitle}</p>

            <h2 className="text-4xl font-semibold text-center my-3 uppercase border-y-2 py-4">{title}</h2>

        </div>
    );
};

export default SectionTitle;