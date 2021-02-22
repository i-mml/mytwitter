import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import useStyle from "./styles";
import { toast } from "react-toastify";
import { loginApi, registerApi } from "../../../api/api_auth";

const LOGIN_TAB_VALUE = 1;
const REGISTER_TAB_VALUE = 2;

const AuthPage = () => {
  ///
  const classes = useStyle();

  function showPassword() {
    let x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else x.type = "password";
  }

  const [tab, setTab] = useState(LOGIN_TAB_VALUE);

  //--------------------login state
  const [usernameLogin, setusernameLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  //-------------------register state
  const [fullNameRegister, setFullNameRegister] = useState();
  const [usernameRegister, setusernameRegister] = useState();
  const [passwordRegister, setPasswordRegister] = useState();
  const [confPasswordRegister, setConfPasswordRegister] = useState();

  const handleChange = (e, newValue) => {
    setTab(newValue);
  };

  //check kardan Login
  const validateLogin = (user) => {
    if (!user.username) return "باید نام کاربری وارد کنید";
    if (!user.password) return "باید رمز عبور وارد کنید";
  };

  //check kardan register
  const validateRegister = (user) => {
    if (!user.name) return "باید نام خود وارد کنید";
    if (!user.username) return "باید نام کاربری وارد کنید";
    if (!user.password) return "باید رمز عبور وارد کنید";
    if (user.password !== user.confPasswordREgister)
      return "رمز ها باید مشابه یکدیگر باشند";
  };

  const handleRegister = () => {
    const user = {
      name: fullNameRegister,
      username: usernameRegister,
      password: passwordRegister,
      confPasswordREgister: confPasswordRegister,
    };

    const registerEror = validateRegister(user);
    if (registerEror) return toast.warn(registerEror);
    user.confPasswordREgister = undefined; //chon jozve parametr haye POSTMAN (backEnd) nistesh
    registerApi(user, (isOk, data) => {
      if (!isOk) return toast.error(data);
      toast.success("شما با موفیقت ثبت نام کردید");
      localStorage.setItem("name", data.name);
      localStorage.setItem("iamge", data.image);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      window.location.reload();
    });
  };

  const handleLogin = () => {
    const user = {
      username: usernameLogin, //az server migirim
      password: passwordLogin, //az server migirim
    };

    const loginError = validateLogin(user);
    // if (error) return alert(error);
    if (loginError) return toast.dark(loginError);
    loginApi(user, (isOk, data) => {
      if (!isOk) return toast.error(data);
      toast.success("شما با موفیقیت وارد شدید");
      localStorage.setItem("name", data.name);
      localStorage.setItem("iamge", data.image);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      window.location.reload();
    });
  };

  return (
    <Paper className={classes.container}>
      <Typography className={classes.headerText}>
        خوش آمدید به توییتر ما
      </Typography>
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab className={classes.tab} label="ورود" value={LOGIN_TAB_VALUE} />
        <Tab
          className={classes.tab}
          label="ثبت نام"
          value={REGISTER_TAB_VALUE}
        />
      </Tabs>
      {/* //1 noe sakhtar sharti */}
      {tab === LOGIN_TAB_VALUE && (
        <div className={classes.containerInput}>
          <Typography>نام کاربری</Typography>
          <input
            className={"uni_mb_small"}
            value={usernameLogin}
            onChange={(e) => setusernameLogin(e.target.value)}
          />
          <Typography>رمز عبور</Typography>
          <input
            type={"password"}
            id="passwordInput"
            className={"uni_mb_small"}
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
         <div style={{display:"flex" , flex:1 , alignItems:"center"}}>

          <input type={"checkbox"} onClick={showPassword} />
          <span style={{marginRight:"0.5rem"}} >نمایش رمز</span>
         </div>
          <br />
          <br />
          <Button
            variant={"contained"}
            color="primary"
            className={classes.tabBtn}
            onClick={handleLogin}
          >
            ورود
          </Button>
        </div>
      )}
      {tab === REGISTER_TAB_VALUE && (
        <div className={classes.containerInput}>
          <Typography>نام کامل</Typography>
          <input
            className={"uni_mb_small"}
            value={fullNameRegister}
            onChange={(e) => setFullNameRegister(e.target.value)}
          />
          <Typography>نام کاربری</Typography>
          <input
            className={"uni_mb_small"}
            value={usernameRegister}
            onChange={(e) => setusernameRegister(e.target.value)}
          />
          <Typography>رمز عبور</Typography>
          <input
            className={"uni_mb_small"}
            value={passwordRegister}
            onChange={(e) => setPasswordRegister(e.target.value)}
          />
          <Typography>تکرار رمز عبور</Typography>
          <input
            className={"uni_mb_small"}
            value={confPasswordRegister}
            onChange={(e) => setConfPasswordRegister(e.target.value)}
          />
          <Button
            variant={"contained"}
            color="primary"
            className={classes.tabBtn}
            onClick={handleRegister}
          >
            ثبت نام
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default AuthPage;
