import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  return (
    <div className="w-[100%] h-[79vh] flex flex-col justify-center items-center">
      <h1 className="text-xl">Not signed in ?</h1>
      <div>
        <button
          className="bg-sky-500 px-28 mt-2 text-white rounded-lg py-2"
          onClick={() =>
            signIn("google", {
              callbackUrl: "https://vercel.com/sanyfaysal/pc-builder-frontend/",
            })
          }
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
