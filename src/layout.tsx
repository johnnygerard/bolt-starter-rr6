import { House } from "@phosphor-icons/react";
import { memo } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <House size="2rem" />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default memo(Layout);
