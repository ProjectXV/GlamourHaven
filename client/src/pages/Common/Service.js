import {
  Box,
  Center,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import AdminServiceList from "../../data/AdminServiceList";
import Footer from "../../components/PageSections/Footer";
import ServiceCard from "../../components/Cards/ServiceCard";
import React, { useEffect,useState } from "react";
import { MdSearch } from "react-icons/md";
import { FiSliders } from "react-icons/fi";
import axios from "axios";
import "../../components/Table/Table.css";
import "../../App.css";

const Services = () => {
  const limit = 5;
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["service_title", "service_description"]);
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataShow, setDataShow] = useState([]);

   const fetchServices = async () => {
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
         "https://glamourhaven.herokuapp.com/glamourhaven/services",
         config
       );
       if (response?.data) {
         setLoading(false);

         // Success 🎉
         console.log("response", response);
         setService(response.data);
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
     fetchServices();
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
     let page = Math.floor(service.length / Number(limit));
     pages = service.length % Number(limit) === 0 ? page : page + 1;
     range = [...Array(pages).keys()];
   }

   const [currPage, setCurrPage] = useState(0);

   const selectPage = (page) => {
     const start = Number(limit) * page;
     const end = start + Number(limit);

     setDataShow(service.slice(start, end));

     setCurrPage(page);
   };
  
  
  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  }

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <Box overflowY="scroll" h="100%">
      <Text textAlign="center" fontSize="1.5em" my={5}>
        Explore Our Services
      </Text>
      <Center>
        <HStack mb={5}>
          <Input
            width="400px"
            placeholder="Search for any service"
            borderRadius="50px"
            onChange={(e) => onInputChange(e)}
            value={query}
          />
          <Icon as={MdSearch} />
          <Icon as={FiSliders} />
        </HStack>
      </Center>
      <Box>
        {search(dataShow)?.length === 0 ? (
          <Text p={20}>No services match your search query</Text>
        ) : (
          <SimpleGrid columns={[1, 2, 3, 4, 4, 4]} spacing="auto">
            {search(dataShow).map((service) => {
              return <ServiceCard key={service.id} service={service} />;
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
export default Services;
