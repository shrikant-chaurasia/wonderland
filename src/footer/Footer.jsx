import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarBrand,Navbar,Container} from 'reactstrap';

class AppFooter extends React.Component{
    render() {
        return(
            <div className="fixed-bottom">  
                <Navbar color="dark" dark>
                    <Container>
                        <NavbarBrand>Footer</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}


export default AppFooter;