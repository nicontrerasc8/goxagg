import { notFound } from "next/navigation";

import CategoryProductsView from "@/components/category/category-products-view";
import { products } from "@/data/products";
import { getCategoryFromSlug } from "@/data/categories";

type Params = {
  params: {
    id: string;
  };
};

export default function CategoryPage({ params }: Params) {
  const category = getCategoryFromSlug(params.id);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) => product.category === category);

  return <CategoryProductsView category={category} products={categoryProducts} />;
}
