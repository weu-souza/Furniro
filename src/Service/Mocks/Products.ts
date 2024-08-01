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