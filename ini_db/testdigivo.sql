-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.4.3 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table testdigivo.orders: ~51 rows (approximately)
REPLACE INTO `orders` (`id`, `produk_id`, `nama_produk`, `harga`, `kode_unik`, `status`, `tanggal`) VALUES
	(1, 'PRD-289', 'Produk A', 299000, 1, 'pending', '2025-07-29 21:35:51'),
	(2, 'PRD-553', 'Produk A', 299000, 7, 'pending', '2025-07-29 21:40:14'),
	(3, 'PRD-823', 'Produk A', 299000, 5, 'pending', '2025-07-29 21:40:15'),
	(4, 'PRD-645', 'Produk A', 299000, 6, 'pending', '2025-07-29 21:40:15'),
	(5, 'PRD-882', 'Produk A', 299000, 4, 'pending', '2025-07-29 21:40:15'),
	(6, 'PRD-372', 'Produk A', 299000, 10, 'pending', '2025-07-29 21:40:15'),
	(7, 'PRD-334', 'Produk A', 299000, 2, 'pending', '2025-07-29 21:40:15'),
	(8, 'PRD-651', 'Produk A', 299000, 9, 'pending', '2025-07-29 21:40:15'),
	(9, 'PRD-304', 'Produk A', 299000, 3, 'pending', '2025-07-29 21:40:15'),
	(10, 'PRD-723', 'Produk A', 299000, 8, 'pending', '2025-07-29 21:40:15'),
	(11, 'PRD-139', 'Produk A', 299000, 1, 'pending', '2025-07-29 21:40:15'),
	(12, 'PRD-99', 'Produk A', 299000, 5, 'pending', '2025-07-29 21:40:15'),
	(13, 'PRD-400', 'Produk A', 299000, 8, 'pending', '2025-07-29 21:40:15'),
	(14, 'PRD-244', 'Produk A', 299000, 7, 'pending', '2025-07-29 21:40:15'),
	(15, 'PRD-53', 'Produk A', 299000, 9, 'pending', '2025-07-29 21:40:15'),
	(16, 'PRD-927', 'Produk A', 299000, 6, 'pending', '2025-07-29 21:40:15'),
	(17, 'PRD-890', 'Produk A', 299000, 2, 'pending', '2025-07-29 21:40:15'),
	(18, 'PRD-467', 'Produk A', 299000, 4, 'pending', '2025-07-29 21:40:15'),
	(19, 'PRD-899', 'Produk A', 299000, 1, 'pending', '2025-07-29 21:40:15'),
	(20, 'PRD-612', 'Produk A', 299000, 10, 'pending', '2025-07-29 21:40:15'),
	(21, 'PRD-780', 'Produk A', 299000, 3, 'pending', '2025-07-29 21:40:15'),
	(22, 'PRD-481', 'Produk A', 299000, 4, 'pending', '2025-07-29 21:40:15'),
	(23, 'PRD-256', 'Produk A', 299000, 8, 'pending', '2025-07-29 21:40:15'),
	(24, 'PRD-207', 'Produk A', 299000, 6, 'pending', '2025-07-29 21:40:15'),
	(25, 'PRD-961', 'Produk A', 299000, 2, 'pending', '2025-07-29 21:40:15'),
	(26, 'PRD-953', 'Produk A', 299000, 1, 'pending', '2025-07-29 21:40:15'),
	(27, 'PRD-539', 'Produk A', 299000, 7, 'pending', '2025-07-29 21:40:15'),
	(28, 'PRD-707', 'Produk A', 299000, 9, 'pending', '2025-07-29 21:40:15'),
	(29, 'PRD-882', 'Produk A', 299000, 3, 'pending', '2025-07-29 21:40:15'),
	(30, 'PRD-386', 'Produk A', 299000, 10, 'pending', '2025-07-29 21:40:15'),
	(31, 'PRD-682', 'Produk A', 299000, 5, 'pending', '2025-07-29 21:40:15'),
	(32, 'PRD-63', 'Produk A', 299000, 6, 'pending', '2025-07-29 21:40:15'),
	(33, 'PRD-766', 'Produk A', 299000, 7, 'pending', '2025-07-29 21:40:15'),
	(34, 'PRD-821', 'Produk A', 299000, 8, 'pending', '2025-07-29 21:40:15'),
	(35, 'PRD-642', 'Produk A', 299000, 2, 'pending', '2025-07-29 21:40:15'),
	(36, 'PRD-569', 'Produk A', 299000, 10, 'pending', '2025-07-29 21:40:15'),
	(37, 'PRD-703', 'Produk A', 299000, 9, 'pending', '2025-07-29 21:40:15'),
	(38, 'PRD-502', 'Produk A', 299000, 3, 'pending', '2025-07-29 21:40:15'),
	(39, 'PRD-895', 'Produk A', 299000, 1, 'pending', '2025-07-29 21:40:15'),
	(40, 'PRD-5', 'Produk A', 299000, 5, 'pending', '2025-07-29 21:40:15'),
	(41, 'PRD-898', 'Produk A', 299000, 4, 'pending', '2025-07-29 21:40:15'),
	(42, 'PRD-76', 'Produk A', 299000, 7, 'pending', '2025-07-29 21:40:15'),
	(43, 'PRD-167', 'Produk A', 299000, 5, 'pending', '2025-07-29 21:40:15'),
	(44, 'PRD-574', 'Produk A', 299000, 8, 'pending', '2025-07-29 21:40:15'),
	(45, 'PRD-252', 'Produk A', 299000, 2, 'pending', '2025-07-29 21:40:15'),
	(46, 'PRD-826', 'Produk A', 299000, 9, 'pending', '2025-07-29 21:40:15'),
	(47, 'PRD-527', 'Produk A', 299000, 6, 'pending', '2025-07-29 21:40:15'),
	(48, 'PRD-352', 'Produk A', 299000, 10, 'pending', '2025-07-29 21:40:15'),
	(49, 'PRD-332', 'Produk A', 299000, 1, 'pending', '2025-07-29 21:40:15'),
	(50, 'PRD-566', 'Produk A', 299000, 4, 'pending', '2025-07-29 21:40:15'),
	(51, 'PRD-837', 'Produk A', 299000, 3, 'pending', '2025-07-29 21:40:15');

