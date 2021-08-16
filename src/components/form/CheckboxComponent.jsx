import { Checkbox, FormControlLabel } from "@material-ui/core";

const component = (props) => (
  <div>
    <FormControlLabel
      control={<Checkbox checked={props.value} {...props} />}
      label={props.label}
    />
  </div>
);

export default component;