
-- Host: 127.0.0.1    Database: u534462265_exschool
-- ------------------------------------------------------
-- Server version	8.0.38

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
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `cls_id` int NOT NULL AUTO_INCREMENT,
  `cls_name` varchar(10) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `tution_fees` int DEFAULT NULL,
  PRIMARY KEY (`cls_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'Pre-KG','2024-05-28 12:45:27',NULL,10000),(2,'LKG','2024-05-28 12:45:27',NULL,20000),(3,'UKG','2024-05-28 12:45:27',NULL,50000),(4,'1st Std','2024-05-28 12:45:27',NULL,2345),(5,'2nd Std','2024-05-28 12:45:27',NULL,13333),(6,'3rd Std','2024-05-28 12:45:27',NULL,300000),(7,'4th Std','2024-05-28 12:45:28',NULL,50000),(8,'5th Std','2024-05-28 12:45:28',NULL,120000),(9,'6th Std','2024-05-28 12:45:28',NULL,5000),(10,'7th Std','2024-05-28 12:45:28',NULL,25414),(11,'8th Std','2024-05-28 12:45:28',NULL,60000),(12,'9th Std','2024-05-28 12:45:28',NULL,10000),(13,'10th Std','2024-05-28 12:45:28',NULL,20000);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class_allocation`
--

DROP TABLE IF EXISTS `class_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class_allocation` (
  `cls_allocation_id` int NOT NULL AUTO_INCREMENT,
  `cls_id` int DEFAULT NULL,
  `sec_id` int DEFAULT NULL,
  `academic_year` varchar(9) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`cls_allocation_id`),
  KEY `cls_id` (`cls_id`),
  KEY `sec_id` (`sec_id`),
  CONSTRAINT `class_allocation_ibfk_1` FOREIGN KEY (`cls_id`) REFERENCES `class` (`cls_id`) ON DELETE CASCADE,
  CONSTRAINT `class_allocation_ibfk_2` FOREIGN KEY (`sec_id`) REFERENCES `sections` (`sec_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_allocation`
--

LOCK TABLES `class_allocation` WRITE;
/*!40000 ALTER TABLE `class_allocation` DISABLE KEYS */;
INSERT INTO `class_allocation` VALUES (1,1,1,'2024-2025','2024-06-03 13:35:04',NULL),(2,1,2,'2024-2025','2024-06-03 13:35:04',NULL),(3,1,3,'2024-2025','2024-06-03 13:35:04',NULL),(4,2,1,'2024-2025','2024-06-03 13:35:04',NULL),(5,2,2,'2024-2025','2024-06-03 13:35:04',NULL),(6,2,3,'2024-2025','2024-06-03 13:35:04',NULL),(7,3,1,'2024-2025','2024-06-03 13:35:04',NULL),(8,3,2,'2024-2025','2024-06-03 13:35:04',NULL),(9,3,3,'2024-2025','2024-06-03 13:35:04',NULL),(10,4,1,'2024-2025','2024-06-03 13:35:04',NULL),(11,4,2,'2024-2025','2024-06-03 13:35:04',NULL),(12,4,3,'2024-2025','2024-06-03 13:35:04',NULL),(13,5,1,'2024-2025','2024-06-03 13:35:04',NULL),(14,5,2,'2024-2025','2024-06-03 13:35:04',NULL),(15,5,3,'2024-2025','2024-06-03 13:35:04',NULL),(16,6,1,'2024-2025','2024-06-03 13:35:04',NULL),(17,6,2,'2024-2025','2024-06-03 13:35:04',NULL),(18,6,3,'2024-2025','2024-06-03 13:35:04',NULL),(19,7,1,'2024-2025','2024-06-03 13:35:04',NULL),(20,7,2,'2024-2025','2024-06-03 13:35:04',NULL),(21,7,3,'2024-2025','2024-06-03 13:35:04',NULL),(22,8,1,'2024-2025','2024-06-03 13:35:04',NULL),(23,8,2,'2024-2025','2024-06-03 13:35:04',NULL),(24,8,3,'2024-2025','2024-06-03 13:35:04',NULL),(25,9,1,'2024-2025','2024-06-03 13:35:04',NULL),(26,9,2,'2024-2025','2024-06-03 13:35:04',NULL),(27,9,3,'2024-2025','2024-06-03 13:35:04',NULL),(28,10,1,'2024-2025','2024-06-03 13:35:04',NULL),(29,10,2,'2024-2025','2024-06-03 13:35:04',NULL),(30,10,3,'2024-2025','2024-06-03 13:35:04',NULL),(31,11,1,'2024-2025','2024-06-03 13:35:04',NULL),(32,11,2,'2024-2025','2024-06-03 13:35:04',NULL),(33,11,3,'2024-2025','2024-06-03 13:35:04',NULL),(34,12,1,'2024-2025','2024-06-03 13:35:04',NULL),(35,12,2,'2024-2025','2024-06-03 13:35:04',NULL),(36,12,3,'2024-2025','2024-06-03 13:35:04',NULL),(37,13,1,'2024-2025','2024-06-03 13:35:04',NULL),(38,13,2,'2024-2025','2024-06-03 13:35:04',NULL),(39,13,3,'2024-2025','2024-06-03 13:35:04',NULL),(40,1,4,'2028-2029','2024-06-10 11:16:53',NULL),(41,1,5,'2028-2029','2024-06-10 11:16:53',NULL),(42,1,6,'2028-2029','2024-06-10 11:16:53',NULL),(43,1,7,'2028-2029','2024-06-10 11:16:53',NULL),(44,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `class_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class_teacher`
--

DROP TABLE IF EXISTS `class_teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class_teacher` (
  `staff_id` int NOT NULL,
  `cls_id` int NOT NULL,
  `sec_id` int NOT NULL,
  `academic_year` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`staff_id`,`cls_id`),
  UNIQUE KEY `sec_id` (`sec_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_teacher`
--

LOCK TABLES `class_teacher` WRITE;
/*!40000 ALTER TABLE `class_teacher` DISABLE KEYS */;
/*!40000 ALTER TABLE `class_teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class_teachers`
--

DROP TABLE IF EXISTS `class_teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class_teachers` (
  `staff_id` int NOT NULL,
  `cls_id` int NOT NULL,
  `cls_allocation_id` int DEFAULT NULL,
  `academic_year` varchar(9) DEFAULT NULL,
  UNIQUE KEY `staff_id` (`staff_id`),
  UNIQUE KEY `sec_id` (`cls_allocation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_teachers`
--

LOCK TABLES `class_teachers` WRITE;
/*!40000 ALTER TABLE `class_teachers` DISABLE KEYS */;
INSERT INTO `class_teachers` VALUES (1,3,7,'2024-2025'),(2,5,12,'2023-2024'),(15,2,4,'2024-2025'),(16,3,8,'2024-2025'),(17,6,16,'2024-2025'),(18,1,1,'2024-2025'),(19,4,5,'2024-2025'),(22,7,20,'2024-2025'),(23,7,19,'2024-2025'),(24,6,17,'2024-2025'),(26,9,25,'2024-2025'),(27,10,28,'2024-2025'),(28,11,31,'2024-2025'),(29,12,34,'2024-2025'),(30,8,23,'2024-2025'),(31,9,26,'2023-2024');
/*!40000 ALTER TABLE `class_teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collect_fee`
--

DROP TABLE IF EXISTS `collect_fee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collect_fee` (
  `feeslogid` int NOT NULL AUTO_INCREMENT,
  `stu_id` int NOT NULL,
  `stu_name` varchar(50) NOT NULL,
  `payingfee` int NOT NULL,
  `remainingfee` int NOT NULL,
  `feedate` date DEFAULT NULL,
  `payment_method` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`feeslogid`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collect_fee`
--

LOCK TABLES `collect_fee` WRITE;
/*!40000 ALTER TABLE `collect_fee` DISABLE KEYS */;
INSERT INTO `collect_fee` VALUES (38,12,'Gayathri',15000,7500,'2024-08-03','Cash'),(39,13,'Indhu Mathi',49978,0,'2024-08-03','Cash'),(40,17,'Ajay',4000,40000,'2024-08-01','Cash');
/*!40000 ALTER TABLE `collect_fee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `dept_id` int NOT NULL AUTO_INCREMENT,
  `dept_name` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (2,'Teaching Staff','2024-06-03 11:05:43',NULL),(3,'Office Staff','2024-06-03 11:24:46',NULL),(4,'Security','2024-06-03 11:24:46',NULL),(5,'Cleaning','2024-06-03 11:24:46','2024-06-07 17:23:02'),(25,'Subject Teacher','2024-07-01 11:05:10',NULL);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discounts` (
  `discount_id` int NOT NULL AUTO_INCREMENT,
  `fees_id` int NOT NULL,
  `roll_no` varchar(50) NOT NULL,
  `discount_amount` decimal(10,2) NOT NULL,
  `discount_percentage` decimal(5,2) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`discount_id`),
  KEY `fees_id` (`fees_id`),
  KEY `roll_no` (`roll_no`),
  CONSTRAINT `discounts_ibfk_1` FOREIGN KEY (`fees_id`) REFERENCES `fees_allocation` (`fees_id`),
  CONSTRAINT `discounts_ibfk_2` FOREIGN KEY (`roll_no`) REFERENCES `students_allocation` (`roll_no`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discounts`
--

LOCK TABLES `discounts` WRITE;
/*!40000 ALTER TABLE `discounts` DISABLE KEYS */;
INSERT INTO `discounts` VALUES (1,1,'23PRE04',300.00,0.30,'chumma','2024-06-12 18:27:30',NULL);
/*!40000 ALTER TABLE `discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_mark`
--

DROP TABLE IF EXISTS `exam_mark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exam_mark` (
  `mark_id` int NOT NULL AUTO_INCREMENT,
  `exam_id` int DEFAULT NULL,
  `sub_id` int DEFAULT NULL,
  `staff_id` int DEFAULT NULL,
  `roll_no` varchar(40) DEFAULT NULL,
  `mark` varchar(5) DEFAULT NULL,
  `academic_year` varchar(9) DEFAULT NULL,
  `exam_date` date DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`mark_id`),
  KEY `exam_id` (`exam_id`),
  KEY `sub_id` (`sub_id`),
  KEY `staff_id` (`staff_id`),
  KEY `roll_no` (`roll_no`),
  CONSTRAINT `exam_mark_ibfk_1` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`exam_id`) ON DELETE SET NULL,
  CONSTRAINT `exam_mark_ibfk_2` FOREIGN KEY (`sub_id`) REFERENCES `subjects` (`sub_id`) ON DELETE SET NULL,
  CONSTRAINT `exam_mark_ibfk_3` FOREIGN KEY (`staff_id`) REFERENCES `staffs_master` (`staff_id`) ON DELETE SET NULL,
  CONSTRAINT `exam_mark_ibfk_4` FOREIGN KEY (`roll_no`) REFERENCES `students_allocation` (`roll_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_mark`
--

LOCK TABLES `exam_mark` WRITE;
/*!40000 ALTER TABLE `exam_mark` DISABLE KEYS */;
/*!40000 ALTER TABLE `exam_mark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_s`
--

DROP TABLE IF EXISTS `exam_s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exam_s` (
  `exam_id` int DEFAULT NULL,
  `exam_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_s`
--

LOCK TABLES `exam_s` WRITE;
/*!40000 ALTER TABLE `exam_s` DISABLE KEYS */;
INSERT INTO `exam_s` VALUES (1,'firstmidterm'),(2,'Quaterly exam'),(3,'Second mid exam'),(4,'Half-Yearly exam'),(5,'Third mid exam'),(6,'Annual exam'),(7,'Monthly exam'),(8,'Revision exam');
/*!40000 ALTER TABLE `exam_s` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exams`
--

DROP TABLE IF EXISTS `exams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exams` (
  `exam_id` int NOT NULL AUTO_INCREMENT,
  `exam_name` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`exam_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exams`
--

LOCK TABLES `exams` WRITE;
/*!40000 ALTER TABLE `exams` DISABLE KEYS */;
INSERT INTO `exams` VALUES (1,'Monthly Test',NULL,NULL),(2,'Mid-Term Test',NULL,NULL),(3,'Revision Test',NULL,NULL),(4,'Quarterly Exam',NULL,NULL),(5,'Half Yearly Exam',NULL,NULL),(6,'Anual  Exam',NULL,NULL);
/*!40000 ALTER TABLE `exams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examsandmarks`
--

DROP TABLE IF EXISTS `examsandmarks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examsandmarks` (
  `examname` varchar(50) DEFAULT NULL,
  `stu_id` int DEFAULT NULL,
  `stu_name` varchar(50) DEFAULT NULL,
  `tamil` int DEFAULT NULL,
  `english` int DEFAULT NULL,
  `maths` int DEFAULT NULL,
  `science` int DEFAULT NULL,
  `social` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  `exam_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examsandmarks`
--

LOCK TABLES `examsandmarks` WRITE;
/*!40000 ALTER TABLE `examsandmarks` DISABLE KEYS */;
INSERT INTO `examsandmarks` VALUES (NULL,28,'Ramasamy',12,1,11,11,11,46,NULL),(NULL,30,'Adam',11,11,11,11,11,55,NULL),(NULL,28,'Ramasamy',12,1,11,11,11,46,NULL),(NULL,30,'Adam',11,11,11,11,11,55,NULL),('revision',28,'Ramasamy',12,12,12,11,11,58,NULL),('revision',30,'Adam',22,22,22,22,12,100,NULL),('revision',28,'Ramasamy',12,12,12,11,11,58,NULL),('revision',30,'Adam',22,22,22,22,12,100,NULL),('Quaterly exam',28,'Ramasamy',12,12,12,12,12,60,NULL),('Quaterly exam',30,'Adam',12,9,12,12,12,57,NULL),('Quaterly exam',28,'Ramasamy',12,12,12,12,15,63,NULL),('Quaterly exam',30,'Adam',12,12,12,12,12,60,NULL),('Quaterly exam',28,'Ramasamy',12,12,12,12,15,63,NULL),('Quaterly exam',30,'Adam',12,12,12,12,12,60,NULL),('Second mid exam',28,'Ramasamy',12,12,121,2,11,158,NULL),('Second mid exam',30,'Adam',10,12,12,12,121,167,NULL),('Second mid exam',28,'Ramasamy',3,12,12,121,2,11,158),('Second mid exam',30,'Adam',3,10,12,12,12,121,167),('Second mid exam',28,'Ramasamy',3,12,12,121,2,11,158),('Second mid exam',30,'Adam',3,10,12,12,12,121,167),('Second mid exam',28,'Ramasamy',3,12,12,121,2,11,158),('Second mid exam',30,'Adam',3,10,12,12,12,121,167),('Second mid exam',28,'Ramasamy',12,12,121,2,11,158,3),('Second mid exam',30,'Adam',10,12,12,12,121,167,3),('Second mid exam',28,'Ramasamy',12,12,121,2,11,158,3),('Second mid exam',30,'Adam',10,12,12,12,121,167,3),('Second mid exam',28,'Ramasamy',12,12,121,2,11,158,3),('Second mid exam',30,'Adam',10,12,12,12,121,167,3),('Second mid exam',28,'Ramasamy',12,12,121,2,11,158,3),('Second mid exam',30,'Adam',10,12,12,12,121,167,3),('Half-Yearly exam',28,'Ramasamy',65,34,23,23,23,168,4),('Half-Yearly exam',30,'Adam',22,22,22,22,22,110,4),('Half-Yearly exam',28,'Ramasamy',65,34,23,23,23,168,4),('Half-Yearly exam',30,'Adam',22,22,22,22,22,110,4),('Third mid exam',28,'Ramasamy',26,12,37,34,23,132,5),('Third mid exam',30,'Adam',12,28,27,28,28,123,5),('Annual exam',28,'Ramasamy',23,23,23,33,334,436,6),('Annual exam',30,'Adam',43,34,34,33,43,187,6),('Annual exam',31,'marina',34,44,44,44,44,210,6),('Annual exam',28,'Ramasamy',23,23,23,33,334,436,6),('Annual exam',30,'Adam',43,34,34,33,43,187,6),('Annual exam',31,'marina',34,44,44,44,44,210,6);
/*!40000 ALTER TABLE `examsandmarks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fees_allocation`
--

DROP TABLE IF EXISTS `fees_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fees_allocation` (
  `fees_id` int NOT NULL AUTO_INCREMENT,
  `roll_no` varchar(50) NOT NULL,
  `academic_year` varchar(9) NOT NULL,
  `fee_category` varchar(100) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `remaining_amount` decimal(10,2) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `is_fully_paid` tinyint(1) NOT NULL DEFAULT '0',
  `discount_amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`fees_id`),
  UNIQUE KEY `roll_no` (`roll_no`,`academic_year`,`fee_category`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fees_allocation`
--

LOCK TABLES `fees_allocation` WRITE;
/*!40000 ALTER TABLE `fees_allocation` DISABLE KEYS */;
INSERT INTO `fees_allocation` VALUES (1,'23PRE04','2023-2024','tution fees',100000.00,69400.00,'2024-06-12 17:56:04','2024-06-27 16:03:16',0,300.00),(2,'23PRE03','2023-2024','bus fee',100000.00,100000.00,'2024-06-12 17:56:04',NULL,0,0.00),(3,'23PRE02','2023-2024','Tution Fees',60000.00,29500.00,'2024-06-12 18:27:30','2024-06-13 10:31:55',0,0.00);
/*!40000 ALTER TABLE `fees_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fees_logs`
--

DROP TABLE IF EXISTS `fees_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fees_logs` (
  `log_id` int NOT NULL AUTO_INCREMENT,
  `fees_id` int NOT NULL,
  `roll_no` varchar(40) NOT NULL,
  `paid_amount` decimal(10,2) NOT NULL,
  `payment_date` datetime NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`log_id`),
  KEY `fees_id` (`fees_id`),
  KEY `roll_no` (`roll_no`),
  CONSTRAINT `fees_logs_ibfk_1` FOREIGN KEY (`fees_id`) REFERENCES `fees_allocation` (`fees_id`) ON DELETE CASCADE,
  CONSTRAINT `fees_logs_ibfk_2` FOREIGN KEY (`roll_no`) REFERENCES `students_allocation` (`roll_no`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fees_logs`
--

LOCK TABLES `fees_logs` WRITE;
/*!40000 ALTER TABLE `fees_logs` DISABLE KEYS */;
INSERT INTO `fees_logs` VALUES (17,13,'23PRE01',500.00,'2024-06-07 22:53:39','UPI','2024-06-07 22:53:39','2024-06-10 11:16:53'),(21,1,'23PRE04',300.00,'2024-06-13 10:31:55','UPI','2024-06-13 10:31:55',NULL),(22,1,'23PRE04',30000.00,'2024-06-27 16:03:16','UPI','2024-06-27 16:03:16',NULL);
/*!40000 ALTER TABLE `fees_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mark_allocation`
--

DROP TABLE IF EXISTS `mark_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mark_allocation` (
  `student_rollno` varchar(50) DEFAULT NULL,
  `Student_name` varchar(50) DEFAULT NULL,
  `subject1_marks` int DEFAULT NULL,
  `subject2_marks` int DEFAULT NULL,
  `subject3_marks` int DEFAULT NULL,
  `subject4_marks` int DEFAULT NULL,
  `subject5_marks` int DEFAULT NULL,
  `total_marks` int DEFAULT NULL,
  `academic_year` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mark_allocation`
--

LOCK TABLES `mark_allocation` WRITE;
/*!40000 ALTER TABLE `mark_allocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `mark_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resigned_staff`
--

DROP TABLE IF EXISTS `resigned_staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resigned_staff` (
  `resigned_staff_id` int NOT NULL AUTO_INCREMENT,
  `staff_id` int NOT NULL,
  `reason` mediumtext,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`resigned_staff_id`),
  KEY `staff_id` (`staff_id`),
  CONSTRAINT `resigned_staff_ibfk_1` FOREIGN KEY (`staff_id`) REFERENCES `staffs_master` (`staff_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resigned_staff`
--

LOCK TABLES `resigned_staff` WRITE;
/*!40000 ALTER TABLE `resigned_staff` DISABLE KEYS */;
/*!40000 ALTER TABLE `resigned_staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `dept_id` int DEFAULT NULL,
  `role_name` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  KEY `dept_id` (`dept_id`),
  CONSTRAINT `role_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (15,2,'Subject Teacher','2024-06-03 13:02:20',NULL),(16,2,'Physical Education Teacher (PET)','2024-06-03 13:02:20',NULL),(17,3,'Accountant','2024-06-03 13:02:20',NULL),(18,3,'Receptionist','2024-06-03 13:02:20',NULL),(19,4,'Security Supervisor','2024-06-03 13:02:20',NULL),(20,4,'Security Guard','2024-06-03 13:02:20',NULL),(21,5,'Head Cleaner','2024-06-03 13:02:20',NULL),(22,5,'Cleaner','2024-06-03 13:02:20',NULL);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections` (
  `sec_id` int NOT NULL AUTO_INCREMENT,
  `sec_name` varchar(10) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`sec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'A','2024-05-28 13:11:34',NULL),(2,'B','2024-05-28 13:11:34',NULL),(3,'C','2024-05-28 13:11:34',NULL),(4,'D','2024-05-28 13:11:34',NULL),(5,'E','2024-05-28 13:11:34',NULL),(6,'F','2024-05-28 13:11:34',NULL),(7,'G','2024-05-28 13:11:34',NULL);
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_allocation`
--

DROP TABLE IF EXISTS `staff_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff_allocation` (
  `staff_allocation_id` int NOT NULL AUTO_INCREMENT,
  `staff_id` int NOT NULL,
  `sub_id` int NOT NULL,
  `academic_year` varchar(9) DEFAULT NULL,
  `isExpired` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`staff_allocation_id`),
  KEY `staff_id` (`staff_id`),
  KEY `sub_id` (`sub_id`),
  CONSTRAINT `staff_allocation_ibfk_1` FOREIGN KEY (`staff_id`) REFERENCES `staffs_master` (`staff_id`) ON DELETE CASCADE,
  CONSTRAINT `staff_allocation_ibfk_2` FOREIGN KEY (`sub_id`) REFERENCES `subjects` (`sub_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_allocation`
--

LOCK TABLES `staff_allocation` WRITE;
/*!40000 ALTER TABLE `staff_allocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `staff_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staffs_attendance`
--

DROP TABLE IF EXISTS `staffs_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staffs_attendance` (
  `staff_id` int DEFAULT NULL,
  `statusn` varchar(10) DEFAULT NULL,
  `entrytime` time DEFAULT NULL,
  `thatdate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staffs_attendance`
--

LOCK TABLES `staffs_attendance` WRITE;
/*!40000 ALTER TABLE `staffs_attendance` DISABLE KEYS */;
INSERT INTO `staffs_attendance` VALUES (1,'entry','08:30:00','2024-06-27'),(29,'entry','03:14:09','2024-06-27'),(29,'entry','03:17:09','2024-06-27'),(29,'entry','03:20:31','2024-06-27'),(29,'exit','00:00:00','2024-06-27'),(29,'exit','00:00:00','2024-06-27'),(29,'entry','03:25:03','2024-06-27'),(29,'exit','00:00:00','2024-06-27'),(29,'entry','03:50:02','2024-06-27'),(29,'exit','00:00:00','2024-06-27'),(29,'entry','03:50:02','2024-06-27'),(29,'exit','00:00:00','2024-06-27'),(29,'entry','03:51:53','2024-06-27'),(29,'exit','00:00:00','2024-06-27'),(29,'entry','03:59:18','2024-06-27'),(29,'exit','03:59:38','2024-06-27'),(29,'entry','05:16:22','2024-06-27'),(29,'exit','05:16:27','2024-06-27'),(29,'exit','05:16:27','2024-06-27'),(29,'entry','05:16:22','2024-06-27'),(29,'entry','12:03:43','2024-06-28'),(29,'entry','12:11:52','2024-06-28'),(29,'entry','12:12:03','2024-06-28'),(29,'exit','12:12:14','2024-06-28'),(29,'entry','12:16:00','2024-06-28'),(29,'entry','16:54:06','2024-06-28'),(29,'entry','17:30:57','2024-06-28'),(29,'entry','17:40:31','2024-06-28'),(29,'entry','19:15:11','2024-06-28'),(29,'exit','11:33:35','2024-07-01'),(29,'exit','11:33:37','2024-07-01'),(29,'entry','13:25:37','2024-07-12'),(29,'entry','22:51:31','2024-07-16'),(29,'exit','22:51:33','2024-07-16'),(30,'entry','22:54:36','2024-07-16'),(30,'exit','22:54:38','2024-07-16'),(29,'entry','12:55:38','2024-07-30'),(29,'entry','11:50:19','2024-08-01'),(29,'entry','11:50:44','2024-08-01'),(29,'entry','11:50:44','2024-08-01'),(29,'entry','11:50:44','2024-08-01'),(29,'entry','11:50:45','2024-08-01'),(29,'entry','11:51:15','2024-08-01'),(29,'exit','11:52:07','2024-08-01'),(29,'entry','11:52:14','2024-08-01'),(29,'entry','12:36:37','2024-08-01'),(29,'exit','12:36:42','2024-08-01');
/*!40000 ALTER TABLE `staffs_attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staffs_master`
--

DROP TABLE IF EXISTS `staffs_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staffs_master` (
  `staff_id` int NOT NULL AUTO_INCREMENT,
  `dept_id` int DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `staff_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `qualification` varchar(100) DEFAULT NULL,
  `experience` varchar(50) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `staff_img` varchar(10000) DEFAULT NULL,
  `isAlive` tinyint(1) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`staff_id`),
  KEY `dept_id` (`dept_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `staffs_master_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`) ON DELETE CASCADE,
  CONSTRAINT `staffs_master_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staffs_master`
--

LOCK TABLES `staffs_master` WRITE;
/*!40000 ALTER TABLE `staffs_master` DISABLE KEYS */;
INSERT INTO `staffs_master` VALUES (4,4,19,'Testttt','dfgdgfdfgd','45457457457','female','drd','2','dfgdgd','staff_img_1717659082494_873628067',1,'2024-06-06 12:43:23','2024-06-06 12:43:23',NULL),(7,5,22,'Ranjani','ranjaniajay@gmail.com','54345432','male','BE','1 year','Test','staff_img_1717668261914_519359879',1,'2024-06-06 13:04:23',NULL,NULL),(29,2,15,'Ramya','ramya@gmail.com','7010561111','female','BCA','0','Dubai kuruku santhu','staff_img_1718968549088_438892179',1,'2024-06-21 16:30:42',NULL,NULL),(30,2,15,'Rohit','rohit@gmail.com','7010303030','male','BE','10years','Dubai kuruku santhu','staff_img_1719232107417_398387647',1,'2024-06-24 12:34:28',NULL,NULL),(31,2,15,'sssss','sss@gmail.com','9090909090','male','be','1','ruttu','staff_img_1720696755742_354186208',1,'2024-07-11 16:48:09',NULL,NULL),(32,2,15,'sudhish','sudhish@gmail.com','9996585475','male','BTech','4','kuniyamuthur','staff_img_1720777054220_174867749',1,'2024-07-12 15:03:13',NULL,NULL),(34,2,15,'Harish','123@gmail.com','6382318872','male','MCA','2','Venset','staff_img_1722668116870_824763825',1,'2024-08-03 12:08:53',NULL,NULL),(35,2,15,'Harish','123@gmail.com','6382318872','male','MCA','2','Venset','staff_img_1722668142948_584657273',1,'2024-08-03 12:08:53',NULL,NULL);
/*!40000 ALTER TABLE `staffs_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_attendance`
--

DROP TABLE IF EXISTS `student_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_attendance` (
  `cls_id` int NOT NULL,
  `cls_allocation_id` int NOT NULL,
  `stu_id` int NOT NULL,
  `date` date NOT NULL,
  `staff_id` int NOT NULL,
  `present` tinyint(1) NOT NULL,
  PRIMARY KEY (`cls_id`,`cls_allocation_id`,`stu_id`,`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_attendance`
--

LOCK TABLES `student_attendance` WRITE;
/*!40000 ALTER TABLE `student_attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_booking`
--

DROP TABLE IF EXISTS `student_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class` varchar(50) NOT NULL,
  `student_name` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(100) NOT NULL,
  `date_of_join` date NOT NULL,
  `father_name` varchar(100) NOT NULL,
  `father_mobile` varchar(15) NOT NULL,
  `mother_name` varchar(100) NOT NULL,
  `mother_mobile` varchar(15) NOT NULL,
  `address` text,
  `aadhar_no` varchar(12) DEFAULT NULL,
  `community` varchar(50) DEFAULT NULL,
  `bookingfees` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_booking`
--

LOCK TABLES `student_booking` WRITE;
/*!40000 ALTER TABLE `student_booking` DISABLE KEYS */;
INSERT INTO `student_booking` VALUES (3,'2','sakthi vel','2024-07-28','Male','2024-07-30','Sakthivel','9876543210','Lakshmi','9876543210','kodai','','BC',1234),(4,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(5,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(6,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(7,'2','sakthi','2024-07-25','Male','2024-07-27','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(8,'2','sakthi','2024-07-25','Male','2024-07-27','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(9,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(10,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(11,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(12,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(13,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(14,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(15,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(16,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(17,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(18,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(19,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(20,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(21,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(22,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(23,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(24,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(25,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(26,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(27,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(28,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',NULL),(29,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',22),(30,'1','santhosh','2024-07-26','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC',10000),(31,'1','santhosh','2024-07-26','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC',10000),(32,'1','santhosh','2024-07-26','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC',10000),(33,'1','santhosh','2024-07-26','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC',10000),(34,'1','santhosh','2024-07-26','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC',10000),(35,'1','santhosh','2024-07-26','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC',10000),(36,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',11111),(37,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',11111),(38,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',11111),(39,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',11111),(40,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',11111),(41,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',11111),(42,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',11111),(43,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',11111),(44,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',11111),(45,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',11111),(46,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',3333),(47,'2','sakthi','2024-07-25','Male','2024-07-26','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',3333),(48,'2','Harish','2024-07-25','Male','2024-07-30','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',22222),(49,'5','Harish','2024-07-27','Male','2024-07-30','esrdft','9876543210','rtyuyui','9876543210','e5rtyuio',NULL,'BC',2000),(50,'5','Harish','2024-07-27','Male','2024-07-30','esrdft','9876543210','rtyuyui','9876543210','e5rtyuio',NULL,'BC',2000),(51,'2','sakthi','2024-07-25','Male','2024-07-31','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',2000),(52,'2','sakthi','2024-07-25','Male','2024-07-31','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','','BC',2000),(54,'2','siva sakthi','2024-07-28','Male','2024-07-29','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','123456789012','BC',1234),(55,'2','priya','2024-07-30','Female','2024-07-29','dad','9876543210','mom','9876543210','tirupur',NULL,'BC',4000),(56,'2','priya','2024-07-30','Female','2024-07-29','dad','9876543210','mom','9876543210','tirupur',NULL,'BC',4000);
/*!40000 ALTER TABLE `student_booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_enquiry`
--

DROP TABLE IF EXISTS `student_enquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_enquiry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class` varchar(50) NOT NULL,
  `student_name` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `gender` varchar(100) NOT NULL,
  `father_name` varchar(100) NOT NULL,
  `father_mobile` varchar(15) NOT NULL,
  `mother_name` varchar(100) NOT NULL,
  `mother_mobile` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `aadhar_no` varchar(12) DEFAULT NULL,
  `community` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_enquiry`
--

LOCK TABLES `student_enquiry` WRITE;
/*!40000 ALTER TABLE `student_enquiry` DISABLE KEYS */;
INSERT INTO `student_enquiry` VALUES (7,'2','siva sakthi ','2024-07-28','male','Sakthivel','9876543210','Lakshmi','9876543210','jfkmeowioieoe','222222222222','BC'),(9,'2','sakthi','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ','444444444444','BC'),(10,'2','sakthi','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ','444444444555','BC'),(11,'7','Harish','2024-07-25','Male','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ','','BC'),(12,'7','Harish','2024-07-25','Male','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ','','BC'),(13,'4','deepak','2024-07-25','Male','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(14,'2','deepeek','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(15,'2','deepeek','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(16,'2','deepeek','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(17,'2','deepeek','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(18,'2','deepeek','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(19,'2','deepeeka','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(20,'2','deepeeka','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(21,'2','deepeek','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(22,'2','deepeek','2024-07-25','Female','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(23,'1','sakthi','2024-07-12','Male','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC'),(24,'1','sakthi','2024-07-12','Male','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC'),(25,'1','santhosh','2024-07-26','Male','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC'),(26,'1','santhosh','2024-07-26','Male','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC'),(27,'1','santhosh','2024-07-26','Male','Sakthivel','9876543210','Lakshmi','9876543210','sulur',NULL,'BC'),(28,'3','sakthi','2024-07-26','Male','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(29,'3','sakthi','2024-07-26','Male','Sakthivel','9876543210','Lakshmi','9876543210','13/91  1st,street, ',NULL,'BC'),(30,'2','sakthi','2024-07-26','2024-07-26','Male','Sakthivel','9876543210','Lakshmi','9876543210',NULL,'jfkmeowioieoe'),(31,'2','sakthi','2024-07-26','2024-07-26','Male','Sakthivel','9876543210','Lakshmi','9876543210',NULL,'jfkmeowioieoe'),(32,'2','sakthi','2024-07-26','2024-07-26','Male','Sakthivel','9876543210','Lakshmi','9876543210',NULL,'jfkmeowioieoe'),(33,'5','Harish','2024-07-27','Male','esrdft','9876543210','rtyuyui','9876543210','e5rtyuio',NULL,'BC'),(34,'5','ramkumar','2024-07-30','Male','palani','9876543210','mom','9876543210','madurai',NULL,'BC'),(35,'5','ramkumar','2024-07-30','Male','palani','9876543210','mom','9876543210','madurai',NULL,'BC'),(36,'8','kumaresan','2024-07-27','Male','dad','9876543210','mom','9876543210','pachalur',NULL,'BC'),(37,'8','kumaresan','2024-07-27','Male','dad','9876543210','mom','9876543210','pachalur',NULL,'BC'),(38,'7','kumaresan','2024-07-27','Male','dad','9876543210','mom','9876543210','pachalur',NULL,'BC'),(39,'7','kumaresan','2024-07-27','Male','dad','9876543210','mom','9876543210','pachalur',NULL,'BC'),(40,'7','kumaresan','2024-07-27','Male','dad','9876543210','mom','9876543210','pachalur',NULL,'BC'),(41,'7','kumaresan','2024-07-27','Male','dad','9876543210','mom','9876543210','pachalur',NULL,'BC'),(42,'7','kumaresan','2024-07-27','Male','dad','9876543210','mom','9876543210','pachalur',NULL,'BC'),(43,'7','kumaresan','2024-07-27','Male','dad','9876543210','mom','9876543210','pachalur',NULL,'BC'),(44,'3','sakthi','2024-07-27','Male','dad','9876543210','mom','9876543210','pachalur',NULL,'BC'),(46,'2','priya','2024-07-30','Female','dad','9876543210','mom','9876543210','tirupur',NULL,'BC');
/*!40000 ALTER TABLE `student_enquiry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_marks`
--

DROP TABLE IF EXISTS `student_marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_marks` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255) NOT NULL,
  `english` int NOT NULL,
  `hindi` int NOT NULL,
  `mathematics` int NOT NULL,
  `science` int NOT NULL,
  `social_science` int NOT NULL,
  `total` int GENERATED ALWAYS AS (((((`english` + `hindi`) + `mathematics`) + `science`) + `social_science`)) STORED,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_marks`
--

LOCK TABLES `student_marks` WRITE;
/*!40000 ALTER TABLE `student_marks` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students_allocation`
--

DROP TABLE IF EXISTS `students_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students_allocation` (
  `stu_allocation_id` int NOT NULL AUTO_INCREMENT,
  `staff_id` int DEFAULT NULL,
  `stu_id` int DEFAULT NULL,
  `cls_allocation_id` int DEFAULT NULL,
  `roll_no` varchar(40) DEFAULT NULL,
  `academic_year` varchar(15) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`stu_allocation_id`),
  UNIQUE KEY `roll_no` (`roll_no`),
  KEY `staff_id` (`staff_id`),
  KEY `stu_id` (`stu_id`),
  KEY `cls_allocation_id` (`cls_allocation_id`),
  CONSTRAINT `students_allocation_ibfk_1` FOREIGN KEY (`staff_id`) REFERENCES `staffs_master` (`staff_id`) ON DELETE SET NULL,
  CONSTRAINT `students_allocation_ibfk_2` FOREIGN KEY (`stu_id`) REFERENCES `students_master` (`stu_id`) ON DELETE CASCADE,
  CONSTRAINT `students_allocation_ibfk_3` FOREIGN KEY (`cls_allocation_id`) REFERENCES `class_allocation` (`cls_allocation_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students_allocation`
--

LOCK TABLES `students_allocation` WRITE;
/*!40000 ALTER TABLE `students_allocation` DISABLE KEYS */;
INSERT INTO `students_allocation` VALUES (6,NULL,17,1,'23PRE01','2023-2024','2024-06-07 18:17:51','2024-06-12 13:56:58'),(9,NULL,7,1,'23PRE04','2023-2024','2024-06-07 18:17:51',NULL),(13,NULL,17,6,'24PRE01','2024-2025','2024-06-07 18:36:46','2024-06-12 13:56:58'),(16,NULL,7,4,'24PRE04','2024-2025','2024-06-07 18:36:46',NULL),(17,NULL,17,7,'DPS0001','2025-2026','2024-06-07 18:43:12',NULL),(20,NULL,7,7,'DPS0004','2025-2026','2024-06-07 18:43:12',NULL),(21,NULL,10,4,'24LKG01','2024-2025','2024-06-08 18:31:21',NULL),(22,NULL,13,25,'23321232','2024-2025','2024-06-12 13:56:58',NULL);
/*!40000 ALTER TABLE `students_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students_attendance`
--

DROP TABLE IF EXISTS `students_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students_attendance` (
  `stu_id` int DEFAULT NULL,
  `status` varchar(7) DEFAULT NULL,
  `cls_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `staff_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students_attendance`
--

LOCK TABLES `students_attendance` WRITE;
/*!40000 ALTER TABLE `students_attendance` DISABLE KEYS */;
INSERT INTO `students_attendance` VALUES (NULL,NULL,NULL,NULL,NULL),(NULL,NULL,NULL,NULL,NULL),(NULL,NULL,NULL,NULL,NULL),(NULL,NULL,NULL,NULL,NULL),(NULL,NULL,NULL,NULL,NULL),(28,'present',12,'2024-06-27',NULL),(28,'present',12,'2024-06-27',NULL),(30,'present',12,'2024-06-27',NULL),(28,'present',12,'2024-06-27',NULL),(30,'absent',12,'2024-06-27',NULL),(28,'present',12,'2024-06-27',29),(30,'absent',12,'2024-06-27',29),(31,'present',12,'2024-06-28',29),(28,'present',12,'2024-06-28',29),(30,'present',12,'2024-06-28',29),(31,'present',12,'2024-06-28',29),(28,'present',12,'2024-06-28',29),(28,'present',12,'2024-06-28',29),(31,'present',12,'2024-06-28',29),(30,'present',12,'2024-06-28',29),(30,'present',12,'2024-06-28',29),(31,'present',12,'2024-06-28',29),(30,'present',12,'2024-06-28',29),(31,'present',12,'2024-06-28',29),(28,'present',12,'2024-06-28',29),(28,'present',12,'2024-06-28',29),(31,'absent',12,'2024-06-28',29),(30,'present',12,'2024-06-28',29),(28,'present',12,'2024-06-29',29),(30,'present',12,'2024-06-29',29),(31,'present',12,'2024-06-29',29),(28,'present',12,'2024-07-02',29),(30,'present',12,'2024-07-02',29);
/*!40000 ALTER TABLE `students_attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students_master`
--

DROP TABLE IF EXISTS `students_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students_master` (
  `stu_id` int NOT NULL AUTO_INCREMENT,
  `staff_id` int DEFAULT NULL,
  `cls_id` int DEFAULT NULL,
  `stu_name` varchar(70) DEFAULT NULL,
  `stu_aadhar` varchar(20) DEFAULT NULL,
  `stu_img` varchar(5000) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `van` int DEFAULT NULL,
  `community` varchar(100) DEFAULT NULL,
  `cast_name` varchar(50) DEFAULT NULL,
  `religion` varchar(50) DEFAULT NULL,
  `father_name` varchar(70) DEFAULT NULL,
  `father_mobile` varchar(20) DEFAULT NULL,
  `father_occupation` varchar(100) DEFAULT NULL,
  `father_annual_income` decimal(10,2) DEFAULT NULL,
  `mother_name` varchar(70) DEFAULT NULL,
  `mother_mobile` varchar(20) DEFAULT NULL,
  `mother_occupation` varchar(100) DEFAULT NULL,
  `mother_annual_income` decimal(10,2) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `isAllocated` tinyint(1) DEFAULT '0',
  `apply_date` date DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `cls_allocation_id` varchar(100) DEFAULT NULL,
  `scheme` int DEFAULT NULL,
  `tution_fees` int DEFAULT NULL,
  `total_fees` int DEFAULT NULL,
  `pending_fees` int DEFAULT NULL,
  `transport_fees` int DEFAULT NULL,
  `additional_fees` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `date_of_join` varchar(100) DEFAULT NULL,
  `firstinstallment` varchar(100) DEFAULT NULL,
  `secondinstallment` varchar(100) DEFAULT NULL,
  `bookingfees` varchar(100) DEFAULT NULL,
  `eca_fees` varchar(100) DEFAULT NULL,
  `van_student` varchar(100) DEFAULT NULL,
  `eca_student` varchar(100) DEFAULT NULL,
  `scheme_student` varchar(100) DEFAULT NULL,
  `section` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`stu_id`),
  KEY `staff_id` (`staff_id`),
  KEY `cls_id` (`cls_id`),
  CONSTRAINT `students_master_ibfk_1` FOREIGN KEY (`staff_id`) REFERENCES `staffs_master` (`staff_id`) ON DELETE SET NULL,
  CONSTRAINT `students_master_ibfk_2` FOREIGN KEY (`cls_id`) REFERENCES `class` (`cls_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students_master`
--

LOCK TABLES `students_master` WRITE;
/*!40000 ALTER TABLE `students_master` DISABLE KEYS */;
INSERT INTO `students_master` VALUES (7,29,3,'Sathishss',NULL,'stu_img_1717660235465_938060777','Male','2024-05-28',NULL,'no','no','test','sdfsdf','9360066844','farmer',150000.00,'kamali','8967324565','house wife',123.00,'dsgsgsd',1,'2023-06-06','2024-06-06 13:04:23','2024-06-07 13:26:04',NULL,10000,5000,200000,NULL,1000,200,100,'2024-07-30',NULL,NULL,'3000',NULL,NULL,NULL,'yes','A'),(8,30,4,'Sahabdeen','98977889999','stu_img_1717666441855_690407240','male','2024-04-15',5656,'Test','Test','Test','Ansar','0000000000','Business',150000.00,'Banu','11111111111','house wife',100000.00,'Test',0,'2023-06-06','2024-06-06 13:04:23','2024-06-06 15:25:35',NULL,12200,2345,50000,NULL,50000,900,3245,NULL,NULL,NULL,NULL,NULL,'yes','yes','yes','A'),(9,29,4,'Santhiya','7877567567','stu_img_1717666681852_45490656','female','2024-05-15',111111,'Test','no','Test','Kuppusamy','222222222','Electrical',150000.00,'Rakku','3333333333','Nurse',100000.00,'Test',0,'2023-06-06','2024-06-06 13:04:23',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'yes',NULL,NULL,'B'),(10,29,6,'Saranya','2345665432','stu_img_1717666792562_680046807','female','2024-05-27',10000,'Test','Test','Test','Suresh','44444444444','farmer',150000.00,'lakshmi','1234567892','house wife',0.00,'Test',1,'2023-06-06','2024-06-06 13:04:23',NULL,NULL,NULL,NULL,300000,NULL,10000,10000,20000,NULL,NULL,NULL,NULL,NULL,'yes','yes',NULL,'B'),(12,30,2,'Gayathri','65432345432','stu_img_1717667091296_265864047','male','2024-05-24',NULL,'Test','Test','Test','Rasu','1223356789','FisherMan',150000.00,'Alagamma','8438928432','House wife',100000.00,'Test',1,'2023-06-06','2024-06-06 13:04:23',NULL,'',20000,20000,22500,7500,3000,2000,2500,NULL,'15000','10000',NULL,NULL,NULL,NULL,'yes','C'),(13,30,2,'Indhu Mathi','65434543233','stu_img_1717667278406_85160255','female','2024-05-13',20000,'Test','Test','Test','Murugfan','5443454333','Millitary',1500000.00,'JeyaMala','123764789','house wife',0.00,'Test',1,'2024-06-06','2024-06-06 13:04:23',NULL,'',2000,20000,49978,0,20000,10000,22,NULL,'10000','10000',NULL,NULL,'yes',NULL,'yes','D'),(14,30,1,'Suthish','234242424242','stu_img_1717669874502_120913825','male','2024-06-01',20000,'asdads','sdsad','asdad','asd','7865437645','sfsff',10000.00,'sdfsfs','9345657586','sdfdf',0.00,'asdasdads',0,'2024-06-06','2024-06-06 13:04:23',NULL,'1',20000,10000,49500,19500,30000,12000,2500,NULL,'20000','10000',NULL,NULL,'yes',NULL,'yes','B'),(17,31,5,'Ajay','852074105245','stu_img_1717753307376_616340915','male','2024-06-01',12,'sdfsdfsdf','sfsdfs','sdfsdfsdf','sdfsdfsdf','6454545454','sdfsdfsfs',2323.00,'sdfsdfsfd','8228238228','sfdsdfsdgfds',2323.00,'sdfsdfsdf',1,'2024-06-07','2024-06-07 14:56:34',NULL,'',2000,12000,44000,40000,20000,12000,0,NULL,'10000','2000',NULL,NULL,'yes',NULL,'yes','C'),(18,31,2,'sahabthin','543454345433','stu_img_1718200193107_786752779','female','2024-06-05',30000,'fgh','Test','sdfsdf','selva','9990066844','developer',150000.00,'ssss','8667326535','house wife',446.00,'dsgsgsd',0,'2024-06-12','2024-06-12 18:27:30',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'yes',NULL,NULL,'D'),(19,31,2,'sahabthin','543454345433','stu_img_1718200197695_812722911','female','2024-06-05',30000,'fgh','Test','sdfsdf','selva','9990066844','developer',150000.00,'ssss','8667326535','house wife',446.00,'dsgsgsd',0,'2024-06-12','2024-06-12 18:27:30',NULL,NULL,20000,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'yes',NULL,'yes','G'),(20,31,11,'indhar','123456789894','stu_img_1718373568245_413154249','male','2024-05-14',111111,'bc','test','hindhu','xxx','9629917201','test2',100000.00,'m2','8525852489','demo',0.00,'23. test',0,'2024-06-14','2024-06-14 18:31:42',NULL,'31',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'22333','yes','yes',NULL,'F'),(21,7,11,'indhar','123456789894','stu_img_1718373570845_366289507','male','2024-05-14',111111,'bc','test','hindhu','xxx','9629917201','test2',100000.00,'m2','8525852489','demo',0.00,'23. test',0,'2024-06-14','2024-06-14 18:31:42',NULL,NULL,2000,60000,62000,NULL,2000,500,500,NULL,NULL,NULL,NULL,'20000','yes','yes','yes','A'),(22,7,13,'selvii','172838238129','stu_img_1718528343240_656154092','female','2024-06-11',30000,'no','no','no','samy','7279128181','Business',150000.00,'amma','8282929292','house wife',0.00,'tst',0,'2024-06-16','2024-06-16 12:49:52',NULL,'',30000,20000,22000,NULL,2000,500,500,NULL,NULL,NULL,NULL,NULL,'yes',NULL,'yes','B'),(23,7,8,'suveesh','332222211111','stu_img_1718630372170_339032888','male','2024-06-19',5656,'Test','no','Test','jkjhg','8438964843','farmer',2000000.00,'gffgh','7010561811','admin',100000.00,'test',0,'2024-06-17','2024-06-17 18:45:51',NULL,'',20000,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'yes',NULL,'yes','C'),(24,7,5,'Maniraja','281299128812','stu_img_1718730998622_328594','male','2024-06-11',1000,'Test','no','Test','Suresh','8788121123','Supervisor',100000.00,'Geetha','8812811812','House wife',1200.00,'Test',0,'2024-06-18','2024-06-18 22:13:33',NULL,NULL,150000,13333,35333,NULL,20000,12000,10000,NULL,NULL,NULL,NULL,NULL,'yes',NULL,'yes','D'),(25,7,7,'SathisPandi','781812819191','stu_img_1718731188064_537768838','male','2024-06-11',20000,'Test','no','Test','Magudi','7912919211','Business',150000.00,'Selvi','9881112211','bank ',100000.00,'Test',0,'2024-06-18','2024-06-18 22:13:33',NULL,'',15000,NULL,NULL,NULL,1000,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'yes',NULL,'yes','F'),(26,7,7,'Raji','889881818282','stu_img_1718731474830_325792176','female','2024-06-12',NULL,'Test','no','Test','Sathishpandi','9343372374','Business',1200000.00,'Rasikaa','7812812811','house wife',12000.00,'Test',0,'2024-06-18','2024-06-18 22:13:33',NULL,'',NULL,50000,52000,NULL,2000,1500,1500,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'H'),(27,4,10,'Muthaa','234332223322','stu_img_1718963707564_232031812','male','2024-06-02',30000,'no','no','Test','pudungi','8989898976','developer',150000.00,'ssss','8438964866','house wife',100000.00,'test',0,'2024-06-21','2024-06-21 14:25:51',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'111111','yes','yes',NULL,'G'),(28,4,12,'Ramasamy','222222222222','stu_img_1718968323915_222128131','male','2024-06-11',NULL,'Test','no','chrishtian','rajesh','7982389238','Business',1800000.00,'priya','7030303043','Developer',20000000.00,'Test',0,'2024-06-21','2024-06-21 16:30:42',NULL,'',NULL,10000,12000,NULL,2000,500,500,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'B'),(29,4,10,'TEstpiece1','432211122111','stu_img_1719468321401_263190405','male','2024-06-14',NULL,'no','no','test','test','8777766655','Business',34567.00,'gffgh','8438964843','admin',446.00,'test',0,'2024-06-27','2024-06-27 11:35:10',NULL,'',0,20000,21100,NULL,1000,600,500,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'yes','A'),(30,4,12,'Adam','432343232232','stu_img_1719502382097_923456171','male','2024-06-06',NULL,'no','Test','no','raja','9521485214','company',147852.00,'mangu','9658745875','dbnvsvCKHd',2451.00,'coimbatore',0,'2024-06-27','2024-06-27 20:58:48',NULL,'',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'C'),(31,4,12,'marina','234543212322','stu_img_1719529607142_886012317','male','2022-06-11',1,'weww','Test','no','kidasss','8521457852','IT',15247.00,'hhhhh','9658745875','company',5478.00,'irugur',0,'2024-06-28','2024-06-28 04:27:07',NULL,'',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'F'),(32,4,4,'santhos','452178542145','stu_img_1719580705003_374906572','male','2012-03-12',1,'weww','Test','no','mangos','8521457852','office',542145.00,'manju','9564788578','it',5478.00,'irugur',0,'2024-06-28','2024-06-28 17:50:17',NULL,NULL,1000,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'111111',NULL,'yes',NULL,'F'),(33,29,7,'Priya','251617261617','stu_img_1719666225552_791935092','female','2024-06-18',20000,'weww','Test','no','selva','9897576789','company',12000.00,'lotus','9952525252','office',2451.00,'coimbatore',0,'2024-06-29','2024-06-29 17:34:32',NULL,'',NULL,40000,61000,NULL,20000,6000,5000,NULL,NULL,NULL,NULL,NULL,'yes',NULL,NULL,'D'),(34,29,8,'selva','876787678889','stu_img_1719666670351_172374935','male','2024-06-18',5656,'weww','Test','no','raja','8998898897','company',150000.00,'manju','6547895214','company',1250.00,'coimbatore',0,'2024-06-29','2024-06-29 17:34:32',NULL,'',0,120000,121000,NULL,20000,1000,20000,NULL,NULL,NULL,NULL,NULL,'yes',NULL,NULL,'A'),(35,29,2,'gtr','0','stu_img_1719815213500_969952221','male','2000-01-10',30000,'weww','Test','no','dddd','6665896585','saJIDPSBis',54785.00,'mangu','9658745875','it',25874.00,'salem',0,'2024-07-01','2024-07-01 11:05:10',NULL,NULL,1000,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'yes',NULL,NULL,'A'),(36,29,4,'ssssssss','547895547855','stu_img_1719916982188_95638435','male','2010-08-15',1,'weww','Test','no','mangos','8547584756','IT',54785.00,'sasa','9584785478','office',25874.00,'tiruppur',0,'2024-07-02','2024-07-02 16:06:43',NULL,NULL,520140,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'A'),(49,29,5,'marina','521458745444','stu_img_1720006534829_60091113','female','2010-05-25',1,'weww','Test','hfvgd','raja','9952587458','IT',12000.00,'raji','9995858585','it',2547.00,'coimbatore',0,'2024-07-03','2024-07-03 16:42:29',NULL,NULL,NULL,13333,10556,NULL,1000,1223,5000,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'B'),(78,30,4,'Shiva','54323432','sample_image','male','2024-05-31',NULL,'no','no','test','selva','08668123234','farmer',150000.00,'amma','09360066844','admin',100000.00,'test',0,'2024-07-12','2024-07-12 11:59:08',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'B'),(80,31,3,'Sathish','7654321234543','sample_image','male','2024-05-27',NULL,'no','no','test','sdfsdf','09360066844','farmer',150000.00,'kamali','08967324565','house wife',123.00,'dsgsgsd',0,'2024-07-12','2024-07-12 11:59:08',NULL,NULL,NULL,40000,45000,NULL,5000,5000,5000,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'B'),(83,31,4,'Shiva','54323432','sample_image','male','2024-05-31',NULL,'no','no','test','selva','08668123234','farmer',150000.00,'amma','09360066844','admin',100000.00,'test',0,'2024-07-12','2024-07-12 11:59:08',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'C'),(84,32,3,'Sathish','7654321234543','sample_image','male','2024-05-27',NULL,'no','no','test','sdfsdf','09360066844','farmer',150000.00,'kamali','08967324565','house wife',123.00,'dsgsgsd',0,'2024-07-12','2024-07-12 11:59:08',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'C'),(89,29,8,'dev','234567812345','stu_img_1720847087181_592827932','male','2007-06-13',5656,'weww','Test','HINDHU','kidasss','8998898897','IT',147852.00,'hindhu','8547587468','it',5478.00,'erode',0,'2024-07-13','2024-07-13 10:07:33',NULL,NULL,1000,120000,120000,NULL,500,500,1000,NULL,NULL,NULL,NULL,NULL,'yes',NULL,NULL,'C'),(90,32,12,'saha','14521452145','stu_img_1720852059101_1277703','male','2011-10-28',1,'bn','chteiar','hind','hgfgg','9654785478','kiljs',5050.00,'jiya','8652130147','jiytg',9630.00,'gudalr',0,'2024-07-13','2024-07-13 10:07:33',NULL,NULL,2000,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'D'),(91,32,4,'Shiva','54323432','sample_image','male','2024-05-31',NULL,'no','no','test','selva','08668123234','farmer',150000.00,'amma','09360066844','admin',100000.00,'test',0,'2024-07-13','2024-07-13 10:07:33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'D'),(97,32,4,'Shiva','54323432','sample_image','male','2024-05-31',NULL,'no','no','test','selva','08668123234','farmer',150000.00,'amma','09360066844','admin',100000.00,'test',0,'2024-07-13','2024-07-13 10:07:33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'D'),(99,29,9,'joel','852147965478','stu_img_1720857421504_213321858','male','2000-09-12',123456,'mnj','testy','hindh','mangosh','6985210214','offices',120005.00,'lotusu','7852145421','itg',8521.00,'irugur',0,'2024-07-13','2024-07-13 12:18:36',NULL,NULL,1020,5000,10000,NULL,200,5000,200,NULL,NULL,NULL,NULL,NULL,'yes',NULL,NULL,'E'),(101,NULL,2,'priya',NULL,NULL,'Female','2024-07-30',NULL,'BC',NULL,NULL,'dad','9876543210',NULL,NULL,'mom','9876543210',NULL,NULL,'tirupur',0,'2024-07-13',NULL,NULL,NULL,NULL,20000,23000,23000,2000,3000,2000,'2024-07-29','10000','10000','4000',NULL,NULL,NULL,NULL,'E'),(102,NULL,2,'sakthi vel',NULL,NULL,'Male','2024-07-28',NULL,'BC',NULL,NULL,'Sakthivel','9876543210',NULL,NULL,'Lakshmi','9876543210',NULL,NULL,'kodai',0,'2024-07-31',NULL,NULL,NULL,NULL,NULL,20000,NULL,NULL,NULL,NULL,'2024-07-30',NULL,NULL,'1234',NULL,NULL,NULL,NULL,'E'),(103,NULL,2,'sakthi vel',NULL,NULL,'Male','2024-07-28',NULL,'BC',NULL,NULL,'Sakthivel','9876543210',NULL,NULL,'Lakshmi','9876543210',NULL,NULL,'kodai',0,'2024-07-31',NULL,NULL,NULL,NULL,NULL,20000,NULL,NULL,NULL,NULL,'2024-07-30',NULL,NULL,'1234',NULL,NULL,NULL,NULL,'F'),(104,NULL,2,'siva sakthish',NULL,NULL,'Male','2024-07-28',NULL,'BC',NULL,NULL,'Sakthivel','9876543210',NULL,NULL,'Lakshmi','9876543210',NULL,NULL,'jfkmeowioieos',0,'2024-07-31',NULL,NULL,NULL,NULL,NULL,1111,NULL,NULL,NULL,NULL,'2024-07-29',NULL,NULL,'1234',NULL,NULL,NULL,NULL,'F'),(105,NULL,2,'siva sakthish',NULL,NULL,'Male','2024-07-28',NULL,'BC',NULL,NULL,'Sakthivel','9876543210',NULL,NULL,'Lakshmi','9876543210',NULL,NULL,'jfkmeowioieos',0,'2024-07-31',NULL,NULL,NULL,NULL,NULL,20000,NULL,NULL,NULL,NULL,'2024-07-29',NULL,NULL,'1234',NULL,NULL,NULL,NULL,'G'),(106,NULL,2,'siva sakthi',NULL,NULL,'Male','2024-07-28',NULL,'BC',NULL,NULL,'Sakthivel','9876543210',NULL,NULL,'Lakshmi','9876543210',NULL,NULL,'jfkmeowioieoe',0,'2024-07-31',NULL,NULL,NULL,NULL,NULL,200000,NULL,NULL,NULL,NULL,'2024-07-29',NULL,NULL,'1234',NULL,NULL,NULL,NULL,'G');
/*!40000 ALTER TABLE `students_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students_register`
--

DROP TABLE IF EXISTS `students_register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students_register` (
  `studentName` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `fatherName` varchar(255) NOT NULL,
  `mobileNumber` varchar(20) NOT NULL,
  `countryCode` varchar(10) NOT NULL,
  `collegeName` varchar(255) NOT NULL,
  `courseDetails` text NOT NULL,
  `areaOfInterest` text NOT NULL,
  `programmingSkills` text NOT NULL,
  `address` text NOT NULL,
  `yearOfPassing` int DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `resume` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students_register`
--

LOCK TABLES `students_register` WRITE;
/*!40000 ALTER TABLE `students_register` DISABLE KEYS */;
/*!40000 ALTER TABLE `students_register` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentsregister`
--

DROP TABLE IF EXISTS `studentsregister`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentsregister` (
  `studentName` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `fatherName` varchar(255) NOT NULL,
  `mobileNumber` varchar(20) NOT NULL,
  `countryCode` varchar(10) NOT NULL,
  `collegeName` varchar(255) NOT NULL,
  `courseDetails` text NOT NULL,
  `areaOfInterest` text NOT NULL,
  `programmingSkills` text NOT NULL,
  `address` text NOT NULL,
  `yearOfPassing` int DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `resume` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentsregister`
--

LOCK TABLES `studentsregister` WRITE;
/*!40000 ALTER TABLE `studentsregister` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentsregister` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `sub_id` int NOT NULL AUTO_INCREMENT,
  `cls_allocation_id` int NOT NULL,
  `sub_name` varchar(25) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`sub_id`),
  KEY `cls_allocation_id` (`cls_allocation_id`),
  CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`cls_allocation_id`) REFERENCES `class_allocation` (`cls_allocation_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,1,'Tamil','2024-06-03 19:24:47',NULL),(2,1,'English','2024-06-03 18:38:18',NULL),(3,1,'Mathematics','2024-06-03 18:38:18',NULL),(4,1,'Science','2024-06-03 18:38:18',NULL),(5,1,'Social Science','2024-06-03 18:38:18',NULL),(6,2,'Tamil','2024-06-03 19:24:47',NULL),(7,2,'English','2024-06-03 19:24:47',NULL),(8,2,'Mathematics','2024-06-03 19:24:47',NULL),(9,2,'Science','2024-06-03 19:24:47',NULL),(10,2,'Social Science','2024-06-03 19:24:47',NULL),(11,3,'Tamil',NULL,NULL),(12,3,'English',NULL,NULL),(13,3,'Mathematics',NULL,NULL),(14,3,'Science',NULL,NULL),(15,3,'Social',NULL,NULL),(16,4,'Tamil',NULL,NULL),(17,4,'English',NULL,NULL),(18,4,'Mathematics',NULL,NULL);
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_table`
--

DROP TABLE IF EXISTS `time_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time_table` (
  `t_table_id` int NOT NULL AUTO_INCREMENT,
  `cls_allocation_id` int NOT NULL,
  `t_table` mediumtext,
  `academic_year` varchar(9) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`t_table_id`),
  KEY `cls_allocation_id` (`cls_allocation_id`),
  CONSTRAINT `time_table_ibfk_1` FOREIGN KEY (`cls_allocation_id`) REFERENCES `class_allocation` (`cls_allocation_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_table`
--

LOCK TABLES `time_table` WRITE;
/*!40000 ALTER TABLE `time_table` DISABLE KEYS */;
INSERT INTO `time_table` VALUES (1,1,'timetable_1717585605257_345913654','2024-2025','2024-06-05 16:36:40',NULL),(2,2,'timetable_1717588518176_213654165','2024-2025','2024-06-05 17:23:54',NULL),(3,3,'timetable_1717588734136_149094624','2024-2025','2024-06-05 17:27:35',NULL),(4,4,'timetable_1717664750496_952542884','2024-2025','2024-06-06 13:04:23',NULL),(5,8,'timetable_1718002493105_212638920','2024-2025','2024-06-10 11:16:53',NULL),(6,10,'timetable_1718182032899_577721482','2024-2025','2024-06-12 13:56:58',NULL),(7,10,'timetable_1718182032754_685813143','2024-2025','2024-06-12 13:56:58',NULL);
/*!40000 ALTER TABLE `time_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `van_attenance`
--

DROP TABLE IF EXISTS `van_attenance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `van_attenance` (
  `stu_id` int DEFAULT NULL,
  `cls_id` int DEFAULT NULL,
  `statusn` varchar(7) DEFAULT NULL,
  `thatdate` date DEFAULT NULL,
  `staff_id` int DEFAULT NULL,
  `stu_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `van_attenance`
--

LOCK TABLES `van_attenance` WRITE;
/*!40000 ALTER TABLE `van_attenance` DISABLE KEYS */;
INSERT INTO `van_attenance` VALUES (31,12,'present','2024-06-28',NULL,NULL),(31,12,'present','2024-06-28',29,NULL),(31,12,'present','2024-06-28',29,'marina'),(31,12,'present','2024-06-28',29,'marina'),(31,12,'present','2024-06-28',29,'marina'),(31,12,'present','2024-07-02',29,'marina'),(34,8,'present','2024-07-16',30,'selva'),(89,8,'present','2024-07-16',30,'dev'),(31,12,'present','2024-07-29',29,'marina'),(90,12,'present','2024-07-29',29,'saha');
/*!40000 ALTER TABLE `van_attenance` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-03 18:09:25
