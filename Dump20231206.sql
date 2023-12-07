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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='상품(항공권) 입출고';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (5,'admin','$2a$10$97ERtxVM9hy7C7kNpDKuPOZR6P0fsmz.fFV4GZPTHMWCUp6Aox/iq');
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
INSERT INTO `airport` VALUES (1,'ICN','인천','국제'),(2,'GMP','김포','국제'),(3,'CJU','제주','국내'),(4,'RSU','여수','국내'),(5,'PUS','부산','국내'),(6,'KIX','오사카','국제'),(7,'ZRH','취리히','국제'),(8,'DPS','발리','국제');
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
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='권한';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

LOCK TABLES `auth` WRITE;
/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES (1,'admin','ROLE_USER'),(2,'admin','ROLE_ADMIN'),(3,'user','ROLE_USER'),(4,'sgij56','ROLE_USER'),(55,'admin','ROLE_USER'),(56,'','ROLE_ADMIN');
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='게시판';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,'d','ed','d','2023-11-06 03:41:53','2023-11-06 03:41:53','2023-11-06 03:41:53',4,0,0,0),(2,'d','d','d','2023-11-06 03:42:04','2023-11-06 03:42:04','2023-11-06 03:42:04',45,0,0,0),(3,'dd','d','d','2023-11-06 08:58:02','2023-11-06 08:58:02','2023-11-06 08:58:02',3,0,0,0),(4,'1','','1','2023-11-13 06:14:41','2023-11-13 06:14:41','2023-11-13 06:14:41',0,0,0,0),(5,'1','','1','2023-11-13 06:16:29','2023-11-13 06:16:29','2023-11-13 06:16:29',0,0,0,0),(6,'2','','2','2023-11-13 06:24:01','2023-11-13 06:24:01','2023-11-13 06:24:01',0,0,0,0),(7,'3','','3','2023-11-13 06:24:13','2023-11-13 06:24:13','2023-11-13 06:24:13',0,0,0,0),(8,'1','1','1','2023-11-14 08:56:25','2023-11-14 08:56:25','2023-11-14 08:56:25',0,0,0,0),(9,'2','2','2','2023-11-14 08:56:31','2023-11-14 08:56:31','2023-11-14 08:56:31',4,0,0,0),(10,'3','3','3','2023-11-14 08:56:37','2023-11-14 08:56:37','2023-11-14 08:56:37',4,0,0,0);
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
  PRIMARY KEY (`booking_no`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='예매';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,'123',NULL,3,0,1,1,1,'왕복','예매완료','2023-11-15 04:21:44','2023-11-15 04:21:44','P0001',NULL),(13,'이유나',NULL,0,1,5,5,1,'왕복','예매완료','2023-11-14 09:06:48','2023-11-14 09:06:48','P0005',NULL),(14,'이유나',NULL,0,1,1,1,1,'왕복','예매완료','2023-11-14 09:06:48','2023-11-14 09:06:48','P0001',NULL),(15,'정슬기',NULL,0,1,5,5,1,'왕복','예매완료','2023-11-15 03:21:58','2023-11-15 03:21:58','P0005',NULL),(16,'정슬기',NULL,0,1,1,1,1,'왕복','예매완료','2023-11-15 03:21:58','2023-11-15 03:21:58','P0001',NULL),(17,'123',NULL,3,0,5,5,1,'왕복','예매완료','2023-11-15 04:21:44','2023-11-15 04:21:44','P0005',NULL);
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
  `cart_cklimit` date DEFAULT NULL,
  `cart_ckid` varchar(45) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='댓글';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,10,'board',10,'123','123',0,0,0,0,'2023-11-14 08:59:14','2023-11-14 08:59:14',0);
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
  `board_no` int NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='파일';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (1,2,'board',2,'27ff5080-3c63-4223-bf9d-e86193cf82f5_g흐음.png','g흐음.png','C:/upload/27ff5080-3c63-4223-bf9d-e86193cf82f5_g흐음.png',3665,'2023-11-06 03:42:04','2023-11-06 03:42:04',0),(2,5,'board',5,'fc65f804-266c-4b66-8c86-d9f7e45f6248_logo.png','logo.png','C:/upload/fc65f804-266c-4b66-8c86-d9f7e45f6248_logo.png',86059,'2023-11-13 06:16:29','2023-11-13 06:16:29',0),(3,6,'board',6,'99d50a88-f496-4da3-9fea-845b9bed8e2b_logo_name.png','logo_name.png','C:/upload/99d50a88-f496-4da3-9fea-845b9bed8e2b_logo_name.png',31276,'2023-11-13 06:24:01','2023-11-13 06:24:01',0),(4,7,'board',7,'6c1ea1f3-046f-4f73-9620-7cb11bca6ac7_g흐음.png','g흐음.png','C:/upload/6c1ea1f3-046f-4f73-9620-7cb11bca6ac7_g흐음.png',3665,'2023-11-13 06:24:13','2023-11-13 06:24:13',0),(5,8,'board',8,'9bce724f-527a-48b7-9a5e-942d304b08b0_1.jpg','1.jpg','C:/upload/9bce724f-527a-48b7-9a5e-942d304b08b0_1.jpg',2067850,'2023-11-14 08:56:25','2023-11-14 08:56:25',0),(6,9,'board',9,'2a8b2cd5-d30c-4b56-817a-0a5c7162abb7_1.jpg','1.jpg','C:/upload/2a8b2cd5-d30c-4b56-817a-0a5c7162abb7_1.jpg',2067850,'2023-11-14 08:56:31','2023-11-14 08:56:31',0),(7,10,'board',10,'8431701d-ab68-4305-9fee-417bf2ac0ea3_1.jpg','1.jpg','C:/upload/8431701d-ab68-4305-9fee-417bf2ac0ea3_1.jpg',2067850,'2023-11-14 08:56:37','2023-11-14 08:56:37',0),(9,1,'booking',1,'QR_3ca0a8be-6a81-4c25-9ab2-c4f693242881.png',NULL,'C:/upload/QR_3ca0a8be-6a81-4c25-9ab2-c4f693242881.png',434,'2023-11-14 09:06:48','2023-11-14 09:06:48',10),(10,1,'booking',1,'QR_839257b5-048b-40cc-bd2a-8b5a65f55d88.png',NULL,'C:/upload/QR_839257b5-048b-40cc-bd2a-8b5a65f55d88.png',434,'2023-11-15 03:21:59','2023-11-15 03:21:59',10),(11,9,'flight',9,'2d55eb95-b8fa-455a-a7a7-9e2333284122_MyBatis.png','MyBatis.png','C:/upload/2d55eb95-b8fa-455a-a7a7-9e2333284122_MyBatis.png',23993,'2023-11-15 06:06:58','2023-11-15 06:06:58',0),(12,10,'flight',10,'2c5a6a6f-d3c2-483e-bc45-27e342b2b27f_favicon.png','favicon.png','C:/upload/2c5a6a6f-d3c2-483e-bc45-27e342b2b27f_favicon.png',48535,'2023-11-22 01:05:06','2023-11-22 01:05:06',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight`
--

LOCK TABLES `flight` WRITE;
/*!40000 ALTER TABLE `flight` DISABLE KEYS */;
INSERT INTO `flight` VALUES (12,'12',12,12,12,12),(13,'13',13,13,13,13),(17,'air000001',1,20,20,0),(18,'air000001',1,20,20,0),(19,'air000001',1,20,20,0),(20,'air000001',1,20,20,0),(21,'air000001',1,20,20,0);
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
INSERT INTO `mileage` VALUES ('admin',500000),('sgij56',50000),('user',5000);
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
  PRIMARY KEY (`passenger_no`,`PIN_TYPE`,`passenger_name`),
  KEY `FK_passengers_TO_seat_1` (`passenger_name`) /*!80000 INVISIBLE */,
  KEY `FK_passengers_TO_ticket_2` (`passenger_no`)
) ENGINE=InnoDB AUTO_INCREMENT=202 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='탑승객';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passengers`
--

LOCK TABLES `passengers` WRITE;
/*!40000 ALTER TABLE `passengers` DISABLE KEYS */;
INSERT INTO `passengers` VALUES (186,1,'정슬기','SEULGI','JEONG','여자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,5,1,5,'123456'),(187,1,'123','seulgi','JEONG','여자','19920506','123','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,5,1,5,NULL),(188,1,'sdf','asd','jeong','여자','234','asd','78',NULL,NULL,NULL,NULL,1,5,1,5,'123456'),(189,2,'정슬기123','JEONGSEULGI','JEONGSEULGI','남자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,0,1,0,'123456'),(190,2,'정슬기123','JEONGSEULGI','JEONGSEULGI','남자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,0,1,0,'123456'),(191,1,'987654321','987654321','987654321','남자','asd','234','123',NULL,NULL,NULL,NULL,1,5,1,5,'123456'),(192,1,'234','seulgi','jeong','남자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,5,1,5,'123456'),(193,1,'234','seulgi','jeong','남자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,5,1,5,'123456'),(194,1,'김','seulgi','jeong','남자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,5,1,5,'123456'),(195,1,'김수빈','subin','kim','여자','19961221','01089581640','tnqls1640@daum.net',NULL,NULL,NULL,NULL,1,5,1,5,'1234'),(196,1,'정슬기','SEULGI','JEONG','여자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,5,1,5,'1234'),(197,1,'정슬기','SEULGI','JEONG','여자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,5,1,5,'1234'),(198,1,'정슬기','SEULGI','JEONG','여자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,5,1,5,'1234'),(199,1,'정슬기','SEULGI','JEONG','여자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,5,1,5,'1234'),(200,1,'정슬기','SEULGI','JEONG','여자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,1,5,1,5,'1234'),(201,1,'정슬기','SEULGI','JEONG','여자','19920506','01028388192','sgij56@gmail.com',NULL,NULL,NULL,NULL,3,0,3,0,'1234');
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
INSERT INTO `passport` VALUES ('1',2,'userlee','lee','user','KOREA','2024/11/06'),('2',2,'sgij56','jung','seulgi','KOREA','2024/11/06');
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
INSERT INTO `persistent_logins` VALUES ('user','BN5uG2N5mWqRi/AiAVHlPQ==','8dbYV6AnnLdOIVTFxDvf1A==','2023-11-13 08:21:05'),('user','WflMWFu5gOr6sgrvETc1uQ==','H/aQ7qZTkY1UNChAhFxe5g==','2023-11-13 14:20:18'),('user','ZDsSqpVOysDaAR5ilRzGcQ==','TxTEvuwWmmz+QvvB60AtVA==','2023-11-12 05:39:52');
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
INSERT INTO `pin` VALUES (1,'주민등록증'),(2,'여권'),(3,'운전면허증');
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
  `duration` varchar(20) NOT NULL,
  PRIMARY KEY (`product_no`,`product_id`),
  KEY `FK_product_TO_booking_2` (`route_no`) /*!80000 INVISIBLE */,
  KEY `FK_product_TO_booking_3` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='상품(항공권)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'P0001',1,'김포-제주','항공권',50000,'김포','제주','2023-11-06 15:00:00','2023-11-06 15:00:00','김포-제주 항공권 입니다.',50,NULL,NULL,NULL,'1'),(2,'P0002',2,'김포-울산','항공권',50000,'김포','울산','2023-11-06 15:00:00','2023-11-06 15:00:00','김포-울산 항공권 입니다.',50,NULL,NULL,NULL,'1'),(3,'P0003',3,'김포-부산','항공권',50000,'김포','부산','2023-11-06 15:00:00','2023-11-06 15:00:00','김포-부산 항공권 입니다.',50,NULL,NULL,NULL,'1'),(4,'P0004',4,'김포-여수','항공권',50000,'김포','여수','2023-11-06 15:00:00','2023-11-06 15:00:00','김포-여수 항공권 입니다.',50,NULL,NULL,NULL,'1'),(5,'P0005',5,'제주-김포','항공권',50000,'제주','김포','2023-11-06 15:00:00','2023-11-06 15:00:00','제주-김포 항공권 입니다.',50,NULL,NULL,NULL,'1'),(6,'P0006',6,'울산-김포','항공권',50000,'울산','김포','2023-11-06 15:00:00','2023-11-06 15:00:00','울산-김포 항공권 입니다.',50,NULL,NULL,NULL,'1');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='QR';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qr`
--

LOCK TABLES `qr` WRITE;
/*!40000 ALTER TABLE `qr` DISABLE KEYS */;
INSERT INTO `qr` VALUES (1,'booking',1,'http://localhost:9090/admin/Final_check?ticketNo=1','QR_1B13','C:/upload/QR_3ca0a8be-6a81-4c25-9ab2-c4f693242881.png',10,'2023-11-14 09:06:48','2023-11-14 09:06:48'),(2,'booking',1,'http://localhost:9090/admin/Final_check?ticketNo=5','QR_1B13','C:/upload/QR_839257b5-048b-40cc-bd2a-8b5a65f55d88.png',10,'2023-11-15 03:21:59','2023-11-15 03:21:59');
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
INSERT INTO `route` VALUES (1,'김포','제주','10:00','11:00','2023/11/22','2023/11/22'),(2,'김포','울산','10:00','11:00','2023/11/22','2023/11/22'),(3,'김포','부산','10:00','11:00','2023/11/22','2023/11/22'),(4,'김포','여수','10:00','11:00','2023/11/22','2023/11/22'),(5,'제주','김포','15:00','16:00','2023/11/22','2023/11/22'),(6,'울산','김포','15:00','16:00','2023/11/22','2023/11/22'),(7,'부산','김포','15:00','16:00','2023/11/22','2023/11/22'),(8,'여수','김포','15:00','16:00','2023/11/22','2023/11/22');
/*!40000 ALTER TABLE `route` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat` (
  `seat_no2` int NOT NULL AUTO_INCREMENT,
  `seat_no` varchar(10) NOT NULL,
  `user_no` int DEFAULT NULL,
  `user_no2` int DEFAULT NULL,
  `flight_no` int NOT NULL,
  `seat_class` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`seat_no2`)
) ENGINE=InnoDB AUTO_INCREMENT=321 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='좌석 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (1,'A1',NULL,NULL,1,'economy','0'),(2,'A10',NULL,NULL,1,'economy','1'),(3,'A2',NULL,NULL,1,'economy','0'),(4,'A3',NULL,NULL,1,'economy','0'),(5,'A4',NULL,NULL,1,'economy','0'),(6,'A5',NULL,NULL,1,'economy','0'),(7,'A6',NULL,NULL,1,'economy','0'),(8,'A7',NULL,NULL,1,'economy','0'),(9,'A8',NULL,NULL,1,'economy','0'),(10,'A9',NULL,NULL,1,'economy','0'),(11,'B1',NULL,NULL,1,'economy','0'),(12,'B10',NULL,NULL,1,'economy','0'),(13,'B2',NULL,NULL,1,'economy','0'),(14,'B3',NULL,NULL,1,'economy','0'),(15,'B4',NULL,NULL,1,'economy','0'),(16,'B5',NULL,NULL,1,'economy','0'),(17,'B6',NULL,NULL,1,'economy','0'),(18,'B7',NULL,NULL,1,'economy','0'),(19,'B8',NULL,NULL,1,'economy','0'),(20,'B9',NULL,NULL,1,'economy','0'),(21,'C1',NULL,NULL,1,'economy','0'),(22,'C10',NULL,NULL,1,'economy','0'),(23,'C2',NULL,NULL,1,'economy','0'),(24,'C3',NULL,NULL,1,'economy','0'),(25,'C4',NULL,NULL,1,'economy','0'),(26,'C5',NULL,NULL,1,'economy','0'),(27,'C6',NULL,NULL,1,'economy','0'),(28,'C7',NULL,NULL,1,'economy','0'),(29,'C8',NULL,NULL,1,'economy','0'),(30,'C9',NULL,NULL,1,'economy','0'),(31,'D1',NULL,NULL,1,'economy','0'),(32,'D10',NULL,NULL,1,'economy','0'),(33,'D2',NULL,NULL,1,'economy','0'),(34,'D3',NULL,NULL,1,'economy','0'),(35,'D4',NULL,NULL,1,'economy','0'),(36,'D5',NULL,NULL,1,'economy','0'),(37,'D6',NULL,NULL,1,'economy','0'),(38,'D7',NULL,NULL,1,'economy','0'),(39,'D8',NULL,NULL,1,'economy','0'),(40,'D9',NULL,NULL,1,'economy','0'),(41,'A1',NULL,NULL,2,'economy','0'),(42,'A10',NULL,NULL,2,'economy','0'),(43,'A2',NULL,NULL,2,'economy','0'),(44,'A3',NULL,NULL,2,'economy','0'),(45,'A4',NULL,NULL,2,'economy','0'),(46,'A5',NULL,NULL,2,'economy','0'),(47,'A6',NULL,NULL,2,'economy','0'),(48,'A7',NULL,NULL,2,'economy','0'),(49,'A8',NULL,NULL,2,'economy','0'),(50,'A9',NULL,NULL,2,'economy','0'),(51,'B1',NULL,NULL,2,'economy','0'),(52,'B10',NULL,NULL,2,'economy','0'),(53,'B2',NULL,NULL,2,'economy','0'),(54,'B3',NULL,NULL,2,'economy','0'),(55,'B4',NULL,NULL,2,'economy','0'),(56,'B5',NULL,NULL,2,'economy','0'),(57,'B6',NULL,NULL,2,'economy','0'),(58,'B7',NULL,NULL,2,'economy','0'),(59,'B8',NULL,NULL,2,'economy','0'),(60,'B9',NULL,NULL,2,'economy','0'),(61,'C1',NULL,NULL,2,'economy','0'),(62,'C10',NULL,NULL,2,'economy','0'),(63,'C2',NULL,NULL,2,'economy','0'),(64,'C3',NULL,NULL,2,'economy','0'),(65,'C4',NULL,NULL,2,'economy','0'),(66,'C5',NULL,NULL,2,'economy','0'),(67,'C6',NULL,NULL,2,'economy','0'),(68,'C7',NULL,NULL,2,'economy','0'),(69,'C8',NULL,NULL,2,'economy','0'),(70,'C9',NULL,NULL,2,'economy','0'),(71,'D1',NULL,NULL,2,'economy','0'),(72,'D10',NULL,NULL,2,'economy','0'),(73,'D2',NULL,NULL,2,'economy','0'),(74,'D3',NULL,NULL,2,'economy','0'),(75,'D4',NULL,NULL,2,'economy','0'),(76,'D5',NULL,NULL,2,'economy','0'),(77,'D6',NULL,NULL,2,'economy','0'),(78,'D7',NULL,NULL,2,'economy','0'),(79,'D8',NULL,NULL,2,'economy','0'),(80,'D9',NULL,NULL,2,'economy','0'),(81,'A1',NULL,NULL,3,'economy','0'),(82,'A10',NULL,NULL,3,'economy','0'),(83,'A2',NULL,NULL,3,'economy','0'),(84,'A3',NULL,NULL,3,'economy','0'),(85,'A4',NULL,NULL,3,'economy','0'),(86,'A5',NULL,NULL,3,'economy','0'),(87,'A6',NULL,NULL,3,'economy','0'),(88,'A7',NULL,NULL,3,'economy','0'),(89,'A8',NULL,NULL,3,'economy','0'),(90,'A9',NULL,NULL,3,'economy','0'),(91,'B1',NULL,NULL,3,'economy','0'),(92,'B10',NULL,NULL,3,'economy','0'),(93,'B2',NULL,NULL,3,'economy','0'),(94,'B3',NULL,NULL,3,'economy','0'),(95,'B4',NULL,NULL,3,'economy','0'),(96,'B5',NULL,NULL,3,'economy','0'),(97,'B6',NULL,NULL,3,'economy','0'),(98,'B7',NULL,NULL,3,'economy','0'),(99,'B8',NULL,NULL,3,'economy','0'),(100,'B9',NULL,NULL,3,'economy','0'),(101,'C1',NULL,NULL,3,'economy','0'),(102,'C10',NULL,NULL,3,'economy','0'),(103,'C2',NULL,NULL,3,'economy','0'),(104,'C3',NULL,NULL,3,'economy','0'),(105,'C4',NULL,NULL,3,'economy','0'),(106,'C5',NULL,NULL,3,'economy','0'),(107,'C6',NULL,NULL,3,'economy','0'),(108,'C7',NULL,NULL,3,'economy','0'),(109,'C8',NULL,NULL,3,'economy','0'),(110,'C9',NULL,NULL,3,'economy','0'),(111,'D1',NULL,NULL,3,'economy','0'),(112,'D10',NULL,NULL,3,'economy','0'),(113,'D2',NULL,NULL,3,'economy','0'),(114,'D3',NULL,NULL,3,'economy','0'),(115,'D4',NULL,NULL,3,'economy','0'),(116,'D5',NULL,NULL,3,'economy','0'),(117,'D6',NULL,NULL,3,'economy','0'),(118,'D7',NULL,NULL,3,'economy','0'),(119,'D8',NULL,NULL,3,'economy','0'),(120,'D9',NULL,NULL,3,'economy','0'),(121,'A1',NULL,NULL,4,'economy','0'),(122,'A10',NULL,NULL,4,'economy','0'),(123,'A2',NULL,NULL,4,'economy','0'),(124,'A3',NULL,NULL,4,'economy','0'),(125,'A4',NULL,NULL,4,'economy','0'),(126,'A5',NULL,NULL,4,'economy','0'),(127,'A6',NULL,NULL,4,'economy','0'),(128,'A7',NULL,NULL,4,'economy','0'),(129,'A8',NULL,NULL,4,'economy','0'),(130,'A9',NULL,NULL,4,'economy','0'),(131,'B1',NULL,NULL,4,'economy','0'),(132,'B10',NULL,NULL,4,'economy','0'),(133,'B2',NULL,NULL,4,'economy','0'),(134,'B3',NULL,NULL,4,'economy','0'),(135,'B4',NULL,NULL,4,'economy','0'),(136,'B5',NULL,NULL,4,'economy','0'),(137,'B6',NULL,NULL,4,'economy','0'),(138,'B7',NULL,NULL,4,'economy','0'),(139,'B8',NULL,NULL,4,'economy','0'),(140,'B9',NULL,NULL,4,'economy','0'),(141,'C1',NULL,NULL,4,'economy','0'),(142,'C10',NULL,NULL,4,'economy','0'),(143,'C2',NULL,NULL,4,'economy','0'),(144,'C3',NULL,NULL,4,'economy','0'),(145,'C4',NULL,NULL,4,'economy','0'),(146,'C5',NULL,NULL,4,'economy','0'),(147,'C6',NULL,NULL,4,'economy','0'),(148,'C7',NULL,NULL,4,'economy','0'),(149,'C8',NULL,NULL,4,'economy','0'),(150,'C9',NULL,NULL,4,'economy','0'),(151,'D1',NULL,NULL,4,'economy','0'),(152,'D10',NULL,NULL,4,'economy','0'),(153,'D2',NULL,NULL,4,'economy','0'),(154,'D3',NULL,NULL,4,'economy','0'),(155,'D4',NULL,NULL,4,'economy','0'),(156,'D5',NULL,NULL,4,'economy','0'),(157,'D6',NULL,NULL,4,'economy','0'),(158,'D7',NULL,NULL,4,'economy','0'),(159,'D8',NULL,NULL,4,'economy','0'),(160,'D9',NULL,NULL,4,'economy','0'),(161,'A1',NULL,NULL,5,'economy','0'),(162,'A10',NULL,NULL,5,'economy','0'),(163,'A2',NULL,NULL,5,'economy','0'),(164,'A3',NULL,NULL,5,'economy','0'),(165,'A4',NULL,NULL,5,'economy','0'),(166,'A5',NULL,NULL,5,'economy','0'),(167,'A6',NULL,NULL,5,'economy','0'),(168,'A7',NULL,NULL,5,'economy','0'),(169,'A8',NULL,NULL,5,'economy','0'),(170,'A9',NULL,NULL,5,'economy','0'),(171,'B1',NULL,NULL,5,'economy','0'),(172,'B10',NULL,NULL,5,'economy','0'),(173,'B2',NULL,NULL,5,'economy','0'),(174,'B3',NULL,NULL,5,'economy','0'),(175,'B4',NULL,NULL,5,'economy','0'),(176,'B5',NULL,NULL,5,'economy','0'),(177,'B6',NULL,NULL,5,'economy','0'),(178,'B7',NULL,NULL,5,'economy','0'),(179,'B8',NULL,NULL,5,'economy','0'),(180,'B9',NULL,NULL,5,'economy','0'),(181,'C1',NULL,NULL,5,'economy','0'),(182,'C10',NULL,NULL,5,'economy','0'),(183,'C2',NULL,NULL,5,'economy','0'),(184,'C3',NULL,NULL,5,'economy','0'),(185,'C4',NULL,NULL,5,'economy','0'),(186,'C5',NULL,NULL,5,'economy','0'),(187,'C6',NULL,NULL,5,'economy','0'),(188,'C7',NULL,NULL,5,'economy','0'),(189,'C8',NULL,NULL,5,'economy','0'),(190,'C9',NULL,NULL,5,'economy','0'),(191,'D1',NULL,NULL,5,'economy','0'),(192,'D10',NULL,NULL,5,'economy','0'),(193,'D2',NULL,NULL,5,'economy','0'),(194,'D3',NULL,NULL,5,'economy','0'),(195,'D4',NULL,NULL,5,'economy','0'),(196,'D5',NULL,NULL,5,'economy','0'),(197,'D6',NULL,NULL,5,'economy','0'),(198,'D7',NULL,NULL,5,'economy','0'),(199,'D8',NULL,NULL,5,'economy','0'),(200,'D9',NULL,NULL,5,'economy','0'),(201,'A1',NULL,NULL,6,'economy','0'),(202,'A10',NULL,NULL,6,'economy','0'),(203,'A2',NULL,NULL,6,'economy','0'),(204,'A3',NULL,NULL,6,'economy','0'),(205,'A4',NULL,NULL,6,'economy','0'),(206,'A5',NULL,NULL,6,'economy','0'),(207,'A6',NULL,NULL,6,'economy','0'),(208,'A7',NULL,NULL,6,'economy','0'),(209,'A8',NULL,NULL,6,'economy','0'),(210,'A9',NULL,NULL,6,'economy','0'),(211,'B1',NULL,NULL,6,'economy','0'),(212,'B10',NULL,NULL,6,'economy','0'),(213,'B2',NULL,NULL,6,'economy','0'),(214,'B3',NULL,NULL,6,'economy','0'),(215,'B4',NULL,NULL,6,'economy','0'),(216,'B5',NULL,NULL,6,'economy','0'),(217,'B6',NULL,NULL,6,'economy','0'),(218,'B7',NULL,NULL,6,'economy','0'),(219,'B8',NULL,NULL,6,'economy','0'),(220,'B9',NULL,NULL,6,'economy','0'),(221,'C1',NULL,NULL,6,'economy','0'),(222,'C10',NULL,NULL,6,'economy','0'),(223,'C2',NULL,NULL,6,'economy','0'),(224,'C3',NULL,NULL,6,'economy','0'),(225,'C4',NULL,NULL,6,'economy','0'),(226,'C5',NULL,NULL,6,'economy','0'),(227,'C6',NULL,NULL,6,'economy','0'),(228,'C7',NULL,NULL,6,'economy','0'),(229,'C8',NULL,NULL,6,'economy','0'),(230,'C9',NULL,NULL,6,'economy','0'),(231,'D1',NULL,NULL,6,'economy','0'),(232,'D10',NULL,NULL,6,'economy','0'),(233,'D2',NULL,NULL,6,'economy','0'),(234,'D3',NULL,NULL,6,'economy','0'),(235,'D4',NULL,NULL,6,'economy','0'),(236,'D5',NULL,NULL,6,'economy','0'),(237,'D6',NULL,NULL,6,'economy','0'),(238,'D7',NULL,NULL,6,'economy','0'),(239,'D8',NULL,NULL,6,'economy','0'),(240,'D9',NULL,NULL,6,'economy','0'),(241,'A1',NULL,NULL,7,'economy','0'),(242,'A10',NULL,NULL,7,'economy','0'),(243,'A2',NULL,NULL,7,'economy','0'),(244,'A3',NULL,NULL,7,'economy','0'),(245,'A4',NULL,NULL,7,'economy','0'),(246,'A5',NULL,NULL,7,'economy','0'),(247,'A6',NULL,NULL,7,'economy','0'),(248,'A7',NULL,NULL,7,'economy','0'),(249,'A8',NULL,NULL,7,'economy','0'),(250,'A9',NULL,NULL,7,'economy','0'),(251,'B1',NULL,NULL,7,'economy','0'),(252,'B10',NULL,NULL,7,'economy','0'),(253,'B2',NULL,NULL,7,'economy','0'),(254,'B3',NULL,NULL,7,'economy','0'),(255,'B4',NULL,NULL,7,'economy','0'),(256,'B5',NULL,NULL,7,'economy','0'),(257,'B6',NULL,NULL,7,'economy','0'),(258,'B7',NULL,NULL,7,'economy','0'),(259,'B8',NULL,NULL,7,'economy','0'),(260,'B9',NULL,NULL,7,'economy','0'),(261,'C1',NULL,NULL,7,'economy','0'),(262,'C10',NULL,NULL,7,'economy','0'),(263,'C2',NULL,NULL,7,'economy','0'),(264,'C3',NULL,NULL,7,'economy','0'),(265,'C4',NULL,NULL,7,'economy','0'),(266,'C5',NULL,NULL,7,'economy','0'),(267,'C6',NULL,NULL,7,'economy','0'),(268,'C7',NULL,NULL,7,'economy','0'),(269,'C8',NULL,NULL,7,'economy','0'),(270,'C9',NULL,NULL,7,'economy','0'),(271,'D1',NULL,NULL,7,'economy','0'),(272,'D10',NULL,NULL,7,'economy','0'),(273,'D2',NULL,NULL,7,'economy','0'),(274,'D3',NULL,NULL,7,'economy','0'),(275,'D4',NULL,NULL,7,'economy','0'),(276,'D5',NULL,NULL,7,'economy','0'),(277,'D6',NULL,NULL,7,'economy','0'),(278,'D7',NULL,NULL,7,'economy','0'),(279,'D8',NULL,NULL,7,'economy','0'),(280,'D9',NULL,NULL,7,'economy','0'),(281,'A1',NULL,NULL,8,'economy','0'),(282,'A10',NULL,NULL,8,'economy','0'),(283,'A2',NULL,NULL,8,'economy','0'),(284,'A3',NULL,NULL,8,'economy','0'),(285,'A4',NULL,NULL,8,'economy','0'),(286,'A5',NULL,NULL,8,'economy','0'),(287,'A6',NULL,NULL,8,'economy','0'),(288,'A7',NULL,NULL,8,'economy','0'),(289,'A8',NULL,NULL,8,'economy','0'),(290,'A9',NULL,NULL,8,'economy','0'),(291,'B1',NULL,NULL,8,'economy','0'),(292,'B10',NULL,NULL,8,'economy','0'),(293,'B2',NULL,NULL,8,'economy','0'),(294,'B3',NULL,NULL,8,'economy','0'),(295,'B4',NULL,NULL,8,'economy','0'),(296,'B5',NULL,NULL,8,'economy','0'),(297,'B6',NULL,NULL,8,'economy','0'),(298,'B7',NULL,NULL,8,'economy','0'),(299,'B8',NULL,NULL,8,'economy','0'),(300,'B9',NULL,NULL,8,'economy','0'),(301,'C1',NULL,NULL,8,'economy','0'),(302,'C10',NULL,NULL,8,'economy','0'),(303,'C2',NULL,NULL,8,'economy','0'),(304,'C3',NULL,NULL,8,'economy','0'),(305,'C4',NULL,NULL,8,'economy','0'),(306,'C5',NULL,NULL,8,'economy','0'),(307,'C6',NULL,NULL,8,'economy','0'),(308,'C7',NULL,NULL,8,'economy','0'),(309,'C8',NULL,NULL,8,'economy','0'),(310,'C9',NULL,NULL,8,'economy','0'),(311,'D1',NULL,NULL,8,'economy','0'),(312,'D10',NULL,NULL,8,'economy','0'),(313,'D2',NULL,NULL,8,'economy','0'),(314,'D3',NULL,NULL,8,'economy','0'),(315,'D4',NULL,NULL,8,'economy','0'),(316,'D5',NULL,NULL,8,'economy','0'),(317,'D6',NULL,NULL,8,'economy','0'),(318,'D7',NULL,NULL,8,'economy','0'),(319,'D8',NULL,NULL,8,'economy','0'),(320,'D9',NULL,NULL,8,'economy','0');
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
  `boarding_time` varchar(100) DEFAULT NULL COMMENT '실제 탑승 시간',
  `departure_date` varchar(50) DEFAULT NULL,
  `destination_date` varchar(50) DEFAULT NULL,
  `seat_no` varchar(10) DEFAULT NULL COMMENT '좌석 번호',
  `flight_no` int DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `user_pw` varchar(50) DEFAULT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ticket_no`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='탑승권';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,1,2,1,'user','김포','제주','09:30','10:00','11:00','1',1,1,1,'2023-11-29 10:53:10','2023/12/06','2023/12/06','A10',2,NULL,NULL,'user'),(2,2,2,1,'user','제주','김포','14:30','15:00','16:00','1',1,0,NULL,'2023-11-14 10:46:58','2023/12/06','2023/12/06','A10',5,NULL,NULL,'user'),(3,1,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,'2023-11-14 18:04:54','2023/12/06','2023/12/06',NULL,0,NULL,NULL,NULL),(4,13,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,'2023-11-14 18:06:48','2023/12/06','2023/12/06',NULL,0,NULL,NULL,NULL),(5,13,1,1,'정슬기','김포','제주','09:30','10:00','11:00','1',1,1,1,NULL,'2023/12/06','2023/12/06','A10',1,'01028388192','123456',NULL),(6,1,1,1,'정슬기',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'GUSET');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='비회원';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user2`
--

LOCK TABLES `user2` WRITE;
/*!40000 ALTER TABLE `user2` DISABLE KEYS */;
INSERT INTO `user2` VALUES (1,'01000000000','123456','GUEST','GUEST');
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
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='회원';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'user','$2a$10$DWyBTmeFeAqKcGQxZ0cjhOdVZzisUtkcawxNOpcTnX1O...4v/bi2','이유저','인천시 부평구','01029405797','z____yn@naver.com','2023-11-06 01:02:02','2023-11-06 01:02:02','0'),(3,'sgij56','$2a$10$vRnwDBxHcexmOjZtqIyA5OZcCN19Yf67hC20QHTWraWmqqG31jrsa','정슬기','인천시 부평구','01000000000','sample@email.com','2023-11-06 06:13:25','2023-11-06 06:13:25','0'),(46,'admin','$2a$10$t1xDYQJJj3r44jOWUeSonefnawMc3AOwEap9j5vKvkJTH0icS.D/2','관리자','관리자','0000000','admin@gmail.com','2023-11-20 03:46:48','2023-11-20 03:46:48','0');
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

-- Dump completed on 2023-12-06 14:48:37
