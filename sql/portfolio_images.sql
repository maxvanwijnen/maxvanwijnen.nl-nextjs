-- Tabel voor portfolio afbeeldingen
CREATE TABLE IF NOT EXISTS `portfolio_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `tags` varchar(255) DEFAULT 'portret',
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `is_active` tinyint(1) DEFAULT 1,
  `sort_order` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `idx_tags` (`tags`),
  KEY `idx_active` (`is_active`),
  KEY `idx_sort_order` (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Voorbeeld data (verwijder dit in productie)
INSERT INTO `portfolio_images` (`filename`, `title`, `description`, `tags`, `width`, `height`, `sort_order`) VALUES
('image1.jpg', 'Portret sessie', 'Prachtig portret in de avondzon', 'portret', 1200, 800, 1),
('image2.jpg', 'Familieportret', 'Gezellige familie in het park', 'familie', 1200, 800, 2),
('image3.jpg', 'Mode shoot', 'Zomercollectie 2023', 'fashion', 800, 1200, 3),
('image4.jpg', 'Trouwfoto', 'Eerste kus als getrouwd stel', 'trouwen', 1200, 800, 4),
('image5.jpg', 'Zwangerschapsfoto', 'Prachtige zwangere buik in natuurlijk licht', 'zwangerschap', 800, 1200, 5),
('image6.jpg', 'Loveshoot', 'Stel in de zonsondergang', 'loveshoot', 1200, 800, 6);
