-- Portfolio afbeeldingen toevoegen
TRUNCATE TABLE portfolio_images;

-- Familie afbeeldingen
INSERT INTO portfolio_images (filename, title, description, tags, width, height, is_active, sort_order) VALUES
('Familie-fotoshoot-Noordwijk-1200.webp', 'Familie Fotoshoot Noordwijk', 'Familiefotoshoot op het strand van Noordwijk', 'familie', 1200, 800, 1, 1),
('Familie-fotoshoot-bos-001.webp', 'Familie Fotoshoot Bos', 'Familiefotoshoot in het bos', 'familie', 1200, 800, 1, 2),
('Familie-fotoshoot-bos-002.webp', 'Familie Fotoshoot Bos', 'Familiefotoshoot in het bos', 'familie', 1200, 800, 1, 3),
('Familie-fotoshoot-noordwijk-001.webp', 'Familie Fotoshoot Noordwijk', 'Familiefotoshoot op het strand van Noordwijk', 'familie', 1200, 800, 1, 4),
('Familiefotoshoot-strand-001.webp', 'Familiefotoshoot Strand', 'Fotoshoot met de familie op het strand', 'familie', 1200, 800, 1, 5),
('Familiefotoshoot-strand-002.webp', 'Familiefotoshoot Strand', 'Fotoshoot met de familie op het strand', 'familie', 1200, 800, 1, 6),
('Familiefotoshoot-strand-003.webp', 'Familiefotoshoot Strand', 'Fotoshoot met de familie op het strand', 'familie', 1200, 800, 1, 7),
('Familieshoot-Leiden-1200.webp', 'Familieshoot Leiden', 'Familiefotoshoot in de binnenstad van Leiden', 'familie', 1200, 800, 1, 8);

-- Strand fotoshoots
INSERT INTO portfolio_images (filename, title, description, tags, width, height, is_active, sort_order) VALUES
('Fotoshoot-Strand-Noordwijk-001.webp', 'Fotoshoot Strand Noordwijk', 'Portretfotoshoot op het strand van Noordwijk', 'portret', 1200, 800, 1, 9),
('Fotoshoot-kind-noordwijk-002.webp', 'Fotoshoot Kind Noordwijk', 'Kinderfotoshoot op het strand van Noordwijk', 'portret', 1200, 800, 1, 10),
('Fotoshoot-kind-noordwijk-1200.webp', 'Fotoshoot Kind Noordwijk', 'Kinderfotoshoot op het strand van Noordwijk', 'portret', 1200, 800, 1, 11),
('Fotoshoot-strand-Noordwijk-002.webp', 'Fotoshoot Strand Noordwijk', 'Portretfotoshoot op het strand van Noordwijk', 'portret', 1200, 800, 1, 12),
('Fotoshoot-strand-Noordwijk-003.webp', 'Fotoshoot Strand Noordwijk', 'Portretfotoshoot op het strand van Noordwijk', 'portret', 1200, 800, 1, 13),
('Fotoshoot-strand-Noordwijk-004.webp', 'Fotoshoot Strand Noordwijk', 'Portretfotoshoot op het strand van Noordwijk', 'portret', 1200, 800, 1, 14);

-- Loveshoots
INSERT INTO portfolio_images (filename, title, description, tags, width, height, is_active, sort_order) VALUES
('Loveshoot-Noordwijk-001.webp', 'Loveshoot Noordwijk', 'Romantische loveshoot op het strand van Noordwijk', 'loveshoot', 1200, 800, 1, 15),
('Loveshoot-Noordwijk-002.webp', 'Loveshoot Noordwijk', 'Romantische loveshoot op het strand van Noordwijk', 'loveshoot', 1200, 800, 1, 16),
('Loveshoot-Noordwijk-003.webp', 'Loveshoot Noordwijk', 'Romantische loveshoot op het strand van Noordwijk', 'loveshoot', 1200, 800, 1, 17),
('Loveshoot-de-zilk-001.webp', 'Loveshoot De Zilk', 'Loveshoot in De Zilk', 'loveshoot', 1200, 800, 1, 18),
('Loveshoot-de-zilk-002.webp', 'Loveshoot De Zilk', 'Loveshoot in De Zilk', 'loveshoot', 1200, 800, 1, 19),
('Loveshoot-leiden-burcht-1200.webp', 'Loveshoot Leiden Burcht', 'Loveshoot bij de Burcht in Leiden', 'loveshoot', 1200, 800, 1, 20),
('Loveshoot-schevening.webp', 'Loveshoot Scheveningen', 'Loveshoot op het strand van Scheveningen', 'loveshoot', 1200, 800, 1, 21),
('Loveshoot-strand-scheveningen-001.webp', 'Loveshoot Strand Scheveningen', 'Loveshoot op het strand van Scheveningen', 'loveshoot', 1200, 800, 1, 22);

