<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>핸들러 함수</title>
<script type="text/javascript">
	function checkFun() { 
		if(document.gradeForm.book.value =="") { <%--"" 빈칸검사--%>
			alert("책 이름은 필수사항입니다") //alert는 알람창 발생
		}else {
			alert("추천도서 :" + document.gradeForm.book.value + "\n" + "평점:" + document.gradeForm.grade.value);
		<%-- name=book 정보 + 평점정보--%>
		}
	}

</script>
</head>
<body>
	<h2>추천도서 평점</h2>
	<hr>
	<form action="#" name="gradeForm">
		추천도서: <input type="text" name="book" size="30"><br><br>
		평점
		<hr>
		<input type="radio" name="grade" value="★★★★★"checked="checked">★★★★★<br>
		<input type="radio" name="grade" value="★★★★☆">★★★★☆<br>
		<input type="radio" name="grade" value="★★★☆☆">★★★☆☆<br>
		<input type="radio" name="grade" value="★★☆☆☆">★★☆☆☆<br>
		<input type="radio" name="grade" value="★☆☆☆☆">★☆☆☆☆<br>
		<hr>
		<input type="submit" value="추천하기" onclick="checkFun()"> <%--onclick은 버튼을 누르면 해당하는 함수를 실행해라 --%>
		<input type="reset" value="다시작성">
		
	
	</form>
</body>
</html>