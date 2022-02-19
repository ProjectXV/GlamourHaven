import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  MdSupervisorAccount,
  MdBolt,
  MdShoppingBag,
  MdInventory,
} from "react-icons/md";
import { FiSliders, FiSettings, FiLogOut } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";
import Logo from "../Logo";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { LogoutDialogue } from "../LogoutDialogue";

const SideBarItemData = [
  {
    id: 0,
    item_name: "Dashboard",
    icon: RiDashboardLine,
    route: `/admin/dashboard`,
    role: ["admin", "staff", "client"],
  },
  {
    id: 1,
    item_name: "Appointments",
    icon: AiOutlineCalendar,
    route: `/appointments`,
    role: ["admin", "staff", "client"],
  },
  {
    id: 2,
    item_name: "Staff",
    icon: MdSupervisorAccount,
    route: `/admin/viewstaff`,
    role: ["admin"],
  },
  {
    id: 3,
    item_name: "Clients",
    icon: IoIosPeople,
    route: `/admin/clients`,
    role: ["admin"],
  },
  {
    id: 4,
    item_name: "Services",
    icon: FiSliders,
    route: `/service`,
    role: ["admin", "staff", "client"],
  },
  {
    id: 5,
    item_name: "Products",
    icon: MdShoppingBag,
    route: `/products`,
    role: ["admin", "staff", "client"],
  },
  {
    id: 6,
    item_name: "Inventory",
    icon: MdInventory,
    route: `/admin/inventory`,
  },
  {
    id: 7,
    item_name: "Settings",
    icon: FiSettings,
    route: `/account/settings`,
  },
  {
    id: 8,
    item_name: "Support",
    icon: TiMessages,
    route: `/contact`,
    role: ["admin", "staff", "client"],
  },
  {
    id: 9,
    item_name: "Log Out",
    icon: FiLogOut,
    route: `/contact`,
    role: ["admin", "staff", "client"],
  },
];

const SideBarItem = (props) => {
  const navigate = useNavigate();
  return (
    <HStack
      _hover={{ color: "brand.300" }}
      cursor="pointer"
      py="8px"
      pl="20px"
      className="sidebaritem"
      id={`sidebaritem-${props.index}`}
      onClick={() => {
        props.setCurrent(props.index);
        navigate(`${props.route}`);
      }}
    >
      <props.icon boxSize={30} pl="20px" />
      <Text>{props.item_name}</Text>
    </HStack>
  );
};

const Sidebar = () => {
  const [current, setCurrent] = React.useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  //logic to set active sidebar item
  React.useEffect(() => {
    var sidebarItemsArray = document.getElementsByClassName("sidebaritem");
    var i;
    for (i = 0; i < sidebarItemsArray.length; i++) {
      sidebarItemsArray[i].className = sidebarItemsArray[i].className.replace(
        "active-sidebaritem",
        ""
      );
      if (sidebarItemsArray.length > 0) {
        sidebarItemsArray[i].classList.remove("active-sidebaritem");
      }
      const itemIndex = current;
      if (sidebarItemsArray[itemIndex] !== undefined)
        sidebarItemsArray[itemIndex].className += " active-sidebaritem";
    }
  }, [current]);

  return (
    <>
      <Box width="15vw" h="100vh">
        <Box pt="20px" width="15vw" h="100vh" bg="white">
          <Box mb="25px" alignItems="center" pl="15px">
            <Logo />
          </Box>
          <Box>
            <Text align="left" pl="20px" fontSize="xs">
              MENU
            </Text>
            {SideBarItemData.slice(0, 7).map((item) => {
              return (
                <SideBarItem
                  item_name={item.item_name}
                  icon={item.icon}
                  index={item.id}
                  setCurrent={setCurrent}
                  route={item.route}
                />
              );
            })}

            <Text
              align="left"
              pl="20px"
              fontSize="xs"
              mt="10px"
              _expanded={{ borderTopWidth: "1px" }}
            >
              GENERAL
            </Text>
            {SideBarItemData.slice(7, 8).map((item) => {
              return (
                <SideBarItem
                  item_name={item.item_name}
                  icon={item.icon}
                  index={item.id}
                  setCurrent={setCurrent}
                  route={item.route}
                />
              );
            })}
            <HStack
              _hover={{ color: "brand.300" }}
              cursor="pointer"
              py="8px"
              pl="20px"
              onClick={() => {
                onOpen();
              }}
            >
              <FiLogOut boxSize={30} pl="20px" />
              <Text>LogOut</Text>
            </HStack>
          </Box>
          <Box alignContent="left" mx={4} bg="#67B6B3" mt="0.5vh" rounded="lg">
            <VStack alignItems="left" p="10px">
              <Center
                w="30px"
                h="30px"
                bg="white"
                color="#FFC107"
                borderRadius="5px"
              >
                <MdBolt />
              </Center>
              <Text textAlign="left" textColor="#FFFFFF" fontSize="sm">
                Go Premium to enjoy advanced stats
              </Text>
              <Button fontWeight="bold" h="30px" fontSize="sm">
                Go Premium
              </Button>
            </VStack>
          </Box>
        </Box>
      </Box>
      <LogoutDialogue isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Sidebar;
