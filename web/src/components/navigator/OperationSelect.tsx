import { useQuery } from "@apollo/client";
import { Option, Select } from "@mui/joy";
import { FindAllOperationsDocument } from "../../generated/graphql-operations";

const OperationSelect = () => {
  const { data } = useQuery(FindAllOperationsDocument);

  const ops = data?.findAllOperations || [];

  return (
    <Select
      color="primary"
      placeholder="Choose one…"
      size="md"
      variant="outlined"
      sx={{ mt: 1, mb: 2 }}
    >
      {ops.map((op) => (
        <Option value={op} key={op.id}>
          {op.name}
        </Option>
      ))}
    </Select>
  );
};

export default OperationSelect;
