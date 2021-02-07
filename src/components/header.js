import PropTypes from "prop-types"
import React from "react"
import { Link as ReachLink } from "gatsby"

import { Flex, Stack, Box, Text, Link, useColorMode } from "@chakra-ui/react"
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

import ThemeToggle from "./toggle-theme"
import Logo from "./images/Logo"

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}

const LinkItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link as={ReachLink} to={to} style={{ boxShadow: "none" }}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen }) => (
  <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <LinkItem to="/">Contacter</LinkItem>
      <LinkItem to="/">Services</LinkItem>
      <LinkItem to="/">Compétences</LinkItem>
      <LinkItem to="/">Projets</LinkItem>
      <ThemeToggle />
    </Stack>
  </Box>
)
const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      w="100%"
      mb={4}
      p={4}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const { colorMode } = useColorMode()
  return (
    <header>
      <NavBarContainer bg={colorMode === "light" ? "teal" : "#310A31"}>
        <Logo w="100px" siteTitle={siteTitle} />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
