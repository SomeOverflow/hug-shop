import { products } from "./global";
import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold dark:text-white">Products</h3>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4">
          {products.map((p, index) => (
            <ProductItem data={p} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}