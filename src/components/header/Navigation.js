import React from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';


const Navigation = () => {
    return(
        <div>
             <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarBrand href="/">Menu</NavbarBrand>
                    <NavbarBrand href="/">Lunch & Dinner</NavbarBrand>
                    <NavbarBrand href="/">Gift Voucher</NavbarBrand>
                    <NavbarBrand href="/">About Us</NavbarBrand>
                </div>
             </Navbar>
        </div>

    );

}
export default Navigation;