const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs').promises;

// Bepaal de mapnaam
const projectRoot = path.resolve(__dirname, '..');

// Laad .env bestand
dotenv.config({ path: path.join(projectRoot, '.env.local') });

const DB_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true
};

async function initDatabase() {
  let connection;
  try {
    // Maak verbinding met de database
    connection = await mysql.createConnection({
      ...DB_CONFIG,
      // Maak verbinding zonder database te selecteren
      database: undefined
    });

    console.log('Verbonden met de database server');

    // Controleer of de database bestaat, zo niet, maak deze aan
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    console.log(`Database \`${process.env.DB_NAME}\` is klaar voor gebruik`);

    // Selecteer de database
    await connection.query(`USE \`${process.env.DB_NAME}\``);

    // Lees het SQL-bestand in
    const sql = await fs.readFile(path.join(projectRoot, 'sql/portfolio_images.sql'), 'utf8');
    
    // Voer de SQL-instructies uit
    await connection.query(sql);
    console.log('Database tabellen zijn aangemaakt');

    console.log('\x1b[32mDatabase setup is voltooid!\x1b[0m');
    
    // Voeg wat voorbeelddata toe
    await addSampleData(connection);
  } catch (error) {
    console.error('Fout bij het initialiseren van de database:', error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('Database verbinding gesloten');
    }
  }
}

// Voeg voorbeelddata toe
async function addSampleData(connection) {
  try {
    // Controleer of er al data in de tabel staat
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM portfolio_images');
    
    if (rows[0].count === 0) {
      console.log('Voeg voorbeelddata toe...');
      
      await connection.query(`
        INSERT INTO portfolio_images (filename, title, description, tags, width, height, sort_order, is_active)
        VALUES 
          ('image1.jpg', 'Portret sessie', 'Prachtig portret in de avondzon', 'portret', 1200, 800, 1, 1),
          ('image2.jpg', 'Familieportret', 'Gezellige familie in het park', 'familie', 1200, 800, 2, 1),
          ('image3.jpg', 'Mode shoot', 'Zomercollectie 2023', 'fashion', 800, 1200, 3, 1),
          ('image4.jpg', 'Trouwfoto', 'Eerste kus als getrouwd stel', 'trouwen', 1200, 800, 4, 1),
          ('image5.jpg', 'Zwangerschapsfoto', 'Prachtige zwangere buik in natuurlijk licht', 'zwangerschap', 800, 1200, 5, 1),
          ('image6.jpg', 'Loveshoot', 'Stel in de zonsondergang', 'loveshoot', 1200, 800, 6, 1)
      `);
      
      console.log('Voorbeelddata is toegevoegd');
    } else {
      console.log('Er staat al data in de database, geen voorbeelddata toegevoegd');
    }
  } catch (error) {
    console.error('Fout bij het toevoegen van voorbeelddata:', error);
  }
}

// Voer de init functie uit
initDatabase();
