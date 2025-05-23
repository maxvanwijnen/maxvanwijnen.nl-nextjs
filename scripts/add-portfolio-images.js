// Script om de afbeeldingen uit de portfolio map toe te voegen aan de database
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const sizeOf = require('image-size');
const dotenv = require('dotenv');

// Laad environment variables als ze beschikbaar zijn
dotenv.config();

// Handmatige database configuratie
// Vervang deze waarden met je eigen database instellingen
const dbConfig = {
  host: 'localhost',
  user: 'maxvanwijnen',     // vervang met je gebruikersnaam
  password: 'password',     // vervang met je wachtwoord
  database: 'maxvanwijnen', // vervang met je database naam
};

// Map met afbeeldingen
const portfolioDir = path.join(__dirname, '../public/media/portfolio');

// Mapping van bestandsnamen naar tags op basis van de naam
function getTagFromFilename(filename) {
  const lowerFilename = filename.toLowerCase();
  
  if (lowerFilename.includes('familie')) return 'familie';
  if (lowerFilename.includes('love') || lowerFilename.includes('zilk')) return 'loveshoot';
  if (lowerFilename.includes('trouw')) return 'trouwen';
  if (lowerFilename.includes('zwanger')) return 'zwangerschap';
  if (lowerFilename.includes('studio') || lowerFilename.includes('portret')) return 'portret';
  if (lowerFilename.includes('fashion')) return 'fashion';
  if (lowerFilename.includes('vrijgezel')) return 'loveshoot'; // kan aangepast worden
  
  return 'portret'; // standaard tag
}

// Functie om een mooie titel te maken op basis van de bestandsnaam
function getTitleFromFilename(filename) {
  // Verwijder extensie en vervang streepjes door spaties
  const nameWithoutExt = path.basename(filename, path.extname(filename));
  const title = nameWithoutExt
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return title;
}

// Functie om alle afbeeldingen toe te voegen aan de database
async function addImagesToDatabase() {
  let connection;
  
  try {
    // Verbind met de database
    connection = await mysql.createConnection(dbConfig);
    
    // Haal alle bestanden op uit de map
    const files = fs.readdirSync(portfolioDir);
    
    // Leeg de tabel eerst (optioneel)
    await connection.execute('TRUNCATE TABLE portfolio_images');
    
    console.log(`Found ${files.length} images in portfolio directory.`);
    
    // Loop door alle bestanden
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = path.join(portfolioDir, file);
      
      // Skip als het geen bestand is
      if (!fs.statSync(filePath).isFile()) continue;
      
      // Skip bestanden die geen afbeeldingen zijn
      if (!['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())) continue;
      
      try {
        // Haal afbeeldingsafmetingen op
        const dimensions = sizeOf(filePath);
        
        // Maak record voor database
        const tag = getTagFromFilename(file);
        const title = getTitleFromFilename(file);
        
        // Voeg toe aan database
        const query = `
          INSERT INTO portfolio_images 
          (filename, title, description, tags, width, height, is_active, sort_order)
          VALUES (?, ?, ?, ?, ?, ?, 1, ?)
        `;
        
        const description = `${title} fotoshoot door Max van Wijnen`;
        
        await connection.execute(query, [
          file,
          title,
          description,
          tag,
          dimensions.width,
          dimensions.height,
          i + 1 // sort_order
        ]);
        
        console.log(`Added ${file} to database with tag: ${tag}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
    
    console.log('All images have been added to the database.');
  } catch (error) {
    console.error('Database error:', error.message);
  } finally {
    if (connection) await connection.end();
  }
}

// Voer het script uit
addImagesToDatabase()
  .then(() => console.log('Script completed.'))
  .catch(err => console.error('Script failed:', err));
