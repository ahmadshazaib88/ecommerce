import {
  Box,
  Button,
  Container,
  IconButton,
  Autocomplete,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import SearchIcon from '../../../icons/Search';
import XIcon from '../../../icons/X';
import Buttons3 from '../buttons/Buttons3';


// Not completed yet. Move to components

const Modal3 = ({ closeModal, title = "Modal", actionButton, dropdownButton, dropdownData, body }) => (
  <Box
    sx={{
      minHeight: '100%',
      p: 3
    }}
  >
    <Paper
      elevation={12}
      style={{
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
      }}
      sx={{
        position: 'absolute',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          px: 3,
          py: 1
        }}
      >
        <Typography
          variant="h6"
          color="textPrimary"
        >
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          onClick={closeModal}
        >
          <XIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box sx={{ p: 3 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            {body}

          </Box>
        </Container>
      </Box>
    </Paper>
  </Box>
);

export default Modal3;
