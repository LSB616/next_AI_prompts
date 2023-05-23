"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from '@components/Profile';

const MyProfile = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);

    console.log(session.user.id, '<<< session')

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    useEffect(() => {
        const fecthPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`)
          const data = await response.json();
          setPosts(data);
        }
        if (session?.user.id) fecthPosts();
      }, [session?.user.id])


  return (
    <Profile 
        name="My"
        desc="Welcome to your personalized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile