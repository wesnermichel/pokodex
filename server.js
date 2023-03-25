const express = require("express");
const app = express();
const port = 4000;
const methodOverride = require("method-override");

// Models - Database stuff
const models = require("./models/pokemon.js");

const pokemon = models.pokemon;

//Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("this is my own middleware");
  next();
});

//INDEX ROUTE
app.get("/", (req, res) => {
  res.render("index", { pokemon });
});

//SHOW ROUTE
app.get("/pokemon/:id", (req, res) => {
  let pokemon = pokemons[req.params.id];
  res.render("show", { show: pokemon });
});
//NEW ROUTE
app.get("/pokemon/"),
  (req, res) => {
    res.render("new", { pokemon });
  };

//EDIT PAGE
router.get("/:indexOfPokemon/edit", (req, res) => {
  res.render("edit.ejs", {
    pokemon: pokemon[req.params.indexOfPokemon],
    index: req.params.indexOfPokemonArray,
  });
});

//CREATE ROUTE
app.post("/pokemon/"),
  (req, res) => {
    res.render("pokemon", { pokemon });
  };

//UPDATE ROUTE
router.put("/:indexOfPokemon/update", (req, res) => {
  res.render("edit.ejs", {
    pokemon: pokemon[req.params.indexOfPokemon],
    index: req.params.indexOfPokemonArray,
  });
});

// DESTROY/DELETE ROUTE
router.delete("/:indexOfPokemonArray", (req, res) => {
  fruits.splice(req.params.indexOfFruitsArray, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`🏝️ Server is listening to PORT ${port}`);
});
