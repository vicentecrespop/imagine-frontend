import Image from "next/image";
import styled from "styled-components";
import { Container } from "@/styles/utils";

import Logo from '@/public/images/logo.png'
import ShoppingCart from '@/public/images/carrinho.png'
import Link from "next/link";

const StyledHeader = styled.header`
    margin: 1.87rem 0 3.125rem 0; 
`

const Navbar = styled.nav`
    ${Container};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MenuList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2.5rem;
    align-items: center;
`

const MenuItem = styled.li`
    font-size: 16px;
    font-weight: 700;
    a {
        text-decoration: none;
        color: #000;
    }
    a:hover {
        color: ${({ theme }) => theme.colors.primary}
    }
`



const Header = () => {
    return (
        <StyledHeader>
            <Navbar>
                <Image src={Logo} width={200} height={100} alt="Logo"/>
                <MenuList>
                    <MenuItem>
                        <Link href="/">
                            Home
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/about">
                            Sobre
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/cart">
                            <Image src={ShoppingCart} width={52} height={52} alt="Carrinho" />
                        </Link>
                    </MenuItem>
                </MenuList>
            </Navbar>
        </StyledHeader>
    )
}

export default Header