-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2025 at 03:29 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user1_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `weight` decimal(5,2) NOT NULL,
  `bmi` decimal(5,2) NOT NULL,
  `bio` text NOT NULL,
  `profile_pic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `age`, `gender`, `weight`, `bmi`, `bio`, `profile_pic`) VALUES
(1, 'aniket@gmail.com', 'user', '123', 18, 'Male', '56.00', '29.00', 'student', '/uploads/1733475522945-logo1.jpg'),
(2, 'aniket@gmail.com', 'user1', '111', 18, 'Male', '56.00', '18.30', 'student', '/uploads/1741307203575-logo1.jpg'),
(8, 'aniket@gmail.com', 'pavan', '123', 18, 'Male', '56.00', '29.00', 'student', '/uploads/1739857112653-logo1.jpg'),
(9, 'aniket@gmail.com', 'pavan1', '222', 18, 'Female', '56.00', '29.00', ',jbjbb', '/uploads/1739857994804-log 2.jpg'),
(10, 'aniket@gmail.com', 'samit1', '143', 15, 'Female', '80.00', '220.00', 'Student', '/uploads/1741303239441-logo1.jpg'),
(11, 'aniket@gmail.com', 'amit2', '122', 15, 'Female', '80.00', '26.10', 'writer', '/uploads/1741839932634-Dr._Babasaheb_Ambedkar_Marathawada_University_logo.png'),
(12, 'suraj123@gmail.com', 'samit3', '777', 15, 'Male', '80.00', '220.00', '123', '/uploads/1741356992429-MIT LOGO.jpeg'),
(13, 'suraj123@gmail.com', 'samit4', '111', 15, 'Male', '80.00', '220.00', 'student', '/uploads/1741415836062-log 2.jpg'),
(14, 'aim12@gmail.com', 'aim', '555', 18, 'Male', '58.00', '255.00', 'student', '/uploads/1741418763063-logo1.jpg'),
(15, 'aim12@gmail.com', 'aim1', '999', 18, 'Male', '58.00', '255.00', 'ai', '/uploads/1741434990569-Dr._Babasaheb_Ambedkar_Marathawada_University_logo.png'),
(16, 'aim12@gmail.com', 'aim2', '189', 18, 'Male', '58.00', '255.00', 'student', '/uploads/1741839906468-MIT LOGO.jpeg'),
(17, 'suraj123@gmail.com', 'am1', '154', 20, 'Female', '58.00', '18.90', 'student', '/uploads/1743154746689-logo1.jpg'),
(18, 'aniket@123gmail.com', 'abc123', '789', 16, 'Female', '900.00', '293.90', 'avbhjb', '/uploads/1742749542828-logo1.jpg'),
(19, 'karan123@gmail.com', 'karan chavan', '999', 20, 'Other', '58.00', '18.90', 'student of Egg.', '/uploads/1742881601588-Dr._Babasaheb_Ambedkar_Marathawada_University_logo.png');

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

CREATE TABLE `user_data` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `user_data`
--
ALTER TABLE `user_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_data`
--
ALTER TABLE `user_data`
  ADD CONSTRAINT `user_data_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
