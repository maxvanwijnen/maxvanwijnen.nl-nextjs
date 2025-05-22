# Portfolio Module Opzet

## Database Setup

1. Maak een nieuwe database aan in MySQL/MariaDB
2. Importeer het SQL-bestand:
   ```bash
   mysql -u gebruikersnaam -p databasenaam < sql/portfolio_images.sql
   ```

## Omgevingsvariabelen

Voeg de volgende variabelen toe aan je `.env.local` bestand:

```env
# Database instellingen
DB_HOST=localhost
DB_USER=gebruikersnaam
DB_PASSWORD=wachtwoord
DB_NAME=databasenaam

# Media URL (zorg dat dit overeenkomt met je nginx configuratie)
NEXT_PUBLIC_MEDIA_URL=http://localhost:3000/media
```

## Media Map Opzet

1. Maak een map aan voor de media bestanden:
   ```bash
   sudo mkdir -p /var/www/maxvanwijnen/media/portfolio
   sudo chown -R $USER:$USER /var/www/maxvanwijnen/media
   ```

2. Upload je afbeeldingen naar `/var/www/maxvanwijnen/media/portfolio/`
3. Zorg ervoor dat de bestandsnamen overeenkomen met de `filename` waarden in de database

## Nginx Configuratie

1. Kopieer de `nginx.conf` naar je nginx sites-available map:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/maxvanwijnen
   ```

2. Maak een symbolische link naar sites-enabled:
   ```bash
   sudo ln -s /etc/nginx/sites-available/maxvanwijnen /etc/nginx/sites-enabled/
   ```

3. Test de configuratie en herstart nginx:
   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

## Ontwikkelomgeving

1. Installeer de benodigde packages:
   ```bash
   npm install mysql2
   ```

2. Start de development server:
   ```bash
   npm run dev
   ```

## Productieomgeving

1. Bouw de applicatie:
   ```bash
   npm run build
   ```

2. Start de productieserver:
   ```bash
   npm start
   ```

## Gebruik

- De portfolio-pagina is beschikbaar op `/portfolio`
- Gebruik de filterknoppen om te filteren op type fotoshoot
- Klik op een afbeelding voor een vergroting

## Onderhoud

### Nieuwe afbeeldingen toevoegen

1. Upload de afbeelding naar `/var/www/maxvanwijnen/media/portfolio/`
2. Voeg een nieuwe rij toe aan de `portfolio_images` tabel met de juiste gegevens

### Bestaande afbeeldingen bijwerken

- Gebruik de `portfolio_images` tabel om titels, beschrijvingen en tags aan te passen
- Verwijder of vervang de oude afbeelding in de media map als je de afbeelding zelf wilt vervangen (zorg dat de bestandsnaam hetzelfde blijft)
