import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Products from "./routes/Products";

// const App = () => <div>Hello dva</div>;
// const SimpleRouter = () => <App />;
// export default SimpleRouter;

/**
 * app 路由配置
 * @param {*} param0
 * @returns
 */
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
