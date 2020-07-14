import React, { useState } from "react"
import { connect } from "react-redux"
import s from './header.module.scss'
import { setLanguageData, scrollToElementFunc } from '../../redux/appActions'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

function NavbarComponent({ language, setLanguageData, scrollToElementFunc }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
  const toggle = () => setOpen(!isOpen)

  const linkHandler = (ref) => {
    scrollToElementFunc(ref)
    toggle()
  }

  return (
    <div>
      <Navbar color="light" light expand="md" className="shadow-sm">
        <NavbarBrand
          onClick={() => linkHandler('Khoroshevskyi Ivan')}>
          {language.name}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                onClick={() => linkHandler('About')}>
                {language.linkAbout}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => linkHandler('Skills')}>
                {language.linkSkills}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => linkHandler('Experience')}>
                {language.linkExperience}</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown
                size="sm"
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
                style={{ paddingTop: '3px' }}>
                <DropdownToggle caret
                  className={`btn btn-light ${s.language_select}`}
                  style={{ color: "rgba(0,0,0,.5)" }}>
                  {language.selectLanguages}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => setLanguageData('en')}>
                    {language.english}
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => setLanguageData('ru')}>
                    {language.russion}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => linkHandler('Contacts')}>
                {language.linkContacts}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = (state) => ({
  language: state.app.language.navbar
})

const mapDispatchToProps = {
  setLanguageData, scrollToElementFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
