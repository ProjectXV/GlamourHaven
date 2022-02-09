import { Box,SimpleGrid} from "@chakra-ui/react";
import AdminAddServiceList from "./AdminAddServiceList";
import ServiceCard from "./ServiceCard";


const AddServices = () => {
  return (
    <Box>
      <SimpleGrid  columns={[4,4]} spacing="16px">
        {AdminAddServiceList.map((addservice) => {
          return <ServiceCard key={addservice.id} addservice={addservice} />
        })}
      </SimpleGrid>
    </Box>
  );
};
export default AddServices;