import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="h-[80vh] w-full flex flex-col justify-center items-center">
      <div className="text-center bg-white py-8 px-10 rounded-xl">
        <h1 className="text-2xl text-center mb-5">User Profile</h1>
        <div className="mx-auto w-full rounded-full">
          <Image
            src={session?.user?.image}
            alt=""
            height={100}
            width={100}
            className="mx-auto rounded-full border"
          />
        </div>
        <h3 className="text-xl">{session?.user?.name}</h3>
        <h3 className="text-xl">{session?.user?.email}</h3>
      </div>
    </div>
  );
};

export default Profile;
