const db = require("./connection");
const { User, Teammate, Project } = require("../models");

db.once("open", async () => {
  await User.deleteMany({});

  const users = await User.insertMany([
    {
      username: "Hulk",
      email: "toddmcfarlane@marvel.com",
      password: "iamhulk",
    },
    {
      username: "Spiderman",
      email: "jeffdmcfarlane@marvel.com",
      password: "iamspiderman",
    },
    {
      username: "Superman",
      email: "mikedmcfarlane@marvel.com",
      password: "iamsuperman",
    },
    {
      username: "Batman",
      email: "jimmymcfarlane@marvel.com",
      password: "iambatman",
    },
  ]);

  console.log("users seeded");

  await Teammate.deleteMany();

  const teammates = await Teammate.insertMany([
    { role: "Administrator" },
    { role: "Professor" },
    { role: "BackEnd Dev" },
    { role: "FrontEnd Dev" },
    { role: "FullStackDev" },
    { role: "SQLGuy" },
    { role: "MONGOGirl" },
  ]);

  console.log("teammates seeded");

  await Project.deleteMany();

  const projects = await Project.insertMany([
    {
      name: "Best Project EVERRRRRR",
      owner: User(users[0]),
      description: "Most complex project to solve your real world needs ever",
      image: "https://gfycat.com/anxiousilliteratebabirusa",
      reqFunds: "50000",
      acqFunds: "45000",
      launch: "1671929645000"
    },
    {
      name: "Wurst Project",
      owner: User(users[1]),
      description: "It says hello world barely",
      image: "https://gfycat.com/courteoushandmadebutterfly",
      reqFunds: "50000",
      acqFunds: "45000",
      launch: "1739494445000"
    },
    {
      name: "Ok Project",
      owner: User(users[2]),
      description: "Literally Minesweeper",
      image: "https://i.imgur.com/4zdNjKf.png",
      reqFunds: "50000",
      acqFunds: "45000",
      launch: "1640998445000"
    },
  ]);

  console.log("projects seeded");
  process.exit();
});
