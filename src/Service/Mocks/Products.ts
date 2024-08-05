import { ICarrinho } from "../api/model/CartModel"
import { IProducts } from "../api/model/ProductsModel"

export const mockProd:IProducts = {
    id:1,
    title:"title",
    colors:[{
    name:"black",
    hex:"#000"
    }],
    discountPercentage:2,
    images:{
        mainImage:"oi",
        gallery:["galery"]
    },
    new:false,
    normalPrice:20,
    rating:5,
    salePrice:20,
    sizes:["xl"],
    sku:"2200",
    tags:["aa"],
    category:"sofa",
    description:{
        short:"short description",
        long:"Long description"
    }
    }
    export const mockProdArr:IProducts[] = [
        {
            id:1,
            title:"title",
            colors:[{
            name:"black",
            hex:"#000"
            }],
            discountPercentage:2,
            images:{
                mainImage:"oi",
                gallery:["galery"]
            },
            new:false,
            normalPrice:20,
            rating:5,
            salePrice:20,
            sizes:["xl"],
            sku:"2200",
            tags:["aa"],
            category:"sofa",
            description:{
                short:"short description",
                long:"Long description"
            }
            },
            {
                id:2,
                title:"title",
                colors:[{
                name:"black",
                hex:"#000"
                }],
                discountPercentage:2,
                images:{
                    mainImage:"oi",
                    gallery:["galery"]
                },
                new:false,
                normalPrice:20,
                rating:5,
                salePrice:20,
                sizes:["xl"],
                sku:"2200",
                tags:["aa"],
                category:"sofa",
                description:{
                    short:"short description",
                    long:"Long description"
                }
                },
                {
                    id:3,
                    title:"title",
                    colors:[{
                    name:"black",
                    hex:"#000"
                    }],
                    discountPercentage:2,
                    images:{
                        mainImage:"oi",
                        gallery:["galery"]
                    },
                    new:false,
                    normalPrice:20,
                    rating:5,
                    salePrice:20,
                    sizes:["xl"],
                    sku:"2200",
                    tags:["aa"],
                    category:"sofa",
                    description:{
                        short:"short description",
                        long:"Long description"
                    }
                    }
    ]

    export const mockCarrinho:ICarrinho[] = [
        {
            id:1,
            title:"Product 1",
            quantidade: 2,
            colors:[{
            name:"black",
            hex:"#000"
            }],
            discountPercentage:2,
            images:{
                mainImage:"oi",
                gallery:["galery"]
            },
            new:false,
            normalPrice:1000,
            rating:5,
            salePrice:20,
            sizes:["xl"],
            sku:"2200",
            tags:["aa"],
            category:"sofa",
            description:{
                short:"short description",
                long:"Long description"
            }
            },
            {
                id:2,
                title:"Product 2",
                quantidade: 1,
                colors:[{
                name:"black",
                hex:"#000"
                }],
                discountPercentage:2,
                images:{
                    mainImage:"oi",
                    gallery:["galery"]
                },
                new:false,
                normalPrice:1500,
                rating:5,
                salePrice:20,
                sizes:["xl"],
                sku:"2200",
                tags:["aa"],
                category:"sofa",
                description:{
                    short:"short description",
                    long:"Long description"
                }
                },
    ]