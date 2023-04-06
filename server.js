const express = require("express");
const app = express();
const port = 4002;
const router = express.Router();
const methodOverride = require("method-override");

// Models - Database stuff
const pokemons = require("./models/pokemon.js");

//Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("Middleware working");
  next();
});

//INDEX ROUTE
app.get("/", (req, res) => {
  res.render("index", { pokemon: pokemons });
});

//SHOW ROUTE
app.get("/pokemon/:id", (req, res) => {
  // console.log (pokemons)
  let pokemon = pokemons.find(poke => poke.id ==req.params.id)
  console.log(pokemon)
  res.render("show.ejs", { pokemon : pokemon });

});

//NEW ROUTE
app.get("/pokemon/new"), (req, res) => {
    res.render("views/new.ejs", { pokemon: pokemonx });
  };

//EDIT PAGE
router.get("pokemon/:indexOfPokemon/edit", (req, res) => {
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
  pokemon.splice(req.params.indexOfPokemonsArray, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`🏝️ Server is listening to PORT ${port}`);
});
