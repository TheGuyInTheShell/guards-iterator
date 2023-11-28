import { addGuard } from "./api-guard";
import guard from "./iterator-guard";
import { requireLogin, isRole } from "./guards";

addGuard("/", [requireLogin(false, "/app")]);

addGuard("/app", [requireLogin(true, "/"), isRole(["admin"], "/app")]);

export { guard };
