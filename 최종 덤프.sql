-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: joeun
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `admin_no` int NOT NULL AUTO_INCREMENT,
  `admin_id` varchar(100) NOT NULL DEFAULT 'ADMIN',
  `admin_pw` varchar(200) NOT NULL,
  PRIMARY KEY (`admin_no`,`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='상품(항공권) 입출고';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin','$2a$10$1NaVkTS9r8i2tYVO5krPN.BBdhFsNBeBiM6omKVudXJWOBnLJ9Gz.');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `airport`
--

DROP TABLE IF EXISTS `airport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airport` (
  `airport_no` int NOT NULL AUTO_INCREMENT,
  `airport_code` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL COMMENT '국제 OR 국내',
  PRIMARY KEY (`airport_no`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airport`
--

LOCK TABLES `airport` WRITE;
/*!40000 ALTER TABLE `airport` DISABLE KEYS */;
/*!40000 ALTER TABLE `airport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth` (
  `auth_no` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  `auth` varchar(100) NOT NULL,
  PRIMARY KEY (`auth_no`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='권한';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

LOCK TABLES `auth` WRITE;
/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES (1,'admin','ROLE_ADMIN'),(2,'admin','ROLE_USER'),(3,'user','ROLE_USER');
/*!40000 ALTER TABLE `auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
  `board_no` int NOT NULL AUTO_INCREMENT,
  `writer` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` text,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `upd_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `views` int NOT NULL DEFAULT '0',
  `user_no` int NOT NULL DEFAULT '0',
  `admin_no` int NOT NULL DEFAULT '0',
  `like` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`board_no`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='게시판';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,'관리자','오늘은 프랑스로 떠나요','<p>프랑스 그랑데스트 지역의 동화 같은 풍경이 펼쳐지는 스트라스부르로 지금 떠나요!</p>','2023-12-13 07:44:54','2023-12-13 07:44:54','2023-12-13 07:44:54',0,0,0,0),(2,'관리자','해외 여행 어떠신가요?','<p>해외 여행 어떠신가요?</p>','2023-12-13 07:45:40','2023-12-13 07:45:40','2023-12-13 07:45:40',0,0,0,0),(3,'관리자','힐링 하세요!','<p>예쁜 스위스의 풍경입니다. 힐링하세요!</p>','2023-12-13 07:46:04','2023-12-13 07:46:04','2023-12-13 07:46:04',0,0,0,0);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `booking_no` int NOT NULL AUTO_INCREMENT COMMENT '예매 번호',
  `name` varchar(20) NOT NULL,
  `seat_no` varchar(10) DEFAULT NULL,
  `user_no` int DEFAULT NULL,
  `user_no2` int DEFAULT '0',
  `product_no` int NOT NULL,
  `route_no` int NOT NULL,
  `pas_count` int NOT NULL,
  `round_trip` varchar(50) NOT NULL,
  `status` varchar(100) NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `upd_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `product_id` varchar(20) NOT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`booking_no`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='예매';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,'이유나','A1',2,0,1,1,1,'왕복','예매완료','2023-12-18 06:09:35','2023-12-18 06:09:35','PT0001','user'),(2,'이유나','A1',2,0,5,5,1,'왕복','예매완료','2023-12-18 06:09:35','2023-12-18 06:09:35','PT0005','user'),(3,'비회원','A1',0,1,3,3,1,'편도','예매완료','2023-12-18 06:37:01','2023-12-18 06:37:01','PT0003','GUEST_07160'),(4,'테스트','B3',3,0,1,1,1,'왕복','예매완료','2023-12-18 09:06:09','2023-12-18 09:06:09','PT0001','test'),(5,'테스트','B3',3,0,5,5,1,'왕복','예매완료','2023-12-18 09:06:09','2023-12-18 09:06:09','PT0005','test'),(6,'테스트2','D4',1,0,4,4,1,'편도','예매완료','2023-12-18 09:14:15','2023-12-18 09:14:15','PT0004','admin');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_no` int NOT NULL AUTO_INCREMENT,
  `product_no` int NOT NULL,
  `user_no` int DEFAULT NULL,
  `user_no2` int DEFAULT NULL,
  `cart_cnt` int NOT NULL,
  PRIMARY KEY (`cart_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='장바구니';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_no` int NOT NULL AUTO_INCREMENT,
  `board_no` int NOT NULL,
  `parent_table` varchar(50) NOT NULL,
  `parent_no` int NOT NULL,
  `writer` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `group_no` int DEFAULT '0',
  `super_no` int DEFAULT '0',
  `depth_no` int NOT NULL DEFAULT '0',
  `seq_no` int NOT NULL DEFAULT '0',
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `upd_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sub_count` int DEFAULT '0',
  PRIMARY KEY (`comment_no`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='댓글';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,12,'board',12,'123','tnwjd~',0,0,0,0,'2023-12-11 09:37:48','2023-12-11 09:37:48',0);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `file_no` int NOT NULL AUTO_INCREMENT,
  `board_no` int DEFAULT NULL,
  `parent_table` varchar(50) NOT NULL,
  `parent_no` int NOT NULL,
  `file_name` text NOT NULL,
  `origin_name` text,
  `file_path` text NOT NULL,
  `file_size` int NOT NULL DEFAULT '0',
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `upd_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `file_code` int NOT NULL,
  PRIMARY KEY (`file_no`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='파일';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (1,1,'flight',1,'fe3c9954-0125-42ab-b8d0-7c33662899e8_비행기.png','비행기.png','C:/upload/fe3c9954-0125-42ab-b8d0-7c33662899e8_비행기.png',18389,'2023-11-21 11:23:51','2023-11-21 11:23:51',0),(2,2,'flight',2,'e9e3bb51-aa38-41cb-b411-88e52e3336d0_비행기.png','비행기.png','C:/upload/e9e3bb51-aa38-41cb-b411-88e52e3336d0_비행기.png',18389,'2023-11-21 11:24:13','2023-11-21 11:24:13',0),(3,3,'flight',3,'697590b1-45a9-4781-9b26-0a3d38b60d44_비행기.png','비행기.png','C:/upload/697590b1-45a9-4781-9b26-0a3d38b60d44_비행기.png',18389,'2023-11-21 11:24:33','2023-11-21 11:24:33',0),(4,4,'flight',4,'593b3871-b7a1-4fcc-a625-19fd591b5e3b_비행기.png','비행기.png','C:/upload/593b3871-b7a1-4fcc-a625-19fd591b5e3b_비행기.png',18389,'2023-11-21 11:24:53','2023-11-21 11:24:53',0),(5,5,'flight',5,'135e22f1-6327-4272-b4b2-a470c9c52c64_비행기.png','비행기.png','C:/upload/135e22f1-6327-4272-b4b2-a470c9c52c64_비행기.png',18389,'2023-11-21 11:25:14','2023-11-21 11:25:14',0),(6,6,'flight',6,'d4012c7f-f278-4aa2-8508-64bd17fc8709_비행기.png','비행기.png','C:/upload/d4012c7f-f278-4aa2-8508-64bd17fc8709_비행기.png',18389,'2023-11-21 11:27:54','2023-11-21 11:27:54',0),(7,7,'flight',7,'6dc8fe73-c6e3-46e5-8771-d67a4bb65115_비행기.png','비행기.png','C:/upload/6dc8fe73-c6e3-46e5-8771-d67a4bb65115_비행기.png',18389,'2023-11-21 11:28:15','2023-11-21 11:28:15',0),(8,8,'flight',8,'76a7024d-ae8a-41c2-b620-2b011c8a8368_비행기.png','비행기.png','C:/upload/76a7024d-ae8a-41c2-b620-2b011c8a8368_비행기.png',18389,'2023-11-21 11:28:32','2023-11-21 11:28:32',0),(9,NULL,'product',1,'09a129e7-ba19-4295-9093-6ae3bb2d7d4f_티켓.png','티켓.png','C:/upload/09a129e7-ba19-4295-9093-6ae3bb2d7d4f_티켓.png',42921,'2023-12-13 07:38:36','2023-12-13 07:38:36',0),(10,NULL,'product',2,'e753ce8d-889f-4b10-9f61-02cacd0cb3d2_티켓.png','티켓.png','C:/upload/e753ce8d-889f-4b10-9f61-02cacd0cb3d2_티켓.png',42921,'2023-12-13 07:39:01','2023-12-13 07:39:01',0),(11,NULL,'product',3,'339078fe-a197-411e-8374-01f0d0c07fd8_티켓.png','티켓.png','C:/upload/339078fe-a197-411e-8374-01f0d0c07fd8_티켓.png',42921,'2023-12-13 07:39:26','2023-12-13 07:39:26',0),(12,NULL,'product',4,'1bde09ef-9ecf-42fc-a983-6eaf9cc0d638_티켓.png','티켓.png','C:/upload/1bde09ef-9ecf-42fc-a983-6eaf9cc0d638_티켓.png',42921,'2023-12-13 07:39:50','2023-12-13 07:39:50',0),(13,NULL,'product',5,'329e1291-7eec-40bf-ab69-fad820d9fe9e_티켓.png','티켓.png','C:/upload/329e1291-7eec-40bf-ab69-fad820d9fe9e_티켓.png',42921,'2023-12-13 07:41:03','2023-12-13 07:41:03',0),(14,NULL,'product',6,'a2ddbc4a-3442-48aa-a9cf-ee97dc3fa13d_티켓.png','티켓.png','C:/upload/a2ddbc4a-3442-48aa-a9cf-ee97dc3fa13d_티켓.png',42921,'2023-12-13 07:41:27','2023-12-13 07:41:27',0),(15,NULL,'product',7,'133648f2-12ad-456e-a302-e11becff2bae_티켓.png','티켓.png','C:/upload/133648f2-12ad-456e-a302-e11becff2bae_티켓.png',42921,'2023-12-13 07:41:52','2023-12-13 07:41:52',0),(16,NULL,'product',8,'20485dc7-937e-44cb-82b7-561b6dcb6553_티켓.png','티켓.png','C:/upload/20485dc7-937e-44cb-82b7-561b6dcb6553_티켓.png',42921,'2023-12-13 07:42:14','2023-12-13 07:42:14',0),(17,NULL,'board',1,'058fda19-bac5-4040-9903-2e90b7b5a2c9_a7b86fb9-62b5-42cf-8a0e-f67c5d4fc58d_2b5a36d4-b9af-4177-b859-9030e83e899d_KakaoTalk_20231212_182519607.jpg','a7b86fb9-62b5-42cf-8a0e-f67c5d4fc58d_2b5a36d4-b9af-4177-b859-9030e83e899d_KakaoTalk_20231212_182519607.jpg','C:/upload/058fda19-bac5-4040-9903-2e90b7b5a2c9_a7b86fb9-62b5-42cf-8a0e-f67c5d4fc58d_2b5a36d4-b9af-4177-b859-9030e83e899d_KakaoTalk_20231212_182519607.jpg',303430,'2023-12-13 07:44:54','2023-12-13 07:44:54',0),(18,NULL,'board',2,'01d47c38-7f96-4c72-b4ee-2062b4534527_dc4b9efd-7dee-47a9-8ead-170d78ebde40_slideImg03.jpg','dc4b9efd-7dee-47a9-8ead-170d78ebde40_slideImg03.jpg','C:/upload/01d47c38-7f96-4c72-b4ee-2062b4534527_dc4b9efd-7dee-47a9-8ead-170d78ebde40_slideImg03.jpg',584432,'2023-12-13 07:45:40','2023-12-13 07:45:40',0),(19,NULL,'board',3,'b7d78990-d34a-4418-80f6-f0fc4dd27195_1.jpg','1.jpg','C:/upload/b7d78990-d34a-4418-80f6-f0fc4dd27195_1.jpg',2067850,'2023-12-13 07:46:04','2023-12-13 07:46:04',0);
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flight`
--

DROP TABLE IF EXISTS `flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flight` (
  `flight_no` int NOT NULL AUTO_INCREMENT,
  `flight_name` varchar(20) NOT NULL,
  `route_no` int NOT NULL,
  `seat_Max` int NOT NULL,
  `seat_remaining` int NOT NULL DEFAULT '0',
  `seat_used` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`flight_no`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight`
--

LOCK TABLES `flight` WRITE;
/*!40000 ALTER TABLE `flight` DISABLE KEYS */;
INSERT INTO `flight` VALUES (1,'air0001',1,40,40,0),(2,'air0002',2,40,40,0),(3,'air0003',3,40,40,0),(4,'air0004',4,40,40,0),(5,'air0005',5,40,40,0),(6,'air0006',6,40,40,0),(7,'air0007',7,40,40,0),(8,'air0008',8,40,40,0);
/*!40000 ALTER TABLE `flight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mileage`
--

DROP TABLE IF EXISTS `mileage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mileage` (
  `user_id` varchar(100) NOT NULL,
  `mileage` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='마일리지';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mileage`
--

LOCK TABLES `mileage` WRITE;
/*!40000 ALTER TABLE `mileage` DISABLE KEYS */;
INSERT INTO `mileage` VALUES ('admin',0),('user',50000);
/*!40000 ALTER TABLE `mileage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passengers`
--

DROP TABLE IF EXISTS `passengers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passengers` (
  `passenger_no` int NOT NULL AUTO_INCREMENT,
  `PIN_TYPE` int NOT NULL,
  `passenger_name` varchar(100) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `gender` varchar(20) NOT NULL,
  `birth` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `booking_no` int DEFAULT NULL,
  `route_no` int DEFAULT NULL,
  `seat_no_dep` varchar(10) DEFAULT NULL COMMENT '좌석 번호(가는 편)',
  `seat_no_des` varchar(10) DEFAULT NULL COMMENT '좌석 번호(오는 편)',
  `product_no_dep` int NOT NULL,
  `product_no_des` int DEFAULT NULL,
  `route_no_dep` int DEFAULT NULL COMMENT '노선 번호(가는 편)',
  `route_no_des` int DEFAULT NULL COMMENT '노선 번호(오는 편)',
  `user_pw` varchar(50) DEFAULT NULL COMMENT '비회원 비밀번호',
  PRIMARY KEY (`passenger_no`,`PIN_TYPE`,`passenger_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='탑승객';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passengers`
--

LOCK TABLES `passengers` WRITE;
/*!40000 ALTER TABLE `passengers` DISABLE KEYS */;
/*!40000 ALTER TABLE `passengers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passport`
--

DROP TABLE IF EXISTS `passport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passport` (
  `passport_no` varchar(200) NOT NULL,
  `PIN_TYPE` int NOT NULL COMMENT '1 - 주민등록증 / 2 - 여권 / 3 - 운전면허증',
  `user_id` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `nationality` varchar(200) NOT NULL,
  `expiration_date` varchar(200) NOT NULL,
  PRIMARY KEY (`passport_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='여권 정보';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passport`
--

LOCK TABLES `passport` WRITE;
/*!40000 ALTER TABLE `passport` DISABLE KEYS */;
/*!40000 ALTER TABLE `passport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persistent_logins`
--

DROP TABLE IF EXISTS `persistent_logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persistent_logins` (
  `username` varchar(64) NOT NULL,
  `series` varchar(64) NOT NULL,
  `token` varchar(64) NOT NULL,
  `last_used` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`series`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persistent_logins`
--

LOCK TABLES `persistent_logins` WRITE;
/*!40000 ALTER TABLE `persistent_logins` DISABLE KEYS */;
/*!40000 ALTER TABLE `persistent_logins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pin`
--

DROP TABLE IF EXISTS `pin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pin` (
  `PIN_TYPE` int NOT NULL COMMENT '1 - 주민등록증 / 2 - 여권 / 3 - 운전면허증',
  `pin_name` varchar(50) NOT NULL,
  PRIMARY KEY (`PIN_TYPE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='신분증';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pin`
--

LOCK TABLES `pin` WRITE;
/*!40000 ALTER TABLE `pin` DISABLE KEYS */;
/*!40000 ALTER TABLE `pin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_no` int NOT NULL AUTO_INCREMENT COMMENT '순번(상품)',
  `product_id` varchar(20) NOT NULL COMMENT '상품 아이디(코드)',
  `route_no` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `product_cat` varchar(100) NOT NULL,
  `product_price` int NOT NULL,
  `departure` varchar(20) NOT NULL,
  `destination` varchar(20) NOT NULL,
  `product_regdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `product_upddate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(200) DEFAULT NULL COMMENT '상품 설명',
  `unitsInStock` int NOT NULL COMMENT '재고 수',
  `file` varchar(100) DEFAULT NULL COMMENT '상품 이미지',
  `cart_no` int DEFAULT NULL COMMENT '장바구니 번호',
  `cart_cnt` int DEFAULT NULL COMMENT '장바구니 상품 수량',
  `duration` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`product_no`,`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='상품(항공권)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'PT0001',1,'김포-제주','ticket',50000,'김포','제주','2023-12-13 07:38:36','2023-12-13 07:38:36','<p>김포-제주 항공편 입니다.</p>',40,NULL,NULL,NULL,'1'),(2,'PT0002',2,'김포-부산','ticket',50000,'김포','부산','2023-12-13 07:39:01','2023-12-13 07:39:01','<p>김포-부산 항공편 입니다.</p>',40,NULL,NULL,NULL,'1'),(3,'PT0003',3,'김포-울산','ticket',50000,'김포','울산','2023-12-13 07:39:26','2023-12-13 07:39:26','<p>김포-울산 항공편 입니다.</p>',40,NULL,NULL,NULL,'1'),(4,'PT0004',4,'김포-여수','ticket',50000,'김포','여수','2023-12-13 07:39:50','2023-12-13 07:39:50','<p>김포-여수 항공편 입니다.</p>',40,NULL,NULL,NULL,'1'),(5,'PT0005',5,'제주-김포','ticket',50000,'제주','김포','2023-12-13 07:41:03','2023-12-13 07:41:03','<p>제주-김포 항공편 입니다.</p>',40,NULL,NULL,NULL,'1'),(6,'PT0006',6,'부산-김포','ticket',50000,'부산','김포','2023-12-13 07:41:27','2023-12-13 07:41:27','<p>부산-김포 항공편 입니다.</p>',40,NULL,NULL,NULL,'1'),(7,'PT0007',7,'울산-김포','ticket',50000,'울산','김포','2023-12-13 07:41:52','2023-12-13 07:41:52','<p>울산-김포 항공편 입니다.</p>',40,NULL,NULL,NULL,'1'),(8,'PT0008',8,'여수-김포','ticket',50000,'여수','김포','2023-12-13 07:42:14','2023-12-13 07:42:14','<p>여수-김포 항공편 입니다.</p>',40,NULL,NULL,NULL,'1');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_io`
--

DROP TABLE IF EXISTS `product_io`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_io` (
  `io_no` int NOT NULL AUTO_INCREMENT,
  `product_no` int NOT NULL,
  `route_no` int NOT NULL,
  `booking_no` int NOT NULL,
  `amount` int NOT NULL,
  `type` varchar(100) NOT NULL,
  `cart_no` int DEFAULT NULL,
  `cart_cnt` int DEFAULT NULL,
  PRIMARY KEY (`io_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_io`
--

LOCK TABLES `product_io` WRITE;
/*!40000 ALTER TABLE `product_io` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_io` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qr`
--

DROP TABLE IF EXISTS `qr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qr` (
  `qr_no` int NOT NULL AUTO_INCREMENT,
  `parent_table` varchar(45) NOT NULL,
  `parent_no` int NOT NULL,
  `url` text NOT NULL,
  `name` text,
  `file_path` text NOT NULL,
  `file_size` int NOT NULL DEFAULT '0',
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `upd_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`qr_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='QR';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qr`
--

LOCK TABLES `qr` WRITE;
/*!40000 ALTER TABLE `qr` DISABLE KEYS */;
/*!40000 ALTER TABLE `qr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `route`
--

DROP TABLE IF EXISTS `route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `route` (
  `route_no` int NOT NULL AUTO_INCREMENT,
  `departure` varchar(50) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `departure_time` varchar(50) NOT NULL,
  `destination_time` varchar(50) NOT NULL,
  `departure_date` varchar(50) NOT NULL,
  `destination_date` varchar(50) NOT NULL,
  PRIMARY KEY (`route_no`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='노선';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `route`
--

LOCK TABLES `route` WRITE;
/*!40000 ALTER TABLE `route` DISABLE KEYS */;
INSERT INTO `route` VALUES (1,'김포','제주','15:00','16:00','2023/12/18','2023/12/18'),(2,'김포','부산','15:00','16:00','2023/12/18','2023/12/18'),(3,'김포','울산','15:00','16:00','2023/12/18','2023/12/18'),(4,'김포','여수','15:00','16:00','2023/12/18','2023/12/18'),(5,'제주','김포','15:00','16:00','2023/12/18','2023/12/18'),(6,'부산','김포','15:00','16:00','2023/12/18','2023/12/18'),(7,'울산','김포','15:00','16:00','2023/12/18','2023/12/18'),(8,'여수','김포','15:00','16:00','2023/12/18','2023/12/18');
/*!40000 ALTER TABLE `route` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat` (
  `no` int NOT NULL AUTO_INCREMENT,
  `seat_no` varchar(10) NOT NULL,
  `user_no` int DEFAULT NULL,
  `user_no2` int DEFAULT NULL,
  `flight_no` int NOT NULL,
  `seat_class` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=321 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='좌석 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (1,'A1',NULL,NULL,1,'economy','0'),(2,'A2',NULL,NULL,1,'economy','0'),(3,'A3',NULL,NULL,1,'economy','0'),(4,'A4',NULL,NULL,1,'economy','0'),(5,'A5',NULL,NULL,1,'economy','0'),(6,'A6',NULL,NULL,1,'economy','0'),(7,'A7',NULL,NULL,1,'economy','0'),(8,'A8',NULL,NULL,1,'economy','0'),(9,'A9',NULL,NULL,1,'economy','0'),(10,'A10',NULL,NULL,1,'economy','0'),(11,'B1',NULL,NULL,1,'economy','0'),(12,'B2',NULL,NULL,1,'economy','0'),(13,'B3',NULL,NULL,1,'economy','0'),(14,'B4',NULL,NULL,1,'economy','0'),(15,'B5',NULL,NULL,1,'economy','0'),(16,'B6',NULL,NULL,1,'economy','0'),(17,'B7',NULL,NULL,1,'economy','0'),(18,'B8',NULL,NULL,1,'economy','0'),(19,'B9',NULL,NULL,1,'economy','0'),(20,'B10',NULL,NULL,1,'economy','0'),(21,'C1',NULL,NULL,1,'economy','0'),(22,'C2',NULL,NULL,1,'economy','0'),(23,'C3',NULL,NULL,1,'economy','0'),(24,'C4',NULL,NULL,1,'economy','0'),(25,'C5',NULL,NULL,1,'economy','0'),(26,'C6',NULL,NULL,1,'economy','0'),(27,'C7',NULL,NULL,1,'economy','0'),(28,'C8',NULL,NULL,1,'economy','0'),(29,'C9',NULL,NULL,1,'economy','0'),(30,'C10',NULL,NULL,1,'economy','0'),(31,'D1',NULL,NULL,1,'economy','0'),(32,'D2',NULL,NULL,1,'economy','0'),(33,'D3',NULL,NULL,1,'economy','0'),(34,'D4',NULL,NULL,1,'economy','0'),(35,'D5',NULL,NULL,1,'economy','0'),(36,'D6',NULL,NULL,1,'economy','0'),(37,'D7',NULL,NULL,1,'economy','0'),(38,'D8',NULL,NULL,1,'economy','0'),(39,'D9',NULL,NULL,1,'economy','0'),(40,'D10',NULL,NULL,1,'economy','0'),(41,'A1',NULL,NULL,2,'economy','0'),(42,'A2',NULL,NULL,2,'economy','0'),(43,'A3',NULL,NULL,2,'economy','0'),(44,'A4',NULL,NULL,2,'economy','0'),(45,'A5',NULL,NULL,2,'economy','0'),(46,'A6',NULL,NULL,2,'economy','0'),(47,'A7',NULL,NULL,2,'economy','0'),(48,'A8',NULL,NULL,2,'economy','0'),(49,'A9',NULL,NULL,2,'economy','0'),(50,'A10',NULL,NULL,2,'economy','0'),(51,'B1',NULL,NULL,2,'economy','0'),(52,'B2',NULL,NULL,2,'economy','0'),(53,'B3',NULL,NULL,2,'economy','0'),(54,'B4',NULL,NULL,2,'economy','0'),(55,'B5',NULL,NULL,2,'economy','0'),(56,'B6',NULL,NULL,2,'economy','0'),(57,'B7',NULL,NULL,2,'economy','0'),(58,'B8',NULL,NULL,2,'economy','0'),(59,'B9',NULL,NULL,2,'economy','0'),(60,'B10',NULL,NULL,2,'economy','0'),(61,'C1',NULL,NULL,2,'economy','0'),(62,'C2',NULL,NULL,2,'economy','0'),(63,'C3',NULL,NULL,2,'economy','0'),(64,'C4',NULL,NULL,2,'economy','0'),(65,'C5',NULL,NULL,2,'economy','0'),(66,'C6',NULL,NULL,2,'economy','0'),(67,'C7',NULL,NULL,2,'economy','0'),(68,'C8',NULL,NULL,2,'economy','0'),(69,'C9',NULL,NULL,2,'economy','0'),(70,'C10',NULL,NULL,2,'economy','0'),(71,'D1',NULL,NULL,2,'economy','0'),(72,'D2',NULL,NULL,2,'economy','0'),(73,'D3',NULL,NULL,2,'economy','0'),(74,'D4',NULL,NULL,2,'economy','0'),(75,'D5',NULL,NULL,2,'economy','0'),(76,'D6',NULL,NULL,2,'economy','0'),(77,'D7',NULL,NULL,2,'economy','0'),(78,'D8',NULL,NULL,2,'economy','0'),(79,'D9',NULL,NULL,2,'economy','0'),(80,'D10',NULL,NULL,2,'economy','0'),(81,'A1',NULL,NULL,3,'economy','0'),(82,'A2',NULL,NULL,3,'economy','0'),(83,'A3',NULL,NULL,3,'economy','0'),(84,'A4',NULL,NULL,3,'economy','0'),(85,'A5',NULL,NULL,3,'economy','0'),(86,'A6',NULL,NULL,3,'economy','0'),(87,'A7',NULL,NULL,3,'economy','0'),(88,'A8',NULL,NULL,3,'economy','0'),(89,'A9',NULL,NULL,3,'economy','0'),(90,'A10',NULL,NULL,3,'economy','0'),(91,'B1',NULL,NULL,3,'economy','0'),(92,'B2',NULL,NULL,3,'economy','0'),(93,'B3',NULL,NULL,3,'economy','0'),(94,'B4',NULL,NULL,3,'economy','0'),(95,'B5',NULL,NULL,3,'economy','0'),(96,'B6',NULL,NULL,3,'economy','0'),(97,'B7',NULL,NULL,3,'economy','0'),(98,'B8',NULL,NULL,3,'economy','0'),(99,'B9',NULL,NULL,3,'economy','0'),(100,'B10',NULL,NULL,3,'economy','0'),(101,'C1',NULL,NULL,3,'economy','0'),(102,'C2',NULL,NULL,3,'economy','0'),(103,'C3',NULL,NULL,3,'economy','0'),(104,'C4',NULL,NULL,3,'economy','0'),(105,'C5',NULL,NULL,3,'economy','0'),(106,'C6',NULL,NULL,3,'economy','0'),(107,'C7',NULL,NULL,3,'economy','0'),(108,'C8',NULL,NULL,3,'economy','0'),(109,'C9',NULL,NULL,3,'economy','0'),(110,'C10',NULL,NULL,3,'economy','0'),(111,'D1',NULL,NULL,3,'economy','0'),(112,'D2',NULL,NULL,3,'economy','0'),(113,'D3',NULL,NULL,3,'economy','0'),(114,'D4',NULL,NULL,3,'economy','0'),(115,'D5',NULL,NULL,3,'economy','0'),(116,'D6',NULL,NULL,3,'economy','0'),(117,'D7',NULL,NULL,3,'economy','0'),(118,'D8',NULL,NULL,3,'economy','0'),(119,'D9',NULL,NULL,3,'economy','0'),(120,'D10',NULL,NULL,3,'economy','0'),(121,'A1',NULL,NULL,4,'economy','0'),(122,'A2',NULL,NULL,4,'economy','0'),(123,'A3',NULL,NULL,4,'economy','0'),(124,'A4',NULL,NULL,4,'economy','0'),(125,'A5',NULL,NULL,4,'economy','0'),(126,'A6',NULL,NULL,4,'economy','0'),(127,'A7',NULL,NULL,4,'economy','0'),(128,'A8',NULL,NULL,4,'economy','0'),(129,'A9',NULL,NULL,4,'economy','0'),(130,'A10',NULL,NULL,4,'economy','0'),(131,'B1',NULL,NULL,4,'economy','0'),(132,'B2',NULL,NULL,4,'economy','0'),(133,'B3',NULL,NULL,4,'economy','0'),(134,'B4',NULL,NULL,4,'economy','0'),(135,'B5',NULL,NULL,4,'economy','0'),(136,'B6',NULL,NULL,4,'economy','0'),(137,'B7',NULL,NULL,4,'economy','0'),(138,'B8',NULL,NULL,4,'economy','0'),(139,'B9',NULL,NULL,4,'economy','0'),(140,'B10',NULL,NULL,4,'economy','0'),(141,'C1',NULL,NULL,4,'economy','0'),(142,'C2',NULL,NULL,4,'economy','0'),(143,'C3',NULL,NULL,4,'economy','0'),(144,'C4',NULL,NULL,4,'economy','0'),(145,'C5',NULL,NULL,4,'economy','0'),(146,'C6',NULL,NULL,4,'economy','0'),(147,'C7',NULL,NULL,4,'economy','0'),(148,'C8',NULL,NULL,4,'economy','0'),(149,'C9',NULL,NULL,4,'economy','0'),(150,'C10',NULL,NULL,4,'economy','0'),(151,'D1',NULL,NULL,4,'economy','0'),(152,'D2',NULL,NULL,4,'economy','0'),(153,'D3',NULL,NULL,4,'economy','0'),(154,'D4',NULL,NULL,4,'economy','0'),(155,'D5',NULL,NULL,4,'economy','0'),(156,'D6',NULL,NULL,4,'economy','0'),(157,'D7',NULL,NULL,4,'economy','0'),(158,'D8',NULL,NULL,4,'economy','0'),(159,'D9',NULL,NULL,4,'economy','0'),(160,'D10',NULL,NULL,4,'economy','0'),(161,'A1',NULL,NULL,5,'economy','0'),(162,'A2',NULL,NULL,5,'economy','0'),(163,'A3',NULL,NULL,5,'economy','0'),(164,'A4',NULL,NULL,5,'economy','0'),(165,'A5',NULL,NULL,5,'economy','0'),(166,'A6',NULL,NULL,5,'economy','0'),(167,'A7',NULL,NULL,5,'economy','0'),(168,'A8',NULL,NULL,5,'economy','0'),(169,'A9',NULL,NULL,5,'economy','0'),(170,'A10',NULL,NULL,5,'economy','0'),(171,'B1',NULL,NULL,5,'economy','0'),(172,'B2',NULL,NULL,5,'economy','0'),(173,'B3',NULL,NULL,5,'economy','0'),(174,'B4',NULL,NULL,5,'economy','0'),(175,'B5',NULL,NULL,5,'economy','0'),(176,'B6',NULL,NULL,5,'economy','0'),(177,'B7',NULL,NULL,5,'economy','0'),(178,'B8',NULL,NULL,5,'economy','0'),(179,'B9',NULL,NULL,5,'economy','0'),(180,'B10',NULL,NULL,5,'economy','0'),(181,'C1',NULL,NULL,5,'economy','0'),(182,'C2',NULL,NULL,5,'economy','0'),(183,'C3',NULL,NULL,5,'economy','0'),(184,'C4',NULL,NULL,5,'economy','0'),(185,'C5',NULL,NULL,5,'economy','0'),(186,'C6',NULL,NULL,5,'economy','0'),(187,'C7',NULL,NULL,5,'economy','0'),(188,'C8',NULL,NULL,5,'economy','0'),(189,'C9',NULL,NULL,5,'economy','0'),(190,'C10',NULL,NULL,5,'economy','0'),(191,'D1',NULL,NULL,5,'economy','0'),(192,'D2',NULL,NULL,5,'economy','0'),(193,'D3',NULL,NULL,5,'economy','0'),(194,'D4',NULL,NULL,5,'economy','0'),(195,'D5',NULL,NULL,5,'economy','0'),(196,'D6',NULL,NULL,5,'economy','0'),(197,'D7',NULL,NULL,5,'economy','0'),(198,'D8',NULL,NULL,5,'economy','0'),(199,'D9',NULL,NULL,5,'economy','0'),(200,'D10',NULL,NULL,5,'economy','0'),(201,'A1',NULL,NULL,6,'economy','0'),(202,'A2',NULL,NULL,6,'economy','0'),(203,'A3',NULL,NULL,6,'economy','0'),(204,'A4',NULL,NULL,6,'economy','0'),(205,'A5',NULL,NULL,6,'economy','0'),(206,'A6',NULL,NULL,6,'economy','0'),(207,'A7',NULL,NULL,6,'economy','0'),(208,'A8',NULL,NULL,6,'economy','0'),(209,'A9',NULL,NULL,6,'economy','0'),(210,'A10',NULL,NULL,6,'economy','0'),(211,'B1',NULL,NULL,6,'economy','0'),(212,'B2',NULL,NULL,6,'economy','0'),(213,'B3',NULL,NULL,6,'economy','0'),(214,'B4',NULL,NULL,6,'economy','0'),(215,'B5',NULL,NULL,6,'economy','0'),(216,'B6',NULL,NULL,6,'economy','0'),(217,'B7',NULL,NULL,6,'economy','0'),(218,'B8',NULL,NULL,6,'economy','0'),(219,'B9',NULL,NULL,6,'economy','0'),(220,'B10',NULL,NULL,6,'economy','0'),(221,'C1',NULL,NULL,6,'economy','0'),(222,'C2',NULL,NULL,6,'economy','0'),(223,'C3',NULL,NULL,6,'economy','0'),(224,'C4',NULL,NULL,6,'economy','0'),(225,'C5',NULL,NULL,6,'economy','0'),(226,'C6',NULL,NULL,6,'economy','0'),(227,'C7',NULL,NULL,6,'economy','0'),(228,'C8',NULL,NULL,6,'economy','0'),(229,'C9',NULL,NULL,6,'economy','0'),(230,'C10',NULL,NULL,6,'economy','0'),(231,'D1',NULL,NULL,6,'economy','0'),(232,'D2',NULL,NULL,6,'economy','0'),(233,'D3',NULL,NULL,6,'economy','0'),(234,'D4',NULL,NULL,6,'economy','0'),(235,'D5',NULL,NULL,6,'economy','0'),(236,'D6',NULL,NULL,6,'economy','0'),(237,'D7',NULL,NULL,6,'economy','0'),(238,'D8',NULL,NULL,6,'economy','0'),(239,'D9',NULL,NULL,6,'economy','0'),(240,'D10',NULL,NULL,6,'economy','0'),(241,'A1',NULL,NULL,7,'economy','0'),(242,'A2',NULL,NULL,7,'economy','0'),(243,'A3',NULL,NULL,7,'economy','0'),(244,'A4',NULL,NULL,7,'economy','0'),(245,'A5',NULL,NULL,7,'economy','0'),(246,'A6',NULL,NULL,7,'economy','0'),(247,'A7',NULL,NULL,7,'economy','0'),(248,'A8',NULL,NULL,7,'economy','0'),(249,'A9',NULL,NULL,7,'economy','0'),(250,'A10',NULL,NULL,7,'economy','0'),(251,'B1',NULL,NULL,7,'economy','0'),(252,'B2',NULL,NULL,7,'economy','0'),(253,'B3',NULL,NULL,7,'economy','0'),(254,'B4',NULL,NULL,7,'economy','0'),(255,'B5',NULL,NULL,7,'economy','0'),(256,'B6',NULL,NULL,7,'economy','0'),(257,'B7',NULL,NULL,7,'economy','0'),(258,'B8',NULL,NULL,7,'economy','0'),(259,'B9',NULL,NULL,7,'economy','0'),(260,'B10',NULL,NULL,7,'economy','0'),(261,'C1',NULL,NULL,7,'economy','0'),(262,'C2',NULL,NULL,7,'economy','0'),(263,'C3',NULL,NULL,7,'economy','0'),(264,'C4',NULL,NULL,7,'economy','0'),(265,'C5',NULL,NULL,7,'economy','0'),(266,'C6',NULL,NULL,7,'economy','0'),(267,'C7',NULL,NULL,7,'economy','0'),(268,'C8',NULL,NULL,7,'economy','0'),(269,'C9',NULL,NULL,7,'economy','0'),(270,'C10',NULL,NULL,7,'economy','0'),(271,'D1',NULL,NULL,7,'economy','0'),(272,'D2',NULL,NULL,7,'economy','0'),(273,'D3',NULL,NULL,7,'economy','0'),(274,'D4',NULL,NULL,7,'economy','0'),(275,'D5',NULL,NULL,7,'economy','0'),(276,'D6',NULL,NULL,7,'economy','0'),(277,'D7',NULL,NULL,7,'economy','0'),(278,'D8',NULL,NULL,7,'economy','0'),(279,'D9',NULL,NULL,7,'economy','0'),(280,'D10',NULL,NULL,7,'economy','0'),(281,'A1',NULL,NULL,8,'economy','0'),(282,'A2',NULL,NULL,8,'economy','0'),(283,'A3',NULL,NULL,8,'economy','0'),(284,'A4',NULL,NULL,8,'economy','0'),(285,'A5',NULL,NULL,8,'economy','0'),(286,'A6',NULL,NULL,8,'economy','0'),(287,'A7',NULL,NULL,8,'economy','0'),(288,'A8',NULL,NULL,8,'economy','0'),(289,'A9',NULL,NULL,8,'economy','0'),(290,'A10',NULL,NULL,8,'economy','0'),(291,'B1',NULL,NULL,8,'economy','0'),(292,'B2',NULL,NULL,8,'economy','0'),(293,'B3',NULL,NULL,8,'economy','0'),(294,'B4',NULL,NULL,8,'economy','0'),(295,'B5',NULL,NULL,8,'economy','0'),(296,'B6',NULL,NULL,8,'economy','0'),(297,'B7',NULL,NULL,8,'economy','0'),(298,'B8',NULL,NULL,8,'economy','0'),(299,'B9',NULL,NULL,8,'economy','0'),(300,'B10',NULL,NULL,8,'economy','0'),(301,'C1',NULL,NULL,8,'economy','0'),(302,'C2',NULL,NULL,8,'economy','0'),(303,'C3',NULL,NULL,8,'economy','0'),(304,'C4',NULL,NULL,8,'economy','0'),(305,'C5',NULL,NULL,8,'economy','0'),(306,'C6',NULL,NULL,8,'economy','0'),(307,'C7',NULL,NULL,8,'economy','0'),(308,'C8',NULL,NULL,8,'economy','0'),(309,'C9',NULL,NULL,8,'economy','0'),(310,'C10',NULL,NULL,8,'economy','0'),(311,'D1',NULL,NULL,8,'economy','0'),(312,'D2',NULL,NULL,8,'economy','0'),(313,'D3',NULL,NULL,8,'economy','0'),(314,'D4',NULL,NULL,8,'economy','0'),(315,'D5',NULL,NULL,8,'economy','0'),(316,'D6',NULL,NULL,8,'economy','0'),(317,'D7',NULL,NULL,8,'economy','0'),(318,'D8',NULL,NULL,8,'economy','0'),(319,'D9',NULL,NULL,8,'economy','0'),(320,'D10',NULL,NULL,8,'economy','0');
/*!40000 ALTER TABLE `seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `ticket_no` int NOT NULL AUTO_INCREMENT COMMENT '티켓 번호',
  `booking_no` int DEFAULT NULL COMMENT '예매 번호',
  `PIN_TYPE` int DEFAULT NULL,
  `passenger_no` int DEFAULT NULL,
  `passenger_name` varchar(100) DEFAULT NULL,
  `departure` varchar(50) DEFAULT NULL,
  `destination` varchar(50) DEFAULT NULL,
  `boarding` varchar(50) DEFAULT NULL COMMENT '탑승 시간',
  `departure_time` varchar(50) DEFAULT NULL,
  `destination_time` varchar(50) DEFAULT NULL,
  `duration` varchar(20) DEFAULT NULL,
  `checked_in` int DEFAULT NULL,
  `is_boarded` int DEFAULT '0',
  `route_no` int DEFAULT NULL,
  `boarding_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '실제 탑승 시간',
  `departure_date` varchar(50) DEFAULT NULL,
  `destination_date` varchar(50) DEFAULT NULL,
  `seat_no` varchar(10) DEFAULT NULL COMMENT '좌석 번호',
  `flight_no` int DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `user_pw` varchar(50) DEFAULT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  `booking_no2` int DEFAULT NULL,
  PRIMARY KEY (`ticket_no`),
  KEY `FK_passengers_TO_ticket_1` (`passenger_no`),
  KEY `FK_passengers_TO_ticket_2` (`passenger_no`) /*!80000 INVISIBLE */,
  KEY `FK_passengers_TO_ticket_3` (`passenger_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='탑승권';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user2`
--

DROP TABLE IF EXISTS `user2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user2` (
  `user_no2` int NOT NULL AUTO_INCREMENT,
  `phone` varchar(20) NOT NULL,
  `user_pw` varchar(200) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT '1',
  `user_id` varchar(100) NOT NULL DEFAULT 'GUEST-',
  PRIMARY KEY (`user_no2`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='비회원';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user2`
--

LOCK TABLES `user2` WRITE;
/*!40000 ALTER TABLE `user2` DISABLE KEYS */;
/*!40000 ALTER TABLE `user2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_no` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  `user_pw` varchar(200) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `upd_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_no`,`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='회원';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','$2a$10$l8EZesLzAMQ6aYcfM0A9r.KP.Wr/UUUmnAN8oiOw0.ELvJT2pLPNe','관리자','인천시 부평구','01000000000','sample@email.com','2023-11-15 21:48:00','2023-11-15 21:48:00','0'),(2,'user','$2a$10$FUYyZG2RCkJFPNG1FYJ9FOAwCJ4OkshPFCOZ9BgZZ.OkXnHIZlJWG','사용자','인천시 부평구','01000000000','user@email.com','2023-11-19 07:32:51','2023-11-19 07:32:51','0');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-18 18:21:13