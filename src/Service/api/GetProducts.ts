const fetchProducts = async () => {
   try {
     const response = await fetch('http://15.229.114.140:3000/products');
     const data = await response.json();
     return data;
   } catch (e) {
     console.error('Error fetching products:', e);
     return [];
   }
 };


export default fetchProducts