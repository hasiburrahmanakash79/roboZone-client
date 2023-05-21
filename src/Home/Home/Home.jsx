import useTitle from "../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CustomerReview from "../CustomerReview/CustomerReview";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Seller from "../Seller/Seller";


const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner></Banner> 
           <PhotoGallery></PhotoGallery>
           <Category></Category>
           <CustomerReview></CustomerReview>
           <Seller></Seller>
        </div>
    );
};

export default Home;