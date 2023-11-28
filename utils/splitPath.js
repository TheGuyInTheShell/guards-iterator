const splitPath = (path = "")=> path.replaceAll("/", "#/").split("#")

export default splitPath
