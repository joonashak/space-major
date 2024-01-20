import { useQuery } from "@apollo/client";
import { Option, Select } from "@mui/joy";
import { SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FindAllOperationsDocument,
  Operation,
} from "../../generated/graphql-operations";

const OperationSelect = () => {
  const { data } = useQuery(FindAllOperationsDocument);
  const { opName } = useParams();
  const navigate = useNavigate();

  const ops = data?.findAllOperations || [];
  const selectedOp =
    (ops.find((op) => op.shortName === opName) as Operation) || null;

  const onChange = (_: SyntheticEvent | null, value: Operation | null) => {
    if (value) {
      navigate(`/op/${value.shortName}`);
    }
  };

  return (
    <Select
      color="primary"
      placeholder="Select Operation..."
      size="md"
      variant="outlined"
      sx={{ mt: 1, mb: 2 }}
      onChange={onChange}
      value={selectedOp}
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
