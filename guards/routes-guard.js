export const routesGuard = {
    "/": {
      guards: [()=> null] /* return  null or string message*/,
      cb: (/*message, to, from*/)=> true /* or route string */,
      children: {}
    }
};
