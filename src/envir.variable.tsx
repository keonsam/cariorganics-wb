export interface Env {
    uri: string;
}
let env: Env;
if (process.env.NODE_ENV === "development") {
    env = {
        uri: "http://localhost:3000/graphql"
    }
}else {
    env = {
       uri: ""
    }
}

export default env;
