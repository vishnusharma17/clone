import NextAuth, { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [],
  secret: process.env.NEXTAUTH_SECRET || 'secret',
  session: {
    strategy: 'jwt',
  },
};

export const handler = NextAuth(authOptions);
