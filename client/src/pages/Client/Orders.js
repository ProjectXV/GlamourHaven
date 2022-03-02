import React, { useEffect, useState } from "react";
import { OrderItem } from "../../components/Orders/OrderItem";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Center,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import OrderList from "../../data/OrderList.json";

const Orders = () => {
  const limit = 5;
  const [loading, setLoading] = React.useState([]);
  const [orders, setOrders] = React.useState(OrderList);
  const [query, setQuery] = useState("");
  const [dataShow, setDataShow] = useState([]);

  const fetchOrders = async () => {
    const token = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).token
      : null;

    const client_id = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).account_id
      : null;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/glamourhaven/client-lnm-orders/${client_id}/`,
        config
      );
      if (response?.data) {
        setLoading(false);

        // Success 🎉
        console.log("response", response);
        setOrders(response.data);
        const initDataShow =
          limit && response.data
            ? response.data.slice(0, Number(limit))
            : response.data;
        setDataShow(initDataShow);
      }
    } catch (error) {
      // Error 😨
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
      }
      console.log(error);
    }
  };

  //pagination
  let pages = 1;

  let range = [];
  if (limit !== undefined) {
    let page = Math.floor(orders.length / Number(limit));
    pages = orders.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(limit) * page;
    const end = start + Number(limit);

    setDataShow(orders.slice(start, end));

    setCurrPage(page);
  };

  const [searchParam] = useState(["placer"]);

  function search(items) {
    // eslint-disable-next-line array-callback-return
    return items.filter((item) => {
      /*
    // in here we check if our region is equal to our c state
    // if it's equal to then only return the items that match
    // if not return All the countries
    */
      if (searchParam === "") {
        return items;
      } else {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  }

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Box height="100vh" w="82vw" bg="red">
      <Breadcrumb
        p={5}
        fontSize="1em"
        fontFamily="monospace"
        textTransform="uppercase"
        ml={20}
        spacing="8px"
        separator={<MdKeyboardArrowRight color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={{ pathname: `#` }}>
            Your-Account
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Orders</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Input
        width="400px"
        placeholder="Search for any order"
        borderRadius="50px"
        onChange={(e) => onInputChange(e)}
        value={query}
      />

      <Box width="100%" mt="5">
        {orders && (
          <VStack id="Orders">
            {orders.length === 0 && <Text> There are no orders here</Text>}
            {orders.map((order) => {
              return <OrderItem order={order} key={order.id} />;
            })}
          </VStack>
        )}
      </Box>

      {pages > 1 ? (
        <div className="table__pagination">
          <div className="table__pagination_text">Pages</div>
          {range.map((item, index) => (
            <div
              key={index}
              className={`table__pagination-item ${
                currPage === index ? "active" : ""
              }`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </Box>
  );
};

export default Orders;
