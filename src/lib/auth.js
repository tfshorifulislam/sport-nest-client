import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB);
const db = client.db('sportNestUser');

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        },
    },
    
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 7 * 60,
            strategy: 'jwt'
        }
    },

    plugins: [
        jwt(),
    ],

    database: mongodbAdapter(db, {
        client
    }),
});