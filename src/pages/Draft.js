import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button,
  CardActionArea,
  CardActions,
  Menu,
  MenuItem,
} from '@mui/material';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import axios from 'axios';

export default function Draft() {
  const shareUrl = 'https://example.com/';
  const title = 'Title of the shared content';
  const image = 'https://example.com/images/preview.jpg';
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
      .get(`https://api.sampleapis.com/coffee/hot`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log('data', data);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // heloo
  const content = () => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          {/* <CardContent>
            {data.map((item) => (
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
            ))}
          </CardContent> */}
        </CardActionArea>
        <CardActions>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Share
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <FacebookShareButton
                url={shareUrl}
                quote={title}
                hashtag="#example"
              >
                Facebook
              </FacebookShareButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <WhatsappShareButton url={shareUrl} title={title}>
                Share on WhatsApp
              </WhatsappShareButton>
            </MenuItem>
          </Menu>
        </CardActions>
      </Card>
    );
  };

  return <div>{content()}</div>;
}
