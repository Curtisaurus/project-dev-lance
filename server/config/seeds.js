const db = require('./connection');
const { User, Teammate, Project } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});

    const users = await User.insertMany([
        {
            email: 'toddmcfarlane@marvel.com',
            password: 'iamhulk'
        },
        {
            email: 'jeffdmcfarlane@marvel.com',
            password: 'iamspiderman'
        },
        {
            email: 'mikedmcfarlane@marvel.com',
            password: 'iamsuperman'
        },
        {
            email: 'jimmymcfarlane@marvel.com',
            password: 'iambatman'
        }
    ]);

    console.log('users seeded');
 
    await Teammate.deleteMany();

    const teammates = await Teammate.insertMany([
        {role: 'Administrator'},
        {role: 'Professor'},
        {role: 'BackEnd Dev'},
        {role: 'FrontEnd Dev'},
        {role: 'FullStackDev'},
        {role: 'SQLGuy'},
        {role: 'MONGOGirl'}
     ]);

    console.log('teammates seeded');

    await Project.deleteMany();

    const projects = await Project.insertMany([
        {name: 'Best Project EVERRRRRR',
        owner: users[0]._id,
        description: 'Most complex project to solve your real world needs ever',
        image: "https://gfycat.com/anxiousilliteratebabirusa",
        reqFunds: "50000",
        acqFunds: "45000"
        },
        {name: 'Wurst Project',
        owner: users[1]._id,
        description: 'It says hello world barely',
        image: "https://gfycat.com/courteoushandmadebutterfly",
        reqFunds: "50000",
        acqFunds: "45000"
        },
        {name: 'Ok Project',
        owner: users[2]._id,
        description: 'Literally Minesweeper',
        image: "https://i.imgur.com/4zdNjKf.png",
        reqFunds: "50000",
        acqFunds: "45000"
        }
    ]);

    console.log("projects seeded");
    process.exit();
})