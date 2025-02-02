import { House } from "@phosphor-icons/react";
import { memo } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <House />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="grid flex-1 place-items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Layout);
