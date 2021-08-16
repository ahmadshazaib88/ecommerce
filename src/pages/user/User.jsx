import EntityLayout from "../../components/entity/EntityLayout";

const formFields = [
  {
    name: "username",
    label: "Username",
  },
];

const displayFields = [
  {
    name: "username",
    label: "Username",
  },
  {
    name: "roles",
    label: "Role",
  },
];

const User = () => {
  return (
    <EntityLayout
      title={"User"}
      entity={"users"}
      formFields={formFields}
      displayFields={displayFields}
    />
  );
};

export default User;
