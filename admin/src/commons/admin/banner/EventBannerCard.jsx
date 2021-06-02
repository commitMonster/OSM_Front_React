import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const EventBannerCard = ({banner}) => {

  return(
  <Box
    borderBottom={1} 
    sx={{
      display: 'flex',
      flexDirection: 'Row',
      justifyContent: 'space-around',
      height: '100%',
      oxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      m:1,
    }}
  >
      <Box
        sx={{
          flex:1,
          justifyContent: 'start',
          align: "center",
          p:3,
          m:3,
        }}
      >
        <Avatar
          alt="Product"
          src={banner.media}
          variant="square"
        />
      </Box>


      <Box sx={{ flex: 3 , p:5}}>
      <Typography
        align="start"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
        {banner.title}
      </Typography>

      
      <Typography
        align="start"
        color="textPrimary"
        variant="body1"
      >
        {banner.description}
      </Typography>
      </Box>
      <Box sx={{ flex: 1, p:5, flexDirection:'row', align:'center'}}>
      {/* 수정 구현하기 */}
      <Box sx={{p:3}}>
          <a href="/admin/product"> 수정</a>  
        <span> / </span>
       {/* 삭제 구현하기 */}
          <a href="/admin/product"> 삭제</a>
       </Box>
      </Box>

    {/* <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <AccessTimeIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <GetAppIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {banner.totalDownloads}
            {' '}
            Downloads
          </Typography>
        </Grid>
      </Grid>
    </Box> */}
  </Box>

)};

// EventBannerCard.propTypes = {
//   banner: PropTypes.object.isRequired
// };

export default EventBannerCard;
