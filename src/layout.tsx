import { Link } from "@heroui/link";
import { Navbar, NavbarBrand } from "@heroui/navbar";
import { House } from "@phosphor-icons/react";
import { memo } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar>
        <NavbarBrand>
          <Link href="/">
            <House />
            <span>AppName</span>
          </Link>
        </NavbarBrand>
      </Navbar>
      <div className="grid flex-1 place-items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Layout);
