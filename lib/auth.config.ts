import { NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

const authConfig: NextAuthOptions = {
    providers:[
        GitHub({
            clientId:process.env.AUTH_GITHUB_ID!,
            clientSecret:process.env.AUTH_GITHUB_SECRET!
        }),
        Google({
            clientId:process.env.AUTH_GOOGLE_ID!,
            clientSecret:process.env.AUTH_GOOGLE_SECRET!,
        })
    ]
}

export default authConfig;