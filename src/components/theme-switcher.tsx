import { Button } from "@heroui/button";
import { useTheme } from "@heroui/use-theme";
import { memo } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      The current theme is: {theme}
      <Button onPress={() => setTheme("light")}>Light Mode</Button>
      <Button onPress={() => setTheme("dark")}>Dark Mode</Button>
      <Button onPress={() => setTheme("system")}>System Mode</Button>
    </div>
  );
};

export default memo(ThemeSwitcher);
