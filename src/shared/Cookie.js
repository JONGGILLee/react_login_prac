// Cookie.js -> const getCookie  ,  setCookie  ,  deleteCookie

const getCookie = (name) => {
  let value = "; " + document.cookie;

  let parts = value.split(`; ${name}=`); // aa=xx; user_id=bbb; ...-> aa=xx / bbb; ccc=ddd;

  if (parts.length === 2) {
    // 배열의 길이가 2 일때 실제로 cookie에 저장이 되어있으니까.
    return parts.pop().split(";").shift();
  }
};

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();

  console.log(date);

  document.cookie = name + "=; expires=" + date;
};

export { getCookie, setCookie, deleteCookie };
