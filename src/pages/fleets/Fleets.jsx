import EntityLayout from "../../components/entity/EntityLayout";
import useAuth from "../../hooks/useAuth";
import Form2 from "../../components/widgets/forms/Form2";
import MultiSelect from "../../components/MultiSelect";
import { useState } from "react";
import useThemeProps from "@material-ui/core/styles/useThemeProps";
import useEntityHooks from "../../hooks/useEntityHooks";
import { vehicles } from "../../api"


const option = 
  {
    label: 'Vehicles',
    options: [
      'Vehicle 1',
      'Vehicle 2',
      'Vehicle 3',
      'Vehicle 4'
    ]
  };



const displayFields = [
  {
    name: "name",
  },
  {
    name: "description",
  },
  {
    name: "vehicles",
    params: "useRef"
  }
];

const Fleets = () => {
  const { getAllQuery, createMutation, updateMutation, deleteMutation } =
        useEntityHooks("vehicles", vehicles);
    
  const { data } = getAllQuery();

  const option = 
  {
    label: 'Vehicles',
    options: data?.docs?.map((d) => ({label: d.name + " (" + d.make + " " + d.year +")", value: d._id})) || []
  };

  const [chips, setChips] = useState([
    'Vehicle 1',
    'Vehicle 2'
  ]);

  const formFields = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "description",
      label: "Description",
    },
    {
      name: "vehicles",
      label: "Vehicles",
      // reference: "vehicles",
      component: MultiSelect,
      props: {
        key:option.label,
        label:option.label,
        onChange:(value => setChips(value)),
        options:option.options,
        value:chips
      }
    }
  ];
  
  return (
    <>
    <EntityLayout
      title={"Fleets"}
      entity={"fleets"}
      formFields={formFields}
      displayFields={displayFields}
    />
    </>
  );
};

export default Fleets;
