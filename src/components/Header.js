import React from "react";
import { useState } from "react";
import styled from "styled-components";

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  //    로그인 상태 체크해서 버튼 내용 변경
  const checkLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <HeaderContainer>
      {/* 헤더 왼쪽 */}
      <HeaderLeft>
        <ImageTest src="data:image/jpeg;base64,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" />
      </HeaderLeft>

      {/* 헤더 가운데 */}
      <HeaderCenter>에 코</HeaderCenter>

      {/* 헤더 오른쪽 */}
      <HeaderRight>
        닉네임
        <LoginButton onClick={checkLogin}>
          {isLogin != false ? <p>로그아웃</p> : <p>로그인</p>}
        </LoginButton>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  background-color: green;
  display: flex;
  justify-content: space-between;
`;

const ImageTest = styled.img`
  object-fit: contain;
  border: 1px solid black;
`;

const HeaderLeft = styled.div``;

const HeaderCenter = styled.div``;

const HeaderRight = styled.div``;

const LoginButton = styled.button``;
