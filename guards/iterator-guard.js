import { routesGuard } from "src/guards/routes-guard"
import splitPath from "src/utils/splitPath"

const execGuards = function(route, to, from){
  const result = route.guards.find(guard => {
    return guard(to, from);
  })
  if (result) {
    return result(to, from);
  }
  return true;
}

function guard(to = {path: ""}, from){
  try {
    let route = routesGuard["/"];
    if(to.path === "/") return execGuards(route);
    const paths = splitPath(to.path);
    paths.shift();
    while(paths.length) {
      route = route?.children[paths.shift()];
      if (route) {
        const res = execGuards(route, to, from);
        if (res !== true) return res;
        if (!paths.length) return true;
      }else{
        return true;
      }
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}


export default guard;
