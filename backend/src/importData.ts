import { connectToDatabase, sequelize } from './util/db';
import './models/relationships';
import { Umzug, SequelizeStorage } from 'umzug';


const runImportMigration = async () => {  
  const migrator = new Umzug({    
    migrations: {      
      glob: 'src/migrations/import/*.ts',    
    },    
    storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),    
    context: sequelize.getQueryInterface(),    
    logger: console,  
  });  
  const migrations = await migrator.up();  
  console.log('Data imported', {    
    files: migrations.map((mig) => mig.name),  
  });
};

const start = async () => {
  await connectToDatabase();
  await runImportMigration();
};

void start();