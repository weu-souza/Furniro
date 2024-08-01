import {fireEvent, getByRole, logRoles, render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import { mockProdArr } from "../../src/Service/Mocks/Products"
import { BrowserRouter } from "react-router-dom"
import Card from "../../src/components/Home/FirstComponent/Card"

describe("HomeCard",()=>{
    it("should be redirect", () =>{
       
       const view =  render(
        <BrowserRouter>
       <Card />
       </BrowserRouter>
        )
        const link = screen.getByRole('link', { name: 'BUY Now' })

        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href','/shop')
        logRoles(view.container)

        fireEvent.click(link);
        expect(window.location.pathname).toBe('/shop');
    })   
})