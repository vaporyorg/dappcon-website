import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from 'theme'
import { DappconLogoSmall } from 'components/Svg'

const StyledLogoLink = styled(Link)`
  position: fixed;
  top: 22px;
  left: 25px;
  z-index: 1;
`

const Navbar = ({ location: { pathname } }) => (
  <StyledLogoLink to="/" title="Logo">
    <DappconLogoSmall fill={pathname === '/' ? colors.bgWhite : colors.black} />
  </StyledLogoLink>
)

export default Navbar