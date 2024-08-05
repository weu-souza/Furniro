import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import ProductsCard from "../../src/components/shared/Card/ProductsCard"
import { mockProdArr } from "../../src/Service/Mocks/Products"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../../src/Service/store/store"





describe("ProductsCard",()=>{
    it("should be render 6 card and image have oi in scr", () =>{
       
        render(
       <BrowserRouter>
       <Provider store={store}>
        <ProductsCard products={mockProdArr}/>
        </Provider>
        </BrowserRouter>
        )
        const image = screen.getAllByAltText('title')
        image.forEach((e) =>{
            expect(e).toHaveAttribute('src','oi')
        })
       expect(image).toHaveLength(3)
        

    // logRoles(view.container)


    })
})