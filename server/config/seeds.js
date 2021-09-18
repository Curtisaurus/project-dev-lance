const db = require("./connection");
const { User, Teammate, Project, Investment } = require("../models");

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
    { role: "Administrator", user: users[0]._id },
    { role: "Professor", user: users[1]._id },
    { role: "BackEnd Dev", user: users[2]._id },
    { role: "FrontEnd Dev" },
    { role: "FullStackDev" },
    { role: "SQLGuy" },
    { role: "MONGOGirl" },
  ]);

  console.log("teammates seeded");

  await Investment.deleteMany();

  const investments = await Investment.insertMany([
    {
      role: "1kInvestor",
      user: users[0]._id,
      amount: 1000,
    },
    {
      role: "10kInvestor",
      user: users[1]._id,
      amount: 10000,
    },
    {
      role: "15kInvestor",
      user: users[0]._id,
      amount: 15000,
    },
  ]);

  console.log("investments seeded");

  await Project.deleteMany();

  const projects = await Project.insertMany([
    {
      name: "Best Project EVERRRRRR",
      owner: users[0]._id,
      description: "Most complex project to solve your real world needs ever",
      image: "https://gfycat.com/anxiousilliteratebabirusa",
      reqFunds: "50000",
      acqFunds: "45000",
      launch: "1671929645000",
      tags: ["complex", "perfect", "winning"],
      team: [
        teammates[0]._id,
        teammates[1]._id,
        teammates[2]._id,
        teammates[3]._id,
        teammates[4]._id,
      ],
      investors: [investments[0]._id, investments[1]._id, investments[2]._id],
    },
    {
      name: "Wurst Project",
      owner: users[1]._id,
      description: "It says hello world barely",
      image: "https://gfycat.com/courteoushandmadebutterfly",
      reqFunds: "50000",
      acqFunds: "45000",
      launch: "1739494445000",
      tags: ["helloworld", "terrible", "yikes"],
    },
    {
      name: "Ok Project",
      owner: users[2]._id,
      description: "Literally Minesweeper",
      image: "https://i.imgur.com/4zdNjKf.png",
      reqFunds: "50000",
      acqFunds: "45000",
      launch: "1640998445000",
      tags: ["average", "game", "minesweeper"],
    },
  ]);

  console.log("projects seeded");

  process.exit();
});
