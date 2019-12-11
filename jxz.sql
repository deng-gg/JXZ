/*
SQLyog Enterprise v12.08 (64 bit)
MySQL - 5.7.22 : Database - jxz
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`jxz` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `jxz`;

/*Table structure for table `hr` */

DROP TABLE IF EXISTS `hr`;

CREATE TABLE `hr` (
  `date` varchar(50) NOT NULL,
  `HR_name` varchar(50) NOT NULL,
  `pwd` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `credit_code` varchar(50) NOT NULL,
  `juridical_person` varchar(50) DEFAULT NULL,
  `company_city` varchar(50) DEFAULT NULL,
  `QQ_WX` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`HR_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `hr` */

insert  into `hr`(`date`,`HR_name`,`pwd`,`email`,`company_name`,`credit_code`,`juridical_person`,`company_city`,`QQ_WX`) values ('2019-11-16','dengge','dengge','dengge@qq.com','阿里巴巴','452345324',NULL,NULL,NULL),('2019-11-15','你爷爷','123123123','124324234','华为','2341234',NULL,NULL,NULL),('2019-11-15','灯哥阿飞','123123123','34124','腾讯','12341234',NULL,NULL,NULL),('2019-11-16','盈盈一水间','xrbhlkn','1770018949qq,com','OPPO','620500',NULL,NULL,NULL),('2019-11-13','马爷','al1929312','HR_name@qq.com','阿里巴巴公司','91330100799655058B','马也','undefined','19125012341');

/*Table structure for table `job_seeker` */

DROP TABLE IF EXISTS `job_seeker`;

CREATE TABLE `job_seeker` (
  `date` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `pwd` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `post` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `birthday` varchar(50) DEFAULT NULL,
  `education` varchar(10) DEFAULT NULL,
  `self-assessment` text,
  `QQ_WX` varchar(30) DEFAULT NULL,
  `pay` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `job_seeker` */

insert  into `job_seeker`(`date`,`name`,`pwd`,`email`,`post`,`city`,`birthday`,`education`,`self-assessment`,`QQ_WX`,`pay`) values ('2019-11-12','username','1912504939','1912504939@qq.com','IT','成都','2000-10-09','大专','能用VUE+elemet完成前端开发，对新技术保持热情！',NULL,'1-3k'),('2019-11-13','周尚灯','1188315876','1443244532@qq.com','IT','深圳','2000-06-06','本科',NULL,NULL,'4-9k'),('2019-11-13','灯也','1243353245@qq.vom','1923243@qq.com','经济学','贵港市','2000-06-08','高中',NULL,NULL,'9-12k'),('2019-11-15','灯哥','123123123','123','123','1231','2000-06-09','本科',NULL,NULL,'1-3k'),('2019-11-15','灯哥个阿飞','123123123','341234','阿斯蒂芬','阿斯蒂芬','2000-06-08','研究生','能用VUE+elemet完成前端开发，对新技术保持热情！',NULL,'4-9k'),('2019-11-13','灯夜景灯','1243353245','1243353245@qq.vom','金融','长沙','2000-06-08','本科',NULL,NULL,'9-12k'),('2019-11-12','灯若','1912504939','1912504939@qq.com','IT','成都','2000-06-23','博士',NULL,NULL,'1-3k'),('2019-11-13','阿灯','1188315876','1188315876@qq.com','IT','长沙','2000-06-08','本科','能用VUE+elemet完成前端开发，对新技术保持热情！',NULL,'9-12k'),('2019-11-17','阿灯哥','123456','123456','123456','123456','2000-06-25','初中',NULL,NULL,'1-3k');

/*Table structure for table `post` */

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `HR_name` varchar(50) NOT NULL,
  `release_time` varchar(50) DEFAULT NULL,
  `post` varchar(50) NOT NULL,
  `ask` text,
  `pay` varchar(20) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `work_experience` varchar(50) DEFAULT NULL,
  `education` varchar(50) DEFAULT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `type` varchar(50) NOT NULL DEFAULT '其他'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `post` */

insert  into `post`(`HR_name`,`release_time`,`post`,`ask`,`pay`,`city`,`work_experience`,`education`,`company_name`,`email`,`type`) values ('dengge','2019-11-14','web前端','1.参与产品需求、研发设计的相关讨论，从前端设计角度提升产品使用性和美观度的要求；\r\n2.负责产品的前端开发工作，实现产品所需的交互效果；\r\n3.与后台技术开发保持良好沟通，完成具体的开发工作。\r\n任职要求：\r\n1.一年以上相关工作经验，计算机相关专业优先考虑;\r\n2.根据项目要求，有较好的整体布局观念能力，能够使用PHOTOSHOP，利用HTML5/CSS3/JavaScript等Web技术进行WEB交互界面开发；\r\n3.精通DIV/CSS制作，代码写作习惯良好，代码与CSS完全分离，并且符合W3C标准，熟悉前端优化，了解各主流浏览器特性，使页面兼容主流浏览器；\r\n4.精通js,CSS,HTML等前端相关技术，掌握JavaScript语言核心技术DOM、BOM、Ajax、JSON等，熟练运用jquery，jquery-ui，bootstrap；\r\n5.有解决问题，钻研新技术的兴趣和能力，善于交流和表达，有良好的团队合作精神；\r\n6.Web响应式布局设计技术者优先，有移动端页面开发经验优先考虑；\r\n7.优先考虑熟悉nodeJs,有前端部署打包相关工具（如grunt，glup，webpack等）经验者。\r\n8.优先考虑熟悉一种当前流行的前端框架（如vue.js等）者；','7-10k','深圳','1-2年','本科','腾讯','192504939',''),('马爷','2019-11-10','java后端','H5前端（最好熟悉HBuilder开发工具和ThinkPHP，Mui框架,vue.js框架等）。工作要求：工作积极热情，且学习能力强，有责任感，对自己工作任务力争做的最好 有一定的抗压能力，能够快速的调整好心态。\r\n公司介绍\r\n长沙市源科技有限公司，是一家专注提供app开发，H5游戏开发,微信小程序开发,金融类程序开发。为客户提供一站式互联网技术开发和运营解决方案。','4-7k','成都','1-2年','本科','阿里巴巴','192504939',''),('dengge','2019-9-10','UI设计师','H5前端（最好熟悉HBuilder开发工具和ThinkPHP，Mui框架,vue.js框架等）。工作要求：工作积极热情，且学习能力强，有责任感，对自己工作任务力争做的最好 有一定的抗压能力，能够快速的调整好心态。\r\n公司介绍\r\n长沙市源科技有限公司，是一家专注提供app开发，H5游戏开发,微信小程序开发,金融类程序开发。为客户提供一站式互联网技术开发和运营解决方案。','3-9k','广州','1-2年','本科','华为','192504939',''),('马爷','2019-12-10','python',NULL,'5-10k','长沙','1-2年','本科','华为','192504939',''),('dengge','2018-3-10','NodeJS',NULL,'3-7k','北京','1-2年','高中','腾讯','192504939',''),('盈盈一水间','2019-2-1','java','大厦发达地方','3-9k','北京','1-2年','博士','阿里巴巴','192504939',''),('盈盈一水间','2019-11-15','web开发','打发啊阿法撒旦法啊打发','3-9k','ask东方','1-2年','本科','华为','23123@qq.com',''),('盈盈一水间','2019-11-16','会计','1-8k','8-10k','深圳','1年','大专','阿里巴巴','192504939',''),('盈盈一水间','2019-11-17','java架构师','你猜','30-80k','北京','2年','大专','腾讯','192504939',''),('盈盈一水间','2019-11-15','web前端','3年经验','2-9k','上海','undefined','大专','阿里巴巴','192504939',''),('盈盈一水间','2019-11-17','NOde','1-2年开发经验','5-10k','南宁','undefined','大专',NULL,NULL,'技术'),('盈盈一水间','2019-11-18','UI设计师','PS，等','5-10k','杭州','undefined','大专',NULL,NULL,'设计'),('盈盈一水间','2019-11-18','UI设计师','ps','你猜','杭州','undefined','大专',NULL,NULL,'设计');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
