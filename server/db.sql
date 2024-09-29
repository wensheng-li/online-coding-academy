-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 29, 2024 at 10:45 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `learning_platform`
--

-- --------------------------------------------------------

--
-- Table structure for table `Courses`
--

CREATE TABLE `Courses` (
  `courseID` int(11) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Courses`
--

INSERT INTO `Courses` (`courseID`, `description`) VALUES
(1, 'PHP Development'),
(2, 'MySQL for Beginners'),
(3, 'React JS Advanced'),
(4, 'Java Programming'),
(5, 'Python for Data Science'),
(6, 'Web Design Fundamentals'),
(7, 'Cloud Computing with AWS'),
(8, 'DevOps Essentials'),
(9, 'Data Structures and Algorithms'),
(10, 'Machine Learning with Python'),
(11, 'Artificial Intelligence'),
(12, 'Cybersecurity'),
(13, 'Digital Marketing'),
(14, 'Blockchain Technology'),
(15, 'Mobile App Development'),
(16, 'Big Data Analytics'),
(17, 'UI/UX Design'),
(18, 'Networking Fundamentals'),
(19, 'Software Testing and QA'),
(20, 'Business Analytics'),
(21, 'Advanced Web Development'),
(22, 'Data Visualization with D3.js'),
(23, 'Full Stack JavaScript'),
(24, 'Introduction to Kubernetes'),
(25, 'Agile Project Management'),
(26, 'Node.js for Backend Development'),
(27, 'Frontend Development with Vue.js'),
(28, 'Deep Learning with TensorFlow'),
(29, 'Version Control with Git'),
(30, 'Linux System Administration');

-- --------------------------------------------------------

--
-- Table structure for table `Enrolments`
--

CREATE TABLE `Enrolments` (
  `enrolmentID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `courseID` int(11) DEFAULT NULL,
  `completionStatus` enum('not started','in progress','completed') NOT NULL,
  `enrolledDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Enrolments`
--

INSERT INTO `Enrolments` (`enrolmentID`, `userID`, `courseID`, `completionStatus`, `enrolledDate`) VALUES
(1, 1, 1, 'in progress', '2023-08-01'),
(2, 2, 1, 'completed', '2023-08-15'),
(3, 3, 2, 'not started', '2023-09-01'),
(4, 4, 3, 'completed', '2023-08-05'),
(5, 5, 4, 'in progress', '2023-09-12'),
(6, 6, 5, 'completed', '2023-09-18'),
(7, 7, 6, 'in progress', '2023-07-22'),
(8, 8, 7, 'completed', '2023-08-20'),
(9, 9, 8, 'not started', '2023-09-09'),
(10, 10, 9, 'completed', '2023-09-11'),
(11, 1, 2, 'completed', '2023-08-05'),
(12, 2, 3, 'in progress', '2023-09-10'),
(13, 3, 4, 'completed', '2023-08-22'),
(14, 4, 5, 'not started', '2023-07-18'),
(15, 5, 6, 'in progress', '2023-08-30'),
(16, 6, 7, 'completed', '2023-09-15'),
(17, 7, 8, 'in progress', '2023-08-28'),
(18, 8, 9, 'completed', '2023-09-17'),
(19, 9, 10, 'not started', '2023-07-25'),
(20, 10, 11, 'in progress', '2023-08-03'),
(21, 1, 12, 'in progress', '2023-08-05'),
(22, 2, 13, 'not started', '2023-09-10'),
(23, 3, 14, 'completed', '2023-08-12'),
(24, 4, 15, 'in progress', '2023-09-11'),
(25, 5, 16, 'not started', '2023-09-03'),
(26, 6, 17, 'completed', '2023-08-17'),
(27, 7, 18, 'in progress', '2023-09-15'),
(28, 8, 19, 'completed', '2023-09-18'),
(29, 9, 20, 'not started', '2023-07-25'),
(30, 10, 21, 'in progress', '2023-08-03'),
(31, 11, 1, 'completed', '2023-08-10'),
(32, 12, 2, 'in progress', '2023-08-18'),
(33, 13, 3, 'not started', '2023-09-02'),
(34, 14, 4, 'completed', '2023-08-29'),
(35, 15, 5, 'in progress', '2023-08-15'),
(36, 16, 6, 'not started', '2023-09-07'),
(37, 17, 7, 'completed', '2023-09-05'),
(38, 18, 8, 'in progress', '2023-08-26'),
(39, 19, 9, 'completed', '2023-08-17'),
(40, 20, 10, 'not started', '2023-09-09'),
(101, 1, 13, 'completed', '2023-09-01'),
(102, 1, 14, 'in progress', '2023-09-05'),
(103, 1, 15, 'not started', '2023-09-10'),
(104, 2, 17, 'completed', '2023-09-12'),
(105, 2, 18, 'in progress', '2023-09-15'),
(106, 2, 19, 'not started', '2023-09-18'),
(107, 3, 20, 'completed', '2023-09-02'),
(108, 3, 21, 'in progress', '2023-09-07'),
(109, 3, 22, 'not started', '2023-09-09'),
(110, 4, 12, 'completed', '2023-09-11'),
(111, 4, 16, 'in progress', '2023-09-14'),
(112, 4, 17, 'not started', '2023-09-20'),
(113, 5, 18, 'completed', '2023-09-03'),
(114, 5, 20, 'in progress', '2023-09-06'),
(115, 5, 21, 'not started', '2023-09-13'),
(116, 6, 19, 'completed', '2023-09-05'),
(117, 6, 22, 'in progress', '2023-09-08'),
(118, 6, 12, 'not started', '2023-09-15'),
(119, 7, 13, 'completed', '2023-09-01'),
(120, 7, 15, 'in progress', '2023-09-04'),
(121, 7, 19, 'not started', '2023-09-10'),
(122, 8, 20, 'completed', '2023-09-18'),
(123, 8, 21, 'in progress', '2023-09-20'),
(124, 8, 22, 'not started', '2023-09-25'),
(125, 9, 12, 'completed', '2023-09-12'),
(126, 9, 13, 'in progress', '2023-09-14'),
(127, 9, 14, 'not started', '2023-09-22'),
(128, 10, 15, 'completed', '2023-09-08'),
(129, 10, 17, 'in progress', '2023-09-10'),
(130, 10, 18, 'not started', '2023-09-11'),
(131, 11, 19, 'completed', '2023-09-05'),
(132, 11, 21, 'in progress', '2023-09-20'),
(133, 11, 22, 'not started', '2023-09-25'),
(134, 12, 13, 'completed', '2023-09-02'),
(135, 12, 14, 'in progress', '2023-09-07'),
(136, 12, 16, 'not started', '2023-09-14'),
(137, 13, 18, 'completed', '2023-09-03'),
(138, 13, 19, 'in progress', '2023-09-06'),
(139, 13, 21, 'not started', '2023-09-11'),
(140, 14, 22, 'completed', '2023-09-09'),
(141, 14, 12, 'in progress', '2023-09-15'),
(142, 14, 13, 'not started', '2023-09-21'),
(143, 15, 14, 'completed', '2023-09-05'),
(144, 15, 15, 'in progress', '2023-09-10'),
(145, 15, 17, 'not started', '2023-09-12'),
(146, 16, 20, 'completed', '2023-09-01'),
(147, 16, 22, 'in progress', '2023-09-08'),
(148, 16, 12, 'not started', '2023-09-14'),
(149, 17, 13, 'completed', '2023-09-04'),
(150, 17, 14, 'in progress', '2023-09-10'),
(151, 17, 15, 'not started', '2023-09-15'),
(152, 18, 17, 'completed', '2023-09-18'),
(153, 18, 18, 'in progress', '2023-09-22'),
(154, 18, 19, 'not started', '2023-09-27'),
(155, 19, 21, 'completed', '2023-09-03'),
(156, 19, 22, 'in progress', '2023-09-09'),
(157, 19, 12, 'not started', '2023-09-16'),
(158, 20, 13, 'completed', '2023-09-12'),
(159, 20, 15, 'in progress', '2023-09-15'),
(160, 20, 17, 'not started', '2023-09-20');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `userID` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`userID`, `firstName`, `surname`) VALUES
(1, 'John', 'Doe'),
(2, 'Jane', 'Smith'),
(3, 'Michael', 'Johnson'),
(4, 'Alice', 'Brown'),
(5, 'Bob', 'White'),
(6, 'Charlie', 'Black'),
(7, 'David', 'Green'),
(8, 'Eve', 'Taylor'),
(9, 'Frank', 'Anderson'),
(10, 'Grace', 'Moore'),
(11, 'Hank', 'Miller'),
(12, 'Ivy', 'Wilson'),
(13, 'Jack', 'Thomas'),
(14, 'Kate', 'Garcia'),
(15, 'Leo', 'Martinez'),
(16, 'Mia', 'Robinson'),
(17, 'Nina', 'Clark'),
(18, 'Owen', 'Lopez'),
(19, 'Paul', 'Lewis'),
(20, 'Quincy', 'Walker'),
(21, 'Rita', 'Foster'),
(22, 'Sam', 'Evans'),
(23, 'Tom', 'Harris'),
(24, 'Ursula', 'Watson'),
(25, 'Vera', 'Parker'),
(26, 'Wade', 'Brooks'),
(27, 'Xander', 'Young'),
(28, 'Yara', 'Mitchell'),
(29, 'Zane', 'Griffin'),
(30, 'Amelia', 'Reed'),
(31, 'Brandon', 'Ford'),
(32, 'Carla', 'Adams'),
(33, 'Diana', 'Baker'),
(34, 'Ethan', 'Carter'),
(35, 'Fiona', 'Davis'),
(36, 'George', 'Edwards'),
(37, 'Hannah', 'Fisher'),
(38, 'Isaac', 'Gonzalez'),
(39, 'Julia', 'Hall'),
(40, 'Kyle', 'King');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Courses`
--
ALTER TABLE `Courses`
  ADD PRIMARY KEY (`courseID`);

--
-- Indexes for table `Enrolments`
--
ALTER TABLE `Enrolments`
  ADD PRIMARY KEY (`enrolmentID`),
  ADD UNIQUE KEY `unique_enrolment` (`userID`,`courseID`),
  ADD KEY `courseID` (`courseID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Courses`
--
ALTER TABLE `Courses`
  MODIFY `courseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `Enrolments`
--
ALTER TABLE `Enrolments`
  MODIFY `enrolmentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Enrolments`
--
ALTER TABLE `Enrolments`
  ADD CONSTRAINT `enrolments_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `Users` (`userID`),
  ADD CONSTRAINT `enrolments_ibfk_2` FOREIGN KEY (`courseID`) REFERENCES `Courses` (`courseID`);
