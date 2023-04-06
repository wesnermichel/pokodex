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
app.get("/pokemon/show/:id", (req, res) => {
  // console.log (pokemons)
  let pokemon = pokemons.find((poke) => poke.id == req.params.id);
  res.render("show.ejs", { pokemon: pokemon });
  console.log(pokemon);
});

//NEW ROUTE
app.get("/pokemon/new", (req, res) => {
  res.render("views/new.ejs", {});
});

//POST CREATE
// app.post("/pokemon", (req, res) => {
//   let newPokemon = req.body;
//   newPokemon.type = newPokemon.type.split(",");
//   pokemons.unshift(newPokemon);
//   console.log(newPokemon);
//   res.redirect("/pokemon");
// });
app.post("/pokemon/", (req, res) => {
  let newPokemon = req.body;
  newPokemon.type = newPokemon.type.split(",");
  pokemons.unshift(newPokemon);
  console.log(newPokemon);
  res.redirect("/pokemon");
});

app.get("/pokemon", (req, res) => {
  res.render("index", { pokemon: pokemons });
});

//EDIT PAGE
app.get("/pokemon/edit/:id/", (req, res) => {
  res.render("edit.ejs", {
    pokemon: pokemons[req.params.id],
    id: req.params.id,
  });
});

//CREATE ROUTE
app.post("/pokemon/"),
  (req, res) => {
    res.render("pokemon", { pokemon });
  };

//UPDATE ROUTE

app.put("/update/:id", (req, res) => {
  let updatedPokemon = req.body;
  updatedPokemon.type = updatedPokemon.type.split(",");
  pokemons[req.params.id] = updatedPokemon;
  res.redirect("/pokemon");
});

// DESTROY/DELETE ROUTE

app.delete("/:indexOfPokemonArray", (req, res) => {
  pokemons.splice(req.params.indexOfPokemonArray, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`🏝️ Server is listening to PORT ${port}`);
});
