import styled from "styled-components";

function NavBar() {
        return (
                <Nav>
                        <LogoLink href="/">
                                <Logo src="/logo-cc.png" alt="Logo CC" />
                        </LogoLink>

                        <Menu>
                                <MenuItem href="/about">About</MenuItem>
                                <MenuItem href="/services">Services</MenuItem>
                                <MenuItem href="/contact">Contact</MenuItem>
                        </Menu>
                </Nav>
        );
}

export default NavBar;

/* Styled components: posicionamos el Nav fijo en la parte superior
     y dejamos el logo en la esquina superior izquierda con tamaño estándar */
const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    background: transparent; /* si quieres fondo, cámbialo a rgba(...) */
    z-index: 1000;
`;

const LogoLink = styled.a`
    display: inline-flex;
    align-items: center;
    text-decoration: none;
`;

const Logo = styled.img`
    height: 48px; /* tamaño estándar */
    width: auto;
    display: block;
    margin: 0;
    user-select: none;
`;

const Menu = styled.div`
    margin-left: auto;
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const MenuItem = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 0.35rem 0.6rem;
    border-radius: 6px;
    transition: background 150ms, color 150ms;
    font-weight: 500;
    &:hover {
        background: rgba(255,255,255,0.06);
    }
`;