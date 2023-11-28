// import { useUserStore } from "src/stores/user";

export const requireLogin = (require = false, newPath = "")=> (to, from)=>{
    // const userStore = useUserStore();
    // return !!userStore.GetToken() === require ? true : newPath;
    return true;
}


export const isRole = (roles = [], newPath = "")=> (to, from)=>{
  // const userStore = useUserStore();
  // const user = userStore.GetUser();
  // const currentRole = user?.roleExternal;
  // return roles.includes(currentRole)  ? true : newPath;
  return true;
}
