import SectionTitle from "../../components/SectionTitle";
import Banner from "./banner/Banner";
import Category from "./category/Category";
import PopularMenu from "./popularMenu/PopularMenu";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className="my-12">
                <SectionTitle subTitle={'--- From 8 am to 11 pm ---'} title={'ORDER ONLINE'}></SectionTitle>
                <Category></Category>
                <PopularMenu></PopularMenu>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;