import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Input,
  Table
} from "reactstrap";
import { IconContext } from "react-icons";
import {
  FaChartArea,
  FaFileInvoice,
  FaRegChartBar,
  FaShoppingCart,
  FaUserCircle,
  FaUsers,
  FaBell,
  FaKey,
  FaSignOutAlt
} from "react-icons/fa";

import { Container, Sidebar, Logo, Main, MainContent } from "./style";

export default function Layout() {
  return (
    <IconContext.Provider value={{ className: "react-icon" }}>
      <Container>
        <Sidebar>
          <Logo>
            React<span class="text-dark bg-light pr-2">Strap</span>
          </Logo>

          <Nav vertical>
            <NavItem>
              <NavLink href="#">
                <FaChartArea />
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FaFileInvoice />
                Orders
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FaShoppingCart />
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FaUsers />
                Customers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FaRegChartBar />
                Reports
              </NavLink>
            </NavItem>
          </Nav>
        </Sidebar>
        <Main>
          <Navbar color="light" light expand="md">
            <Input type="search" name="search" placeholder="Search..." />
            <Nav className="ml-auto pl-3" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <FaBell />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>New Order Available</DropdownItem>
                  <DropdownItem>You got 3 messages</DropdownItem>
                  <DropdownItem>Order 91987 was canceled</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  John Doe
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <FaKey /> Account Settings
                  </DropdownItem>
                  <DropdownItem>
                    <FaUserCircle /> Edit Profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <FaSignOutAlt /> Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Navbar>
          <MainContent>
            <h1>Dashboard</h1>
            <br />
            <br />
            <Table size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </MainContent>
        </Main>
      </Container>
    </IconContext.Provider>
  );
}
