import { removeCart } from '../../store/cart';
import { incrementInventory } from '../../store/products';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

function Cart(props) {
    function handleRemoveCart(product) {

        props.removeCart(product);
        props.incrementInventory(product);
    }
    const useStyles = makeStyles((theme) => ({
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
            padding: 30,
            minHeight: "21vh",
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardTitle: {
            display: "flex",
            placeContent: 'space-between',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
        },
        cardContent: {
            flexGrow: 1,
        },
    }));
    
        const classes = useStyles();


    
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {props.cart.cart.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                                    {card.name}<span>{card.price}</span>
                                </Typography>
                                <Typography>
                                    {card.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => handleRemoveCart(card)}>
                                    delete
                                </Button>
                               
                                {card.inventory}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )

                }

                const mapStateToProps = state => {
                    return{
                        cart : state.cart,
                    }
                }
                const mapDispatchToProps =  {
                    removeCart,
                    incrementInventory,
                }
                 export default connect(mapStateToProps,mapDispatchToProps)(Cart)