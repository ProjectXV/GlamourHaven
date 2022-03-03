import React, { useEffect, useState } from "react";
import { OrderItem } from "../../components/Orders/OrderItem";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Text,
  VStack,
  Input,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
// import OrderList from "../../data/OrderList.json";
import API from "../../utils/api";

const Orders = () => {
  const limit = 5;
  const [loading, setLoading] = React.useState([]);
  const [orders, setOrders] = React.useState([]);
  const [query, setQuery] = useState("");
  const [dataShow, setDataShow] = useState([]);

  const fetchOrders = async () => {
    const client_id = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).account_id
      : null;

    try {
      setLoading(true);
      const response = await API.getClientOrders(client_id);
      if (response?.status === 200) {
        setLoading(false);

        // Success 🎉
        console.log("response", response);
        setOrders(response.data);
        const initDataShow =
          limit && response?.data
            ? response?.data.slice(0, Number(limit))
            : response?.data;
        setDataShow(initDataShow);
      }
    } catch (error) {
      // Error 😨
      setLoading(false);
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
    <Box height="100vh" w="82vw">
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
        {loading ? (
          <SimpleGrid
            mt="6vh"
            mb="6vh"
            columns={[1, 2, 3, 4, 5, 6]}
            spacing="auto"
          >
            <Skeleton width="200px" height="300px" />
            <Skeleton width="200px" height="300px" />
            <Skeleton width="200px" height="300px" />
            <Skeleton width="200px" height="300px" />
            <Skeleton width="200px" height="300px" />
          </SimpleGrid>
        ) : (
          <>
            {orders && (
              <VStack id="Orders">
                {dataShow.length === 0 && (
                  <Text> There are no orders here</Text>
                )}
                {search(dataShow).map((order) => {
                  return <OrderItem order={order} key={order.id} />;
                })}
              </VStack>
            )}
          </>
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
