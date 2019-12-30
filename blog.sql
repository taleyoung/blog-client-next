-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `archive`
--

DROP TABLE IF EXISTS `archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `archive` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archive`
--

LOCK TABLES `archive` WRITE;
/*!40000 ALTER TABLE `archive` DISABLE KEYS */;
/*!40000 ALTER TABLE `archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `archive_article`
--

DROP TABLE IF EXISTS `archive_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `archive_article` (
  `id` int(11) NOT NULL,
  `archive_id` int(11) DEFAULT NULL,
  `article_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archive_article`
--

LOCK TABLES `archive_article` WRITE;
/*!40000 ALTER TABLE `archive_article` DISABLE KEYS */;
/*!40000 ALTER TABLE `archive_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章id',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '文章标题',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章内容',
  `created_at` datetime(4) NOT NULL DEFAULT CURRENT_TIMESTAMP(4) ON UPDATE CURRENT_TIMESTAMP(4) COMMENT '文章创建时间',
  `updated_at` datetime(4) NOT NULL DEFAULT CURRENT_TIMESTAMP(4),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (114,'tt1','cccc1','2019-10-20 11:08:04.0000','2019-10-20 11:08:04.0000'),(124,'服务端渲染初探2','\n#### 常用方法\n1. pop() push()\n2. shift() -去除一个元素。 unshift() -增加一个元素\n3. forEach() map()\n4. slice(start,end) splice(start,count,args) split(\'\')\n5. find(n=>n>3) findIndex filter\n6. include\n7. every() some()\n\n\n```\nlet arr = [1,2,3,4]\narr.aplice(1,0,\'a\')\n此时arr为 [1,\'a\',2,3,4]\n```\n数组中和另一个数组之间连接应该用conca()\n数组中加入一个元素用push\n\n\n#### 数组去重的n种方法\n1. 使用es6的方法来实现\n```\n//第一种方法\nfunction unique(array){\n    return Array.from(new Set(array))\n}\n//第二种 运用拓展运算符\nfunction unique(array){\n    return [...new Set(array)];\n}\n//第三种 箭头函数\nconst unique = a => [...new Set(array)];\n```\n\n2. 使用filter方法来实现\n```\n//未排序\n    let res = array.filter(function(item,index,array){\n        return array.indexOf(item) === index;\n    })\n    //已排序\n    let res = array.concat().sort().filter(function(item,index,array){\n        return !index || item!==array[index-1];\n    })\n\n```\n\n3. 常规的方法-利用indexOf\n```\nvar res=[];\n    for(var i = 0, len = array.length; i<len; i++){\n        var current = array[i];\n        if(res.indexOf(current)===-1){\n            res.push(current);\n        }\n    }\n```\n4. 常规的方法-排序\n这里需要注意一下 **array.concat()的作用是为了复制一个新数组出来 这样的话就不会改变原有数组的值了。**\n```\nvar res = [];\n    //使用.concat()是为了复制一个新数组出来 这样的话就不会改变原有数组的值了。\n    var sortedArray = array.concat().sort();\n    var seen;\n    for(var i = 0,len = sortedArray.length; i<len; i++){\n        if(!i || seen !== sortedArray[i]){\n            res.push(sortedArray[i]);\n        }\n        seen = sortedArray[i];\n    }\n```\n\n\n\n#### 数组扁平化\n1. 比较常规的递归\n```\n    function flatten(arr){\n    var result=[];\n    for(let i = 0,len = arr.length; i < len; i++){\n        if(Array.isArray(arr[i])){\n            result = result.concat(flatten(arr[i]))\n        }else{\n            result.push(arr[i]);\n        }\n    }\n    return result;\n}\n    \n```\n2. reduce\n```\nfunction flatten(arr){\n    return arr.reduce((prev,next)=>(\n        prev.concat(Array.isArray(next)?flatten(next):next)\n    ),[])\n}\n```\n3. some+...\n```\nfunction flatten(arr) {\n  while (arr.some(item => Array.isArray(item))) {\n    arr = [].concat(...arr);\n  }\n  return arr;\n}\n```\n\n\n\n#### 字符串反转\n```\nstr=\'abc\';\nres = str.split(\'\').reverse().join(\'\')\n```\n','2019-11-18 16:02:35.9223','2019-11-18 16:02:35.0000'),(125,'title','content','2019-11-23 14:05:17.3787','2019-11-23 14:05:17.3787'),(127,'2222restful','restful content','2019-11-23 14:09:44.6575','2019-11-23 14:09:44.6575'),(128,'2222restful','restful content','2019-11-23 15:45:39.3790','2019-11-23 15:45:39.3790'),(129,'2222restful','restful content','2019-11-23 15:50:25.9109','2019-11-23 15:50:25.9109'),(130,'latesdt','restful content','2019-11-23 15:51:02.9831','2019-11-23 15:51:02.9831'),(131,'latesdt','restful content','2019-11-23 16:32:32.6395','2019-11-23 16:32:32.6395'),(132,'latesdt','restful content','2019-11-23 16:32:36.9332','2019-11-23 16:32:36.9332'),(133,'latesdt33','restful content','2019-11-23 16:52:31.5743','2019-11-23 16:32:37.6176'),(136,'test client','test client','2019-11-24 20:30:02.5459','2019-11-24 20:30:02.5459'),(137,'2','2222','2019-11-24 20:36:22.9635','2019-11-24 20:36:22.9635'),(138,'最后新增一篇','最后新增一篇的内容','2019-11-24 21:38:47.0283','2019-11-24 21:38:47.0283');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'tagid',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '''tt''',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'cs','2019-11-23 15:51:03','2019-11-23 15:51:03'),(2,'react','2019-11-23 15:51:03','2019-11-23 15:51:03'),(3,'nodejs','2019-11-23 15:51:03','2019-11-23 15:51:03'),(5,'vue','2019-11-23 15:51:03','2019-11-23 15:51:03'),(11,'ng','2019-10-26 00:00:00','2019-10-26 00:00:00'),(13,'','2019-11-02 08:08:38','2019-11-02 08:08:38'),(14,'','2019-11-02 08:10:58','2019-11-02 08:10:58'),(15,'1','2019-11-02 08:19:02','2019-11-02 08:19:02'),(16,'2','2019-11-02 08:19:15','2019-11-02 08:19:15');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag_article`
--

DROP TABLE IF EXISTS `tag_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag_article`
--

LOCK TABLES `tag_article` WRITE;
/*!40000 ALTER TABLE `tag_article` DISABLE KEYS */;
INSERT INTO `tag_article` VALUES (1,1,114,'2019-11-23 16:32:37','2019-11-23 16:32:37'),(2,2,111,'2019-11-23 16:32:37','2019-11-23 16:32:37'),(3,3,111,'2019-11-23 16:32:37','2019-11-23 16:32:37'),(4,3,112,'2019-11-23 15:41:57','2019-11-23 15:41:57'),(6,3,129,'2019-11-23 15:50:25','2019-11-23 15:50:25'),(7,2,129,'2019-11-23 15:50:25','2019-11-23 15:50:25'),(8,5,130,'2019-11-23 15:51:02','2019-11-23 15:51:02'),(9,11,130,'2019-11-23 15:51:02','2019-11-23 15:51:02'),(16,5,131,'2019-11-23 16:32:32','2019-11-23 16:32:32'),(17,11,131,'2019-11-23 16:32:32','2019-11-23 16:32:32'),(18,5,132,'2019-11-23 16:32:36','2019-11-23 16:32:36'),(19,11,132,'2019-11-23 16:32:36','2019-11-23 16:32:36'),(20,5,133,'2019-11-23 16:32:37','2019-11-23 16:32:37'),(21,11,133,'2019-11-23 16:32:37','2019-11-23 16:32:37'),(26,3,136,'2019-11-24 20:30:02','2019-11-24 20:30:02'),(27,2,137,'2019-11-24 20:36:22','2019-11-24 20:36:22'),(28,5,138,'2019-11-24 21:38:47','2019-11-24 21:38:47'),(29,2,138,'2019-11-24 21:38:47','2019-11-24 21:38:47'),(30,11,138,'2019-11-24 21:38:47','2019-11-24 21:38:47');
/*!40000 ALTER TABLE `tag_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-30 21:36:06
