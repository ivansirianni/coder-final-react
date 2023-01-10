import { Link } from "react-router-dom";
import "../Pages/style.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Item = ({prod}) => {
    return (
            
        <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="340"
          image={prod.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {prod.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Category: {prod.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Price: U$D {new Intl.NumberFormat('de-DE').format(prod.price)}
          </Typography>
        </CardContent>
        <CardActions>
        <Link  to={`/product/${prod.id}`}> <button className='btn-a '>Buy Now</button></Link>
        </CardActions>
      </Card>


            
    );
}

export default Item;