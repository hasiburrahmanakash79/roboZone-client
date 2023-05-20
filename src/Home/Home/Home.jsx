import useTitle from "../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CustomerReview from "../CustomerReview/CustomerReview";
import PhotoGallery from "../PhotoGallery/PhotoGallery";


const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner></Banner> 
           <Category></Category>
           <PhotoGallery></PhotoGallery>
           <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;