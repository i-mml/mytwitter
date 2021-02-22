import React from "react";
import Layout from "./layout/Layout.js";
import Home from "./pages/home/Home.js";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PostsDeatails from "./../PostsDetails.js";
import P404 from "./pages/404/404.js";
import TweetsByHashTags from "./pages/tweetsByHashtags/tweetsByHashtags.js";
import TweetsByUser from "./pages/tweetsByUser/tweetsByUser.js";
import AuthPage from "./pages/auth/authpage.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TweetProvider } from "../context/TweetContext.js";


const App = () => {
  return (
    <div>
      {/* <Layout/> */}

      {/* baraye inke nemotonestim link bedim biron az Route ino pak mikonam*/}
      {/* <Layout>
        <BrowserRouter>
          <Switch>
            {/* <Route path={"/posts/:myId"} component={PostsDeatails} /> */}

      {/* <Route exact path={"/"} component={Home} />
            <Route component={P404} />
          </Switch>
        </BrowserRouter>
      </Layout> */}

      <>
        <BrowserRouter>
          <Switch>
            <PublicRoute path={"/login"} component={AuthPage} /> ///
            <PrivateRoute
              path={"/"}
              render={() => (
                <TweetProvider>
                  <Layout>
                    <Switch>
                      {/* <Route path={"/posts/:myId"} component={PostsDeatails} /> */}

                      <Route exact path={"/"} component={Home} />

                      <Route
                        exact
                        path={"/hashtags/:hashtag"}
                        component={TweetsByHashTags}
                      />
                      {/* <Route
                        exact
                        path={"/user/:users"}
                        component={TweetsByUser}
                      /> */}
                      <Route
                        exact
                        path={"/user/:id/:name"}
                        component={TweetsByUser}
                      />
                      <Route component={P404} />
                    </Switch>
                  </Layout>
                </TweetProvider>
              )}
            />
            );
          </Switch>
        </BrowserRouter>
        <ToastContainer />
      </>
    </div>
  );
};

// baraye check kardan inke LOGIN hast ya na
//   " !! "  baraye ine ke meqdare bolian bashe , yani meqdar dashte bashe "true" , nadashte bashe "false"
const isLogin = () => !!localStorage.getItem("x-auth-token");

// PublicRoute = (props) => { return <Route {...props} render={()=>{}}></Route>};
const PublicRoute = ({ component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin())
          //  Redirect baraye ine ke agar USER ye ROute ro farakhoni kard , ma befrestimesh ye Route dige
          return <Redirect to={"/"} />;
        else {
          return React.createElement(component, props);
        }
      }}
    />
  );
};

// PrivateRoute = ({ component, ...props }) => {
//   return (
//     <Route
//       {...props}
//       render={(props) => {
//         if (isLogin()) return React.createElement(component, props);
//         else return <Redirect to={"/login"} />;
//       }}
//     />
//   );
// };

const PrivateRoute = ({ render, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) return render(props);
        else return <Redirect to={"/login"} />;
      }}
    />
  );
};

export default App;
