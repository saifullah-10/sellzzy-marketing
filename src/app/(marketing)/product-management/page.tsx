import BundleSection from "@/components/ui/product-management/bundle-section";
import ControlProducts from "@/components/ui/product-management/control-products";
import CustomCollections from "@/components/ui/product-management/custom-collections";
import ProductHero from "@/components/ui/product-management/product-hero";

const ProductManagementPage: React.FC = () => {
  return (
    <>
      <ProductHero />
      <BundleSection />
      <CustomCollections />
      <ControlProducts />
    </>
  );
};

export default ProductManagementPage;