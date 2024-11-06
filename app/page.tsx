import HeroSection from "@/components/sections/HeroSection";
import FlashSales from "@/components/sections/FlashSales";
import CategoriesSection from "@/components/sections/CategoriesSection";
import BestSellers from "@/components/sections/BestSellers";
import PromoBanner from "@/components/sections/SpeakerPromo";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import NewArrivals from "@/components/sections/NewArrivals";
import { getProducts, getCategories, getProductsByCategory } from "@/lib/api";
import QualitiesSection from "@/components/sections/QualitiesSection";

export default async function Home() {

  const [products, categories, womensProducts] = await Promise.all([
    getProducts(8),
    getCategories(),
    getProductsByCategory("women's clothing"),
  ]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:px-0">
      <HeroSection categories={categories} />
      <FlashSales products={products} />
      <CategoriesSection />
      <BestSellers products={womensProducts} />
      <PromoBanner />
      <FeaturedProducts products={products} />
      <NewArrivals />
      <QualitiesSection />
    </main>
  );
}
