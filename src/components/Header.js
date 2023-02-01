import React from 'react';
import {
    Button, Col, Container,
    Form, Input, InputGroup, Label, Nav, Navbar,
    NavbarBrand, NavItem, NavLink,
    Row
} from 'reactstrap';

import { ShoppingBag, PhoneCall } from 'react-feather';
import logo from '../images/crdr-logo.svg';

import ThemeSwitcher from '../services/ThemeSwitcher';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const Header = () => (
    <header>
        <Navbar fixed='top' color='light' light expand='xs' className='border-bottom border-grey bg-white' style={{ heignt: 80 }}>

            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
                <img src={logo} alt="logo" className="position-relative img-fluid" />
                {process.env.APP_NAME}
            </NavbarBrand>

            <Nav className='mrx-auto' navbar>
                {/* <NavItem className='d-flex align-items-center'>
                    <Form inline>
                        <InputGroup>
                            <Input type="search" className="mr-3" placeholder="Find products" />
                            <Button type="submit" color="info" outline>Search</Button>
                        </InputGroup>
                    </Form>
                </NavItem> */}
                <NavItem className='d-flex align-items-center'>
                    <PhoneCall className='m-2' />
                    <Label className='align-items-center m-2'>+1 855-766-5885</Label>
                    <ShoppingBag className='m-2' />
                </NavItem>

                {/* <NavItem className='d-flex align-items-center'>
                    <NavLink className='font-weight-bold' href='/'>
                        <img src={AVATAR} alt='Avatar' className='img-fluid rounded-circle' style={{ width: 36 }} />
                        Sign Up
                    </NavLink>
                </NavItem> */}
            </Nav>
        </Navbar>
    </header>
);

export default Header;