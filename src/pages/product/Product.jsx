import EntityLayout from "../../components/entity/EntityLayout";

const formFields = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "description",
    label: "Description",
  },
];

const displayFields = [
  {
    name: "name",
  },
  {
    name: "description",
  },
];

const Product = () => {
  return (
    <EntityLayout
      title={"Product"}
      entity={"product"}
      formFields={formFields}
      displayFields={displayFields}
    />
  );
};

export default Product;
