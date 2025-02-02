# What is HeroUI?

HeroUI (formerly known as NextUI) is a UI library for React that helps you build beautiful and accessible user interfaces. Created on top of Tailwind CSS and React Aria.

HeroUI's primary goal is to streamline the development process, offering a beautiful and adaptable system design for an enhanced user experience.

## How to Use the HeroUI CLI

To add the `Link` component run `npx heroui-cli add link`.  
To remove it, run `npx heroui-cli remove link`.

The following table lists the CLI commands to add components to your project.  
Note that some packages include multiple components (e.g. `Checkbox` and `CheckboxGroup` in `@heroui/checkbox`).

| CLI Command                      | Import Statement                                                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| npx heroui-cli add accordion     | `import {Accordion, AccordionItem} from "@heroui/accordion";`                                                                              |
| npx heroui-cli add alert         | `import {Alert} from "@heroui/alert";`                                                                                                     |
| npx heroui-cli add autocomplete  | `import {Autocomplete,AutocompleteSection,AutocompleteItem} from "@heroui/autocomplete";`                                                  |
| npx heroui-cli add avatar        | `import {Avatar, AvatarGroup, AvatarIcon} from "@heroui/avatar";`                                                                          |
| npx heroui-cli add badge         | `import {Badge} from "@heroui/badge";`                                                                                                     |
| npx heroui-cli add breadcrumbs   | `import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";`                                                                         |
| npx heroui-cli add button        | `import {Button, ButtonGroup} from "@heroui/button";`                                                                                      |
| npx heroui-cli add calendar      | `import {Calendar,RangeCalendar} from "@heroui/calendar";`                                                                                 |
| npx heroui-cli add card          | `import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";`                                                                     |
| npx heroui-cli add checkbox      | `import {CheckboxGroup, Checkbox} from "@heroui/checkbox";`                                                                                |
| npx heroui-cli add chip          | `import {Chip} from "@heroui/chip";`                                                                                                       |
| npx heroui-cli add code          | `import {Code} from "@heroui/code";`                                                                                                       |
| npx heroui-cli add date-input    | `import {DateInput,TimeInput} from "@heroui/date-input";`                                                                                  |
| npx heroui-cli add date-picker   | `import {DatePicker,DateRangePicker} from "@heroui/date-picker";`                                                                          |
| npx heroui-cli add divider       | `import {Divider} from "@heroui/divider";`                                                                                                 |
| npx heroui-cli add drawer        | `import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/drawer";`                                      |
| npx heroui-cli add dropdown      | `import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@heroui/dropdown";`                           |
| npx heroui-cli add form          | `import {Form} from "@heroui/form";`                                                                                                       |
| npx heroui-cli add image         | `import {Image} from "@heroui/image";`                                                                                                     |
| npx heroui-cli add input         | `import {Input,Textarea} from "@heroui/input";`                                                                                            |
| npx heroui-cli add input-otp     | `import {InputOtp} from "@heroui/input-otp";`                                                                                              |
| npx heroui-cli add kbd           | `import {Kbd} from "@heroui/kbd";`                                                                                                         |
| npx heroui-cli add link          | `import {Link} from "@heroui/link";`                                                                                                       |
| npx heroui-cli add listbox       | `import {  Listbox,  ListboxSection,  ListboxItem} from "@heroui/listbox";`                                                                |
| npx heroui-cli add modal         | `import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter} from "@heroui/modal";`                                            |
| npx heroui-cli add navbar        | `import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";` |
| npx heroui-cli add pagination    | `import {Pagination, PaginationItem, PaginationCursor} from "@heroui/pagination";`                                                         |
| npx heroui-cli add popover       | `import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";`                                                                 |
| npx heroui-cli add progress      | `import {CircularProgress,Progress} from "@heroui/progress";`                                                                              |
| npx heroui-cli add radio         | `import {RadioGroup, Radio} from "@heroui/radio";`                                                                                         |
| npx heroui-cli add scroll-shadow | `import {ScrollShadow} from "@heroui/scroll-shadow";`                                                                                      |
| npx heroui-cli add select        | `import {Select, SelectSection, SelectItem} from "@heroui/select";`                                                                        |
| npx heroui-cli add skeleton      | `import {Skeleton} from "@heroui/skeleton";`                                                                                               |
| npx heroui-cli add slider        | `import {Slider} from "@heroui/slider";`                                                                                                   |
| npx heroui-cli add snippet       | `import {Snippet} from "@heroui/snippet";`                                                                                                 |
| npx heroui-cli add spinner       | `import {Spinner} from "@heroui/spinner";`                                                                                                 |
| npx heroui-cli add switch        | `import {Switch} from "@heroui/switch";`                                                                                                   |
| npx heroui-cli add table         | `import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@heroui/table";`                                    |
| npx heroui-cli add tabs          | `import {Tabs, Tab} from "@heroui/tabs";`                                                                                                  |
| npx heroui-cli add tooltip       | `import {Tooltip} from "@heroui/tooltip";`                                                                                                 |
| npx heroui-cli add user          | `import {User} from "@heroui/user";`                                                                                                       |

The following components should not be added using the CLI:

| Component Name | Reason                                                                                                                |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| menu           | The `menu` component is undocumented.                                                                                 |
| ripple         | Required by some components like `button`. It is already installed.                                                   |
| spacer         | This is a layout component that can be replaced with Tailwind CSS spacing utilities (e.g., `space-x-4`, `space-y-4`). |
