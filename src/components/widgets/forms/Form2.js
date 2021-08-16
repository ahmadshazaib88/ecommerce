import { useState } from 'react';
import { Box, Checkbox, Chip, Divider, FormControlLabel, Input } from '@material-ui/core';
import MultiSelect from '../../MultiSelect';
import SearchIcon from '../../../icons/Search';

const option = 
  {
    label: 'Type',
    options: [
      'Freelance',
      'Full Time',
      'Part Time',
      'Internship'
    ]
  };

const Form2 = () => {
  const [chips, setChips] = useState([
    'Freelance',
    'Full Time',
    'Novice',
    'Europe',
    'Android',
    'Web Developer'
  ]);

  const handleMultiSelectChange = (value) => {
    setChips(value);
  };

  return (
          <MultiSelect
            key={option.label}
            label={option.label}
            onChange={handleMultiSelectChange}
            options={option.options}
            value={chips}
          />
  );
};

export default Form2;
