<?php
error_reporting(E_ALL); // Ensure these are turned off in production
ini_set('display_errors', 1); // Ensure these are turned off in production
session_start();

// Generate CSRF token if not already set
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$servername = "localhost";
$username = "root";
$password = "Adht@65602001"; // Ensure to secure database credentials
$dbname = "myFormDB";

// Check CSRF token validity
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die('CSRF token validation failed');
    }

    // Create database connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO Users (name, countryCode, phoneNumber, additionalInfo) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $countryCode, $phoneNumber, $additionalInfo);

    // Sanitize and validate inputs
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $countryCode = filter_input(INPUT_POST, 'countryCode', FILTER_SANITIZE_STRING);
    $phoneNumber = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
