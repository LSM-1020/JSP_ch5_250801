/**
 * 
 */

function joinCheck() {
	
	var f = document.joinForm;
	var cname = document.joinForm.mname.value;
	var cemail = document.joinForm.memail.value;
	var cage = document.joinForm.mage.value;
	
	var regex1 = /^[가-힣]+$/; //한글만 입력받는 양식
	var regex2 = /^[a-zA-Z]+$/; //영어만 입력받는 양식
	var regex3 = /^[0-9]+$/; //숫자만 입력받는 양식
	var regex4 = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]+$/; //영어와 숫자와 특수문자 입력받는 양식
	
	if(document.joinForm.mid.value.length == 0) {//아이디가 빈칸으로 입력된 경우
			alert("아이디는 필수 입력 사항입니다.");
			document.joinForm.mid.focus(); //해당 폼으로 커서이동
			return;
	}
	if(document.joinForm.mid.value.length < 4 || document.joinForm.mid.value.length > 15) {
			alert("아이디는 4자이상 15자 미만으로 입력해주세요");
			document.joinForm.mid.focus();
			return;
	}
	if(document.joinForm.mpw.value.length == 0) {//비밀번호가 빈칸으로 입력된 경우
			alert("비밀번호는 필수 입력 사항입니다.");
			document.joinForm.mpw.focus(); 
			return;
	}		
	if(document.joinForm.mpw.value.length < 4 || document.joinForm.mpw.value.length > 15) {
			alert("비밀번호는 4자이상 15자 미만으로 입력해주세요");
			document.joinForm.mpw.focus();
			return;
	}
	if(document.joinForm.mpwcheck.value.length == 0) {
			alert("비밀번호 확인은 필수입니다");
			document.joinForm.mpwcheck.focus();
			return;
	}
	if(document.joinForm.mpwcheck.value.length != document.joinForm.mpw.value.length) {
		//비밀번호 란에 입력한 값과 비밀번호 확인에 입력한 값이 같은지 확인
			alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
			document.joinForm.mpwceck.focus();
			return;
	}
	if(document.joinForm.mname.value.length == 0) {//이름이 빈칸으로 입력된 경우
			alert("이름은 필수 입력 사항입니다.");
			document.joinForm.mname.focus(); 
			return;			
	}
	if(!regex1.test(cname)) {//이름을 한글만 입력받아야 할때
			alert("이름은 한글만 입력해주세요");
			document.joinForm.mname.focus(); 
			return;			
	}
	if(document.joinForm.memail.value.length == 0) {//이메일이 빈칸으로 입력된 경우
			alert("이메일는 필수 입력 사항입니다.");
			document.joinForm.memail.focus(); 
			return;
	}
	if(!regex4.test(cemail)) {//이메일을 한글빼고 입력받아야 할때
			alert("이메일은 영어만 입력해주세요");
			document.joinForm.memail.focus(); 
			return;			
	}
	if(document.joinForm.mage.value.length == 0) {//이메일이 빈칸으로 입력된 경우
			alert("나이는 필수 입력 사항입니다.");
			document.joinForm.mage.focus(); 
			return;
	}	
	if(!regex3.test(cage)) {
			alert("나이는 숫자만 입력해주세요")
			document.joinForm.mage.focus();
			return;
	}
	
	document.joinForm.submit();
	}