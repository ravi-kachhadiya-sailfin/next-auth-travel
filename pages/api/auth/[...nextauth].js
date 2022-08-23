import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = await client.db().collection('users');

        const user = await usersCollection.findOne({ email: credentials.email })

        if (!user) {
          client.close();
          throw new Error("User not found");
        }

        const isValid = await verifyPassword(credentials.password, user.password)


        if (!isValid) {
          client.close();
          throw new Error("Invalid credentials");
        }

        client.close();
        return { email: user.email }
      }
    })
  ],
  secret: process.env.NEXT_PUBLIC_SECRET
});