-- Dumping data for table testdigivo.webhooks: ~4 rows (approximately)
REPLACE INTO `webhooks` (`id`, `url`, `secret_key`, `created_at`) VALUES
	(1, 'https://8135f1a05678.ngrok-free.app/webhook/order', 'rahasia123', '2025-07-29 22:04:31'),
	(2, 'https://8135f1a05678.ngrok-free.app/webhook/order', 'rahasia_client_123', '2025-07-29 22:18:25'),
	(3, 'https://8135f1a05678.ngrok-free.app/webhook/order', 'rahasia123456', '2025-07-29 22:25:08'),
	(4, 'https://8135f1a05678.ngrok-free.app/webhook/order', 'rahasia_client_123', '2025-07-29 22:30:01');

-- Dumping data for table testdigivo.webhook_logs: ~8 rows (approximately)
REPLACE INTO `webhook_logs` (`id`, `webhook_id`, `payload`, `attempt`, `status_code`, `success`, `next_attempt_at`, `created_at`) VALUES
	(1, 1, '{"orderId":1,"produkId":"PRD-289","status":"PAID","timestamp":"2025-07-29T15:06:30.216Z"}', 1, 404, 0, '2025-07-29 22:11:31', '2025-07-29 22:06:30'),
	(2, 1, '{"orderId":1,"produkId":"PRD-289","timestamp":"2025-07-29T15:27:14.211Z"}', 1, 404, 0, '2025-07-29 22:32:15', '2025-07-29 22:27:14'),
	(3, 2, '{"orderId":1,"produkId":"PRD-289","timestamp":"2025-07-29T15:27:14.211Z"}', 1, 404, 0, '2025-07-29 22:32:15', '2025-07-29 22:27:14'),
	(4, 3, '{"orderId":1,"produkId":"PRD-289","timestamp":"2025-07-29T15:27:14.211Z"}', 1, 404, 0, '2025-07-29 22:32:15', '2025-07-29 22:27:14'),
	(5, 1, '{"orderId":1,"produkId":"PRD-289","timestamp":"2025-07-29T15:30:06.783Z"}', 1, 404, 0, '2025-07-29 22:35:07', '2025-07-29 22:30:07'),
	(6, 2, '{"orderId":1,"produkId":"PRD-289","timestamp":"2025-07-29T15:30:06.783Z"}', 1, 404, 0, '2025-07-29 22:35:07', '2025-07-29 22:30:07'),
	(7, 3, '{"orderId":1,"produkId":"PRD-289","timestamp":"2025-07-29T15:30:06.783Z"}', 1, 404, 0, '2025-07-29 22:35:07', '2025-07-29 22:30:07'),
	(8, 4, '{"orderId":1,"produkId":"PRD-289","timestamp":"2025-07-29T15:30:06.783Z"}', 1, 404, 0, '2025-07-29 22:35:07', '2025-07-29 22:30:07');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
