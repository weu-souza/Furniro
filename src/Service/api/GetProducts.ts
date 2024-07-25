const fetchProducts = async () => {
   try {
     const response = await fetch('http://localhost:3000/products');
     const data = await response.json();
     return data;
   } catch (e) {
     console.error('Error fetching products:', e);
     return [];
   }
 };


export default fetchProducts