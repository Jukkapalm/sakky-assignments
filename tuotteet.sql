-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Isäntä: db
-- Luontiaika: 09.10.2026 klo 20:52
-- Palvelimen versio: 8.0.46
-- PHP-versio 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Tietokanta: `kauppa`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `tuotteet`
--

CREATE TABLE `tuotteet` (
  `id` int NOT NULL,
  `nimi` varchar(100) NOT NULL,
  `hinta` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Vedos taulusta `tuotteet`
--

INSERT INTO `tuotteet` (`id`, `nimi`, `hinta`) VALUES
(1, 'Juusto', 4.50),
(2, 'Pizza', 12.50),
(3, 'Kahvipaketti', 9.00),
(4, 'Kahvipaketti', 9.00);

--
-- Indexes for dumped tables
--

--
-- Indeksit taulukolle `tuotteet`
--
ALTER TABLE `tuotteet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tuotteet`
--
ALTER TABLE `tuotteet`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
