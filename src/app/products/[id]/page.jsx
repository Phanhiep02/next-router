import ProductsDetail from "./ProductsDetail";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const numericId = Number(id);
  return (
    <div>
      <ProductsDetail id={numericId}></ProductsDetail>
    </div>
  );
}
