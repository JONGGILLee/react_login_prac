import React from "react";

import { Grid, Text, Input, Button } from "../elements";

const Signup = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="30px" bold>
          회원가입 페이지.
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디."
            placeholder="아이디를 입력하세요."
            _onChange={() => {
              console.log("아이디를 입력함");
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="닉네임."
            placeholder="닉네임을 입력하세요."
            _onChange={() => {
              console.log("닉네임을 입력함");
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="패스워드."
            placeholder="패스워드를 입력하세요."
            _onChange={() => {
              console.log("패스워드를 입력함");
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="패스워드 확인."
            placeholder="패스워드를 다시 입력하세요."
            _onChange={() => {
              console.log("패스워드를 다시 입력함");
            }}
          />
        </Grid>

        <Button
          text="회원가입하기!"
          _onClick={() => {
            console.log("회원가입했습니다.");
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
