import Banner from "./banner/Banner";
import Category from "./category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className="my-12">
                <div className="my-10 w-72 mx-auto">
                    <p className="text-[#D99904] text-center">--- From 8 am to 11 pm ---</p>
                    <hr />
                    <h2 className="text-4xl font-semibold text-center my-3">ORDER ONLINE</h2>
                    <hr />
                </div>
                <Category></Category>
            </section>
        </div>
    );
};

export default Home;