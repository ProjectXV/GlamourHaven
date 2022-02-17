import React, {useState} from 'react'
import {
    Button,
    HStack,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuOptionGroup,
    MenuList,
    Spacer,
    MenuDivider,
    Text,
    MenuItem
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import "./Table.css";
const TableStaff = (props) => {

  const initDataShow =
    props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;

  const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;

  let range = [];

  if (props.limit !== undefined) {
    let page = Math.floor(props.bodyData.length / Number(props.limit));
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);

    setDataShow(props.bodyData.slice(start, end));

    setCurrPage(page);
  };

  return (
    <div>
      <div className="table-wrapper">
        <HStack>
          <Text pb={3} px={3} fontSize="1.3em" fontWeight='400'>
             Staff Members List
          </Text>
          <Spacer />
          <HStack pb={3}>
          <Menu closeOnSelect={false}>
  <MenuButton as={Button} >
    Sort By
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption value='asc'>Ascending</MenuItemOption>
      <MenuItemOption value='desc'>Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title='Title' type='checkbox'>
      <MenuItemOption value='email'>Name</MenuItemOption>
      <MenuItemOption value='phone'>Phone</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mr={4}>
                Filter By
              </MenuButton>
              <MenuList>
                <MenuItem>Specialization</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
        <table>
          {props.headData && props.renderHead ? (
            <thead>
              <tr>
                {props.headData.map((item, index) =>
                  props.renderHead(item, index)
                )}
              </tr>
            </thead>
          ) : null}
          {props.bodyData && props.renderBody ? (
            <tbody>
              {dataShow.map((item, index) => props.renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
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
    </div>
  );
};

export default TableStaff;