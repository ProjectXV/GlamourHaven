import { Badge, Box, Center, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../../components/PageSections/Header";
import ProductCard from "../../components/Cards/ProductCard";
import ProductList from "../../data/ProductList";
import { CategoryList } from "../../data/CategoryList";
import Footer from "../../components/PageSections/Footer";
import "../../components/Table/Table.css";

const Products = () => {
  const limit = 5;
  const initDataShow =
    limit && ProductList ? ProductList.slice(0, Number(limit)) : ProductList;

  const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;

  let range = [];

  if (limit !== undefined) {
    let page = Math.floor(ProductList.length / Number(limit));
    pages = ProductList.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(limit) * page;
    const end = start + Number(limit);

    setDataShow(ProductList.slice(start, end));

    setCurrPage(page);
  };
  return (
    <Box overflowX="hidden">
      <Header />
      <Box px="5vw">
        <Text fontSize="50px" py={5}>
          Shop
        </Text>

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
                >
                  {category.label}
                </Badge>
              );
            })}
          </HStack>
        </Center>
        <SimpleGrid mt="6vh" columns={[1, 2, 3, 4, 5, 6]} spacing="auto">
          {dataShow.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </SimpleGrid>
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
