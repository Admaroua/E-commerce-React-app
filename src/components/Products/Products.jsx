import Product from "../Product/Product"


function Products() {
    const products=[
        {id:1, name:'product1', description:'description1'},
        {id:2, name:'product2', description:'description2'},
        {id:3, name:'product3', description:'description3'}

    ]
  return (
    <div className="container mx-auto w-full grid justify-center place-items-center gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  ">
        {
            products.map(product=><Product key={product.id}/>)
        }


    </div>
  )
}

export default Products