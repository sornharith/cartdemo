const productsArray = [
{
        id:"1",
        name:"n1",
        price: 3.99
    },
    {
        id:"2",
        name:"n2",
        price: 3.59
    },
    {
        id:"3",
        name:"n3",
        price: 5.99
    }
]
// this is the typing from the cidoo v65 keyboard it have a lot of thing that I need to adap with it by the way why am I buying this keyboard for?        
// this is the typing form the macbook pro keyboard
// const productsArray = [];

// async function fetchProductData() {
//     try {
//       const response = await fetch('/cart/add/{product_id}');
//       const data = await response.json();
  
//       // Process the received data and update productArray
//       const updatedProductArray = data.map(item => ({
//         id: item.id.toString(),
//         title: item.title,
//         price: item.price,
//       }));
  
//       // Update productArray with the fetched data
//       productsArray.length = 0;
//       productsArray.push(...updatedProductArray);
      
//       console.log('Product data updated:', productsArray);
//     } catch (error) {
//       console.error('Error fetching product data:', error);
//     }
//   }
  
const getproductData = (id) =>{
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined){
        console.log("Product data does not exist for ID:" + id);
        return undefined;
    }
    return productData;
}

export { productsArray , getproductData };