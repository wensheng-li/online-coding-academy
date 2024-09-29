<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'config.php';

$query = "SELECT u.firstName, u.surName, c.description, e.completionStatus, e.enrolledDate 
          FROM enrolments e
          JOIN users u ON e.userID = u.userID
          JOIN courses c ON e.courseID = c.courseID";

$stmt = $pdo->query($query);
$enrolments = $stmt->fetchAll();
echo json_encode($enrolments);
