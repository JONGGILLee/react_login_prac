import React from "react";

import { Text, Input, Button, Grid } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const Login = (props) => {
  console.log(getCookie("user_id"));
  console.log(getCookie("user_pwd"));

  const login = () => {
    setCookie("user_id", "ppori", 3);
    setCookie("user_pwd", "ppwwdd", 3);
  };
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="30px" bold>
          로그인 페이지
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디 입력"
            placeholder="아이디를 입력하세요"
            _onChange={() => {
              console.log("아이디를 입력했습니다");
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="패스워드 입력"
            placeholder="패스워드를 입력하세요"
            _onChange={() => {
              console.log("패스워드를 입력했습니다");
            }}
          />
        </Grid>
        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 했습니다!");

            login();
            // 누르면 쿠키를 저장.
            // deleteCookie("user_id");
            // 누르면 user_id 쿠키를 삭제.
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
