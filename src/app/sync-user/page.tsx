import { auth, clerkClient, EmailAddress } from '@clerk/nextjs/server'
import { notFound, redirect } from 'next/navigation';
import { db } from '@/server/db';
import React from 'react'

const SyncUser = async () => {
 const {userId }= await auth();
 if(!userId){
    throw new Error("User not found")
 }

 const client = await clerkClient();

 const user= await client.users.getUser(userId);

 if (!user.emailAddresses || !user.emailAddresses[0]?.emailAddress) {
    return notFound()
 }
  
await db.user.upsert({
    where: {
        email: user.emailAddresses[0].emailAddress
    },
    update: {
        imageUrl: user.imageUrl,
        firstName: user.firstName,
        lastName: user.lastName,
    },
    create: {
        id: userId,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0]?.emailAddress ?? ""
    }
})

return redirect ('/dashboard')
  
}

export default SyncUser
 