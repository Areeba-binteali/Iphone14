import Banner from "@/components/banner/banner";
import CategoriesIcons from "@/components/categoriesicons/categoriesicons";
import CTASection from "@/components/ctasection/cta";
import DiscountedProducts from "@/components/discountedProducts/discountedproducts";
import NewArrivals from "@/components/newarrivals/newarrivals";
import ProductCards from "@/components/productcards/productCards";
import SmallBanner from "@/components/smallbanner/smallBanner";


export default function Home() {
  return (
    <div>
      <Banner />
      <SmallBanner />
      <CategoriesIcons />
      <NewArrivals />
      <ProductCards />
      <DiscountedProducts />
      <CTASection />
    </div>
  );
}
