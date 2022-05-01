import { Box, Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const BookCard = () => {
  return (
    <Box width="284px" height="300px">
        <Card>
            <CardMedia
                component='img'
                height='292px'
                width='294.1px'
                image={require('/home/kashig/Desktop/React_Tutorial/book-card/src/Components/2.png')}
                alt='book image'
            />
            <CardContent style={{justifyContent: 'left'}}>
                <Typography variant='h6'>
                    Beyond Entrepreneurship 
                </Typography>
                <br></br>
                <Typography variant='body1' color='#6D787E'>
                    Jim Collins & Bill Lazier
                </Typography>
                <br></br>
                <Typography variant='body2' color="#6D787E">
                <AccessTimeIcon 
                    style={{height:17,
                    width:17}}
                />
                    13-minute read
                </Typography>
                <MoreHorizIcon style={{height:75, width:50, float: 'right'}}/>
            </CardContent>
        </Card>
    </Box>
  )
}

export default BookCard