-- Studio portretten
INSERT INTO portfolio_images (filename, title, description, tags, width, height, is_active, sort_order) VALUES
('Studio-portret-001-signed.webp', 'Studio Portret', 'Professioneel studioportret', 'portret', 800, 1200, 1, 23),
('Studio-portret-002.webp', 'Studio Portret', 'Professioneel studioportret', 'portret', 800, 1200, 1, 24),
('roos-portret-fotostudio-achtergrond-wit.webp', 'Roos Portret Fotostudio', 'Portretfoto in de studio met witte achtergrond', 'portret', 800, 1200, 1, 25);

-- Fashion/Model
INSERT INTO portfolio_images (filename, title, description, tags, width, height, is_active, sort_order) VALUES
('studio-fashion-portret-aisha-witte-achtergrond.webp', 'Studio Fashion Portret Aisha', 'Fashion portret in de studio met witte achtergrond', 'fashion', 800, 1200, 1, 26),
('studio-fashion-portret-aisha.webp', 'Studio Fashion Portret Aisha', 'Fashion portret in de studio', 'fashion', 800, 1200, 1, 27),
('studio-model-portfolio-lange-jurk.webp', 'Studio Model Portfolio', 'Model fotoshoot in de studio met lange jurk', 'fashion', 800, 1200, 1, 28);

-- Trouwen
INSERT INTO portfolio_images (filename, title, description, tags, width, height, is_active, sort_order) VALUES
('Trouwreportage-strand-001.webp', 'Trouwreportage Strand', 'Trouwreportage op het strand', 'trouwen', 1200, 800, 1, 29),
('Trouwreportage-strand-002.webp', 'Trouwreportage Strand', 'Trouwreportage op het strand', 'trouwen', 1200, 800, 1, 30);

-- Vrijgezellen
INSERT INTO portfolio_images (filename, title, description, tags, width, height, is_active, sort_order) VALUES
('Vrijgezellenshoot-strand-001.webp', 'Vrijgezellenshoot Strand', 'Vrijgezellenfeest fotoshoot op het strand', 'loveshoot', 1200, 800, 1, 31),
('Vrijgezellenshoot-strand-002.webp', 'Vrijgezellenshoot Strand', 'Vrijgezellenfeest fotoshoot op het strand', 'loveshoot', 1200, 800, 1, 32),
('Vrijgezellenshoot-strand-003.webp', 'Vrijgezellenshoot Strand', 'Vrijgezellenfeest fotoshoot op het strand', 'loveshoot', 1200, 800, 1, 33);

-- Zwangerschap
INSERT INTO portfolio_images (filename, title, description, tags, width, height, is_active, sort_order) VALUES
('Fotoshoot-Zwanger-001.webp', 'Fotoshoot Zwanger', 'Zwangerschapsfotoshoot', 'zwangerschap', 800, 1200, 1, 34),
('Zwangerschapsfotoshoot-Leiden-1200.webp', 'Zwangerschapsfotoshoot Leiden', 'Zwangerschapsfotoshoot in Leiden', 'zwangerschap', 1200, 800, 1, 35);

-- Test afbeelding
INSERT INTO portfolio_images (filename, title, description, tags, width, height, is_active, sort_order) VALUES
('test-image.jpg', 'Test Afbeelding', 'Test afbeelding voor ontwikkeling', 'portret', 800, 600, 1, 36);
