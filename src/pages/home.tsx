import { Button } from "@heroui/button";
import { memo } from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Button>Click Me</Button>
    </div>
  );
};

export default memo(HomePage);
