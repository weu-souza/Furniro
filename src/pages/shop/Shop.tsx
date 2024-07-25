import { useState } from "react";
import ProductsCard from "../../components/shared/Card/ProductsCard";
import Filter from "../../components/Shop/Filter/Filter";
import Footing from "../../components/shared/Footing/Footing";
import Heading from "../../components/shared/Heading/Heading";
import Paginator from "../../components/Shop/Paginator/Paginator";
import { useAppSelector } from "../../Service/store/Products/Products.store";

const Shop = () => {
  const products = useAppSelector((state) => state.product.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState<string>('default');
  const filteredProducts = selectedCategory === 'default' ? products : products.filter(product => product.category === selectedCategory);


  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(products.length / itemsPerPage))
    );

    const categories = Array.from(new Set(products.map(product => product.category)));
  return (
    <div className="flex flex-col gap-10 max-w-screen-xl mx-auto">
      <div>
        <Heading />
        <Filter 
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredProducts.length} 
        categories={categories}
        />
      </div>
      <div>
        <ProductsCard products={currentProducts} />
        <div className="flex justify-center pt-20">
          <Paginator
            itemsPerPage={itemsPerPage}
            totalItems={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
            nextPage={nextPage}
          />
        </div>
      </div>
      <Footing />
    </div>
  );
};

export default Shop;
