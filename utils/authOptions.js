import connectDB from '@/config/database';
import User from '@/models/User';

import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful authentication
    async signIn({ profile }) {
      // 1. Connect to the database
      await connectDB();
      // 2. See if the user already exists
      const userExists = await User.findOne({ email: profile.email });
      // 3. If not, create a new user in the database
      // 4. Return true to signify that we've created the user
    },
    // Modifies the session object
    async session({ session }) {
      // 1. Get the currently logged in user from the database
      // 2. Assign the user id to the session
      // 3.return session;
    },  
  },
};
