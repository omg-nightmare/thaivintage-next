import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Typography from "../tyrography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "./card";

const styles = theme => ({
  root: {
    display: "flex",
    position: "relative",
    //overflow: "hidden",
    backgroundColor: "#f09751 !important"
  },
  container: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: "block",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: 40
    }
  },
  menu: {
    display: "block",
    textAlign: "center",
    position: "relative",
    justifyContent: "center"
  },
  item: {
    display: "block",
    position: "relative",
    margin: theme.spacing(0)
  },
  button: {
    height: 60,
    fontSize: 14,
    width: "100%",
    padding: 20,
    border: "1px solid #000",
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1)
    },
    "&:hover": {
      backgroundColor: "#fff"
    }
  }
});

const RecommendMenu = props => {
  const { classes } = props;

  const recommend = [
    {
      image:
        "/images/thaivintagewhitchurch-thai-cuisine-steamed-sea-bass-lime-chilli.jpg",
      title: "Steamed Sea Bass Lime & Chilli",
      details:
        "This spicy Thai-style steamed sea bass is blanketed in garlic and chillies for a flavourful dish that serves any feasting occasion | Thai Vintage Whitchurch"
    },
    {
      image:
        "/images/thaivintagewhitchurch-thai-cuisine-steamed-sea-bass-soy-sauce.jpg",
      title: "Steamed Sea Bass with soy sauce",
      details:
        "Soft texture Sea Bass fillets with mellow flavoured. Shitake mushroom, spring onion, ginger and light soy sauce. | Thai Vintage Whitchurch"
    },
    {
      image:
        "/images/thaivintagewhitchurch-thai-cuisine-crispy-sea-mango-salad.jpg",
      title: "Crispy Sea Bass with Mango salad",
      details:
        "Crispy fried Sea Bass fillet with Thai herbs and mango salad. | Thai Vintage Whitchurch"
    },
    {
      image: "/images/thaivintagewhitchurch-thai-lamb-cutlets-pad-cha.jpg",
      title: "Lamb cutlets Pad Cha",
      details:
        "with aromatic spice from various Thai herbs (Kra chai, fresh peppercorn, lime leaves) | Thai Vintage Whitchurch "
    }
  ];

  const listMenu = [
    { name: "SIGNATURE MENU", link: "/menus/SIGNATURE.pdf" },
    { name: "A LA CARTE MENU", link: "/menus/ALACARTE.pdf" },
    { name: "STARTER MENU", link: "/menus/STARTER.pdf" },
    { name: "SET MENU", link: "/menus/SETMENU.pdf" },
    { name: "KID MENU", link: "/menus/KIDSMENU.pdf" },
    { name: "DESSERT&COFFEE MENU", link: "/menus/DESSERTS&COFFEE.pdf" },
    { name: "DRINKING MENU", link: "/menus/DRINKING.pdf" },
    { name: "ALL MENU", link: "/menus/ALLMENU.pdf" }
  ];
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Chef Recommended ...
        </Typography>
        <Grid container spacing={3}>
          {recommend.map((payload, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card
                image={payload.image}
                title={payload.title}
                details={payload.details}
                key={index}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4" className={classes.title}>
          Our Menus
          <Typography variant="body1">Thai Vintage Whitchurch</Typography>
        </Typography>
        <div className={classes.menu}>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
            orientation="horizontal"
          >
            <Grid container spacing={2}>
              {listMenu.map((payload, index) => (
                <Grid item xs className={classes.item} key={index}>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    href={payload.link}
                    key={index}
                  >
                    {payload.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </ButtonGroup>
        </div>
      </Container>
    </section>
  );
};

RecommendMenu.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecommendMenu);
