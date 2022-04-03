import React from "react";

import { Text, Input, Button, Grid } from "../elements";

const Login = (props) => {
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
        {/* <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 했어!");
          }}
        ></Button> */}
      </Grid>
    </React.Fragment>
  );
};

export default Login;
