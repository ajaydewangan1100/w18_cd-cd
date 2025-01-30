import { getServerSession } from "next-auth";
// Learning ci cd
import { redirect } from 'next/navigation'


import { authOptions } from "./lib/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
}
