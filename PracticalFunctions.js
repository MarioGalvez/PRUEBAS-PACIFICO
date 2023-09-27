const productSearch = async (dataBaseURL, id, name, price) => {
  const res = await fetch(dataBaseURL);
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  
  const data = await res.json();

  let dataArray = await [...data];

  dataArray.forEach(product => {
    if(product.product_name === name || product.product_id === id || product.price === price ){
      return product
    }
  })
}

const cartTotal = (dataBaseURL, cart) => {
  let cartArray = [...cart];
  let total = 0;
  cartArray.forEach(dictionary => {
    const product = productSearch(dataBaseURL, dictionary.product_id);
    
    total += (product.price * dictionary.quantity)
    
  })

  return total;
}

const discount = (cart) => {
  let cartArray = [...cart];
  let totalDiscount = 0;
  let total = 0;

  cartArray.forEach(dictionary => {
    console.log(dictionary);
    const price = dictionary.price;
    const discount = dictionary.discount_percentage;
    
    totalDiscount += price * (discount);
    total += price;
  })

  console.log(total)
  return total - totalDiscount;

}

const topSelling = (orders, top) => {

  orderArray = [...orders].sort((a,b) => b.quantity - a.quantity);

  topN = orderArray.slice(0 , top)

  return topN;

}
