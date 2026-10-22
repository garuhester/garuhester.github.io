### 导入Jar包：**poi** 和 **mysql-connector-java**

![poi](http://upload-images.jianshu.io/upload_images/2381669-f79f95916b74afd5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![mysql-connector-java](http://upload-images.jianshu.io/upload_images/2381669-ae3dc74431615ec6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>poi下载地址：
[**http://mirrors.hust.edu.cn/apache/poi/dev/bin/poi-bin-3.16-beta2-20170202.zip**](http://mirrors.hust.edu.cn/apache/poi/dev/bin/poi-bin-3.16-beta2-20170202.zip) 
mysql-connector-java下载地址：
https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-5.1.41.zip

***
###转换均采用以下两图的内容
**数据库表：**
![数据库表](http://upload-images.jianshu.io/upload_images/2381669-cac7d098e9eb6a2f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**Excel（workbook.xls）：**
![workbook.xls](http://upload-images.jianshu.io/upload_images/2381669-7b7d18f3473eaa38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***

###数据库转Excel：

* 核心代码：
```
//初始化excel文件
HSSFWorkbook wb = new HSSFWorkbook();//excel文件对象
HSSFSheet sheet = wb.createSheet("sheet");//表
sheet.setDefaultColumnWidth(20);//设置默认列宽为20
HSSFRow row0 = sheet.createRow(0);//创建第一行
row0.createCell(0).setCellValue("id");//第一行第一列
FileOutputStream outputStream = new  FileOutputStream("workbook.xls");
wb.write(outputStream);
outputStream.flush();
```

* 全部代码：
```
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
public static void main(String[] args) throws IOException, SQLException, ClassNotFoundException {
        //数据库变量
        String driver = "com.mysql.jdbc.Driver";
        String dvUrl = "jdbc:mysql://localhost:3306/";
        String user = "root";
        String password = "root";
        String database = "test";
        Connection conn;
        PreparedStatement pre;
        String sql;

        //初始化数据库
        Class.forName(driver);
        conn = DriverManager.getConnection(dvUrl + database, user, password);

        //初始化excel文件
        HSSFWorkbook wb = new HSSFWorkbook();//excel文件对象
        HSSFSheet sheet = wb.createSheet("sheet");//表
        sheet.setDefaultColumnWidth(20);//设置默认列宽为20

        HSSFRow row0 = sheet.createRow(0);//创建第一行
        row0.createCell(0).setCellValue("id");//第一行第一列
        row0.createCell(1).setCellValue("title");第一行第二列
        row0.createCell(2).setCellValue("href");第一行第三列
        row0.createCell(3).setCellValue("author");第一行第四列
        row0.createCell(4).setCellValue("time");第一行第五列

        sql = "select * from blog";//查询blog表
        pre = conn.prepareStatement(sql);
        ResultSet rs = pre.executeQuery();//
        int row_count = 1;
        while (rs.next()) {//遍历表内容
            String id = rs.getString("id");
            String title = rs.getString("title");
            String href = rs.getString("href");
            String author = rs.getString("author");
            String time = rs.getString("time");
            HSSFRow row = sheet.createRow(row_count);
            row.createCell(0).setCellValue(id);
            row.createCell(1).setCellValue(title);
            row.createCell(2).setCellValue(href);
            row.createCell(3).setCellValue(author);
            row.createCell(4).setCellValue(time);
            row_count++;
        }

        FileOutputStream outputStream = new FileOutputStream("workbook.xls");
        wb.write(outputStream);
        outputStream.flush();
      }
```

***

###Excel转数据库：
* 核心代码：
```
File file = new File("workbook.xls");
FileInputStream fileInputStream = new FileInputStream(file);
//根据指定的文件输入流导入Excel从而产生Workbook对象
Workbook wb = new HSSFWorkbook(fileInputStream);
//获取Excel文档中的第一个表单
Sheet sheet = wb.getSheetAt(0);
//对Sheet中的每一行进行遍历
for (Row row : sheet) {
         //跳过第一行标题
         if (row.getRowNum() == 0) {
             continue;
         }
         ExcelBean excelBean = new ExcelBean();
         excelBean.setId(row.getCell(0).getStringCellValue());//第一行第一列的值
}
```

* 全部代码：
```
      import org.apache.poi.hssf.usermodel.HSSFWorkbook;
      import org.apache.poi.ss.usermodel.Row;
      import org.apache.poi.ss.usermodel.Sheet;
      import org.apache.poi.ss.usermodel.Workbook;
       public static void main(String[] args) throws ClassNotFoundException, SQLException, IOException {
        //数据库变量
        String driver = "com.mysql.jdbc.Driver";
        String dvUrl = "jdbc:mysql://localhost:3306/";
        String user = "root";
        String password = "root";
        String database = "test";
        Connection conn;
        PreparedStatement pre;
        String sql;

        ArrayList<ExcelBean> excelBeans = new ArrayList<>();

        //初始化数据库
        Class.forName(driver);
        conn = DriverManager.getConnection(dvUrl + database, user, password);
        pre = conn.prepareStatement("SHOW TABLES LIKE 'excel'");
        ResultSet rs = pre.executeQuery();
        if (rs.next()) {
            //表存在
            sql = "truncate table excel";
        } else {
            //表不存在
            sql = "CREATE TABLE excel(" +
                    "id varchar(255)," +
                    "title varchar(255)," +
                    "href varchar(255)," +
                    "author varchar(255)," +
                    "time varchar(255)" +
                    ") ENGINE=MyISAM DEFAULT CHARSET=utf8";
        }

        pre = conn.prepareStatement(sql);
        pre.execute();

        File file = new File("workbook.xls");
        FileInputStream fileInputStream = new FileInputStream(file);
        //根据指定的文件输入流导入Excel从而产生Workbook对象
        Workbook wb = new HSSFWorkbook(fileInputStream);
        //获取Excel文档中的第一个表单
        Sheet sheet = wb.getSheetAt(0);
        //对Sheet中的每一行进行遍历
        for (Row row : sheet) {
            //跳过第一行标题
            if (row.getRowNum() == 0) {
                continue;
            }
            ExcelBean excelBean = new ExcelBean();
            excelBean.setId(row.getCell(0).getStringCellValue());
            excelBean.setTitle(row.getCell(1).getStringCellValue());
            excelBean.setHref(row.getCell(2).getStringCellValue());
            excelBean.setAuthor(row.getCell(3).getStringCellValue());
            excelBean.setTime(row.getCell(4).getStringCellValue());
            excelBeans.add(excelBean);
        }
        //遍历集合将数据插入到数据库
        for (ExcelBean eb : excelBeans) {
            sql = "INSERT INTO excel(id,title,href,author,time) " +
                    "VALUES ('" +
                    eb.getId() + "','" +
                    eb.getTitle() + "','" +
                    eb.getHref() + "','" +
                    eb.getAuthor() + "','" +
                    eb.getTime() + "')";
            pre = conn.prepareStatement(sql);
            pre.execute();
        }
        pre.close();
        conn.close();
      }

      public class ExcelBean {
          private String id;
          private String title;
          private String href;
          private String author;
          private String time;
      }
```
