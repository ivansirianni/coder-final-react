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


            // <div className=" border-light mb-3 cardProducto">
            //                 <img src={prod.url} className="card-img-top cardImg" alt="cardimg" />
            //                 <div className="card-body">
            //                     <h5 className="card-title">{prod.name}</h5>
            //                     <p className="card-text">{prod.category}</p>
            //                     <p className="card-text">u$D {new Intl.NumberFormat('de-DE').format(prod.price)}</p>
            //                 <Link  to={`/product/${prod.id}`}> <button className='btn-a '>Buy Now</button></Link>
            //             </div>
            // </div>
    );
}

export default Item;