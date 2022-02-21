import {
  Badge,
  Box,
  Center,
  HStack,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../../components/PageSections/Header";
import ProductCard from "../../components/Cards/ProductCard";
import ProductList from "../../data/ProductList";
import { CategoryList } from "../../data/CategoryList";
import Footer from "../../components/PageSections/Footer";
import "../../components/Table/Table.css";

const Products = () => {
  const [products] = useState(ProductList);
  const [query, setQuery] = useState("");

  //pagination
  const limit = 5;
  const initDataShow =
    limit && products ? products.slice(0, Number(limit)) : products;

  const [dataShow, setDataShow] = useState(initDataShow);

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
            placeholder="Search for any service"
            borderRadius="50px"
            onChange={(e) => onInputChange(e)}
            value={query}
          />
        </HStack>

        <Center>
          <HStack>
            {CategoryList?.map((category) => {
              return (
                <Badge
                  borderRadius={["10px", "50px"]}
                  mx="1vw"
                  key={category.id}
                  py="2"
                  px="5"
                  fontSize="0.9rem"
                  onClick={() => {
                    setFilterParam(category.value);
                    console.log(filterParam);
                  }}
                >
                  {category.label}
                </Badge>
              );
            })}
          </HStack>
        </Center>
        {search(dataShow)?.length === 0 ? (
          <Text p={20}>No items found that match your search query</Text>
        ) : (
          <SimpleGrid mt="6vh" columns={[1, 2, 3, 4, 5, 6]} spacing="auto">
            {search(dataShow).map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </SimpleGrid>
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
