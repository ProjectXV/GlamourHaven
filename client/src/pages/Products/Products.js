import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../../components/PageSections/Header";
import ProductCard from "../../components/Cards/ProductCard";
import { CategoryList } from "../../data/CategoryList";
import Footer from "../../components/PageSections/Footer";
import "../../components/Table/Table.css";
import axios from "axios";
import "../../App.css";

const Products = () => {
  const limit = 5;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [dataShow, setDataShow] = useState([]);

  const fetchProducts = async () => {
    const token = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).token
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
        "https://glamourhaven.herokuapp.com/glamourhaven/products",
        config
      );
      if (response?.data) {
        setLoading(false);

        // Success 🎉
        console.log("response", response);
        setProducts(response.data);
        const initDataShow =
          limit && response.data
            ? response.data.slice(0, Number(limit))
            : response.data;
        setDataShow(initDataShow);
      }
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    const badgeArray = document.getElementsByClassName("badge");
    var i;
    for (i = 0; i < badgeArray.length; i++) {
      badgeArray[i].className = badgeArray[i].className.replace(
        "active-badge",
        ""
      );
      if (badgeArray.length > 0) {
        badgeArray[i].classList.remove("active-badge");
      }
    }
    console.log(badgeArray);
  }, []);

  //pagination
  let pages = 1;

  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(products.length / Number(limit));
    pages = products.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(limit) * page;
    const end = start + Number(limit);

    setDataShow(products.slice(start, end));

    setCurrPage(page);
  };

  const [filterParam, setFilterParam] = useState("All");
  const [searchParam] = useState(["commodity_name", "description"]);

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
      } else if (item.category === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "All") {
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

  return (
    <Box overflowX="hidden">
      <Header />
      <Box px="5vw">
        <HStack w="60%" ml="45%">
          <Text fontSize="50px" py={5} mr="10vw">
            Shop
          </Text>

          <Input
            width="400px"
            placeholder="Search for any product"
            borderRadius="50px"
            onChange={(e) => onInputChange(e)}
            value={query}
          />
        </HStack>

        <Center>
          <Select>
            {CategoryList?.map((category) => {
              return (
                <option>
                  <Button
                    borderRadius={["10px", "50px"]}
                    mx="1vw"
                    key={category.id}
                    py="2"
                    px="5"
                    fontSize="0.9rem"
                    cursor="pointer"
                    className="badge"
                    onClick={() => {
                      setFilterParam(category.value);
                      console.log(filterParam);
                      // setBadgeId(category.id);
                    }}
                  >
                    {category.label}
                  </Button>
                </option>
              );
            })}
          </Select>
        </Center>
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
            {search(dataShow)?.length === 0 ? (
              <Text p={20}>No items found </Text>
            ) : (
              <SimpleGrid mt="6vh" columns={[1, 2, 3, 4, 5, 6]} spacing="auto">
                {search(dataShow).map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </SimpleGrid>
            )}
          </>
        )}
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
      <Footer />
    </Box>
  );
};

export default Products;
