import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, FormControlLabel, Menu, MenuItem, Box } from '@material-ui/core';
import ChevronDownIcon from '../icons/ChevronDown';

const MultiSelect = (props) => {
  const { label, onChange, options, value, ...other } = props;
  const anchorRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const handleOptionToggle = (event) => {
    let newValue = [...value];

    if (event.target.checked) {
      newValue.push(event.target.value);
    } else {
      newValue = newValue.filter((item) => item !== event.target.value);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
    <Box>
      <Button
        // color="inherit"
        endIcon={<ChevronDownIcon fontSize="large" />}
        onClick={handleMenuOpen}
        ref={anchorRef}
        // sx={{width:100}}
        fullWidth
        variant="contained"
        size="large"
        {...other}
      >
        {label}
      </Button>
      <Menu
        anchorEl={anchorRef.current}
        elevation={1}
        onClose={handleMenuClose}
        open={openMenu}
        sx={{mt:43, ml:25}}
        PaperProps={{ style: { width: 250 } }}
      >
        {options.map((option) => (
          <MenuItem key={option.value}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={value.indexOf(option.value) > -1}
                  color="primary"
                  onChange={handleOptionToggle}
                  value={option.value}
                />
              )}
              label={option.label}
            />
          </MenuItem>
        ))}
      </Menu>
      </Box>
    </>
  );
};

MultiSelect.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired
};

export default MultiSelect;
