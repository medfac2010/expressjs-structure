const db = require('./index');


async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await db.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
	await assertDatabaseConnectionOk();
	console.log(`Starting Sequelize + Express example on port ${PORT}...`);
}

init();

Object.keys(db).forEach((modelName) => {
    console.log(db[modelName]);

  });    
