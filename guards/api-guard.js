import { routesGuard } from "./routes-guard";
import splitPath from "src/utils/splitPath";

const addRoute = (route, path, guards)=>{
  if (typeof guards === "function") {
    guards = [guards];
  }
  if (!guards.length) {
    guards = [()=> true];
  }
  if (!Array.isArray(guards)) {
    throw new Error('The guards just can be an Array or one function');
  }
  let children = {}
  if(path === "/") children = route["/"].children;
  route[path] = {
      guards,
      children,
    };
}

export const addGuard = (path = "", guards = [])=>{
  if(path === "/") return addRoute(routesGuard, "/", guards);
  const paths = splitPath(path).filter(el => !!el);
  let i = paths.length;
  if (paths.length !== 0 && paths[0] !== '/') paths.unshift("/");
    try {
      let route = routesGuard[paths[0]];
      while(i !== 0){
        paths.shift();
        const nextPath = paths[0];
          if (!route?.children[nextPath]) {
            if (i === 1) {
              addRoute(route.children, nextPath, guards);
            }else{
              addRoute(route.children, nextPath, []);
            }
          }
        route = route.children[nextPath];
        --i;
      }
    } catch (error) {
      console.log(error);
    }
}
