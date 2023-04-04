import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from '@mui/material';
import AlertDialog from './Test';
import MiniDrawer from './Drawer';

const Main = () => {
  const thme = useTheme();
  const [age, setAge] = React.useState('');
  const menuItem = [
    {
      key: 0,
      value: 10,
      item: 'Ten',
    },
    {
      key: 1,
      value: 20,
      item: 'Twenty',
    },
    {
      key: 2,
      value: 30,
      item: 'Thirty',
    },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '2rem',
        }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={
            {
              // paddingLeft: '1rem',
              // paddingRight: '1rem',
              // '.MuiInputBase-root': {
              //   p: '4px',
              //   m: '5pd',
              // },
            }
          }
        />

        <Button variant="contained" sx={{ color: thme.palette.primary.light }}>
          Text
        </Button>
      </Box>
      <Container>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {menuItem.map((item) => (
              <MenuItem value={item.value} key={item.key}>
                {item.item}
              </MenuItem>
            ))}
          </Select>
          <AlertDialog />
        </FormControl>
      </Container> */}
      <MiniDrawer />
    </div>
  );
};

export default Main;
