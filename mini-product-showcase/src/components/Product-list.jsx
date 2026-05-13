import Card from "./Card.jsx"


function Products(){

    const products = [
         {
            id: 1,
            title: "Nike Sneakers",
            price: 110,
            rating: 4.5,
            image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
            description: "Comfortable shoes"
        },
        {
            id: 2,
            title: "Macbook air M4",
            price: 899,
            rating: 4.8,
            image: "https://i5.walmartimages.com/asr/e38f7852-22cb-4e81-a459-bd3ce7abf744.229dceefaf6e6bdca663d61c90f847e4.jpeg",
            description: "Powerful engine"
        },
        {
            id: 3,
            title: "Yamaha R6",
            price: 12000,
            rating: 4.7,
            image: "https://static0.topspeedimages.com/wordpress/wp-content/uploads/2022/10/Y8.jpeg?q=50&fit=crop&w=1200&h=675&dpr=1.5",
            description: "600cc sports bike"
        },
        {
            id: 4,
            title: "Ray Ban Aviator",
            price: 261,
            rating: 4.2,
            image: "https://n.nordstrommedia.com/it/708d8f1a-e973-47cf-bbb3-03705f19be26.jpeg?h=368&w=240&dpr=2",
            description: "Awesome shade"
        },
        {
            id: 5,
            title: "Samsung TV",
            price: 1499.99,
            rating: 4,
            image: "https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dwbd944cec/images/067/99/67995282-1.jpg?sw=1000&sh=1000&sm=fit",
            description: 'Samsung - 65" OLED 4k TV'
        }
    ];


    return(
        <>
        <div className="products-container">
            {products.map((product) => (
          <Card key={product.id} {...product}/>  
        ))}
        </div>
        
        </>
    )
}

export default Products