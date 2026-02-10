import { notFound } from "next/navigation";

import CategoryProductsView from "@/components/category/category-products-view";
import { products } from "@/data/products";
import { getCategoryFromSlug } from "@/data/categories";

type CategoryPageProps = {
  params?: Promise<{
    id: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  if (!id || Array.isArray(id)) {
    notFound();
  }

  const category = getCategoryFromSlug(id);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) => product.category === category);

  return <CategoryProductsView category={category} products={categoryProducts} />;
}
