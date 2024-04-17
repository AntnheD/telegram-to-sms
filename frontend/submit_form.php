<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

$servername = "localhost";
$username = "root";
$password = "Adht@65602001";
$dbname = "myFormDB";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // CSRF token check
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die('CSRF token validation failed');
    }

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Sanitize and validate inputs
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $countryCode = filter_input(INPUT_POST, 'countryCode', FILTER_SANITIZE_STRING);
    $phoneNumber = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $additionalInfo = filter_input(INPUT_POST, 'additionalInfo', FILTER_SANITIZE_STRING);

    $stmt = $conn->prepare("INSERT INTO Users (name, countryCode, phoneNumber, additionalInfo) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $countryCode, $phoneNumber, $additionalInfo);

    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
