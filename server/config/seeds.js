const db = require('./connection');
const { User, Teammate, Project } = require =('../models');

db.once('open', async () => {
    await User.deleteMany();

    const users = await User.create({
        email: 'toddmcfarlane@marvel.com',
        password: 'iamhulk'
    });

    const users = await User.create({
        email: 'jeffdmcfarlane@marvel.com',
        password: 'iamspiderman'
    });

    const users = await User.create({
        email: 'mikedmcfarlane@marvel.com',
        password: 'iamsuperman'
    });
    
    const users = await User.create({
        email: 'mikedmcfarlane@marvel.com',
        password: 'iambatman'
    });

    console.log('users seeded');
 
    await Teammate.deleteMany();

    const teammates = await Teammates.insertMany([
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
        owner: '01',
        description: 'Most complex project to solve your real world needs ever',
        image: "https://gfycat.com/anxiousilliteratebabirusa",
        reqFunds: "50000",
        acqFunds: "45000"
        },
        {name: 'Wurst Project',
        owner: '02',
        description: 'It says hello world barely',
        image: "https://gfycat.com/courteoushandmadebutterfly",
        reqFunds: "50000",
        acqFunds: "45000"
        }
    ]);

    console.log("projects seeded");
    process.exit();
})