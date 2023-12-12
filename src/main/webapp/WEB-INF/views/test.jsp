<%@ page import="java.io.File" %>
<%@ page import="java.io.IOException" %>
<%@ page import="java.io.InputStream" %>
<%@ page import="java.io.FileOutputStream" %>
<%@ page import="java.io.OutputStream" %>
<%@ page import="java.util.Collection" %>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload" %>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory" %>
<%@ page import="org.apache.commons.fileupload.FileItem" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data" onsubmit="upload()">
        <input type="file" name="file" />
        <input type="submit" value="Upload" />
    </form>
<script>

    // 업로드된 파일을 저장할 디렉토리 경로
    String uploadDir = "C:/uploads";

    // 만약 디렉토리가 존재하지 않으면 생성
    File dir = new File(uploadDir);
    if (!dir.exists()) {
        dir.mkdirs();
    }

    // 파일 업로드 처리
    if (ServletFileUpload.isMultipartContent(request)) {
        try {
            Collection<FileItem> items = new ServletFileUpload(new DiskFileItemFactory()).parseRequest(request);
            for (FileItem item : items) {
                if (!item.isFormField()) {
                    String fileName = new File(item.getName()).getName();
                    String filePath = uploadDir + File.separator + fileName;
                    item.write(new File(filePath));

                    out.println("File uploaded successfully! File path: " + filePath);
                }
            }
        } catch (Exception e) {
            out.println("File upload failed: " + e.getMessage());
        }
    } else {
        out.println("Invalid request - not a multipart/form-data request");
    }

</script>
</body>
</html>
