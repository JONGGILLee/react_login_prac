// Post.js

import React from "react";

import Grid from "../elements/Grid";

const Post = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Grid padding="14px">
        <div>user profile / user name / insert_date / is_me (edit btn)</div>
        <div>contents</div>
        <div>image</div>
        <div>comment count</div>
      </Grid>
    </React.Fragment>
  );
};

// props로 위의 정보들(use profile, name...) 받아올 때 주의점. props 정보가 없을때 화면 깨짐 등 오류
Post.defaultProps = {
  user_info: {
    user_name: "JONGGIL",
    user_profile:
      "https://cdn.pixabay.com/photo/2022/03/27/18/00/feather-7095765__340.jpg",
  },
  image_url:
    "https://cdn.pixabay.com/photo/2016/02/21/18/09/iceland-1214063__340.jpg",
  contents: "저작권 없는 이미지파일입니다.",
  comment_cnt: 15,
  insert_dt: "2022-04-02 10:00:00",
};

export default Post;
