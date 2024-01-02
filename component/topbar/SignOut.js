"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function SignOut({user}) {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <>
          <ul className="d-flex flex-wrap gap-2">
            <li>
              <Link href={`/profile`}  className="text-white d-flex gap-2 align-items-center">
                <i className="fa fa-user" aria-hidden="true"></i>
                {user?.name}
              </Link>
            </li>
            <li>
              <button
                onClick={() => signOut()}
                className="text-sm btn btn-warning"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </>
      ) : (
        <ul className="d-flex flex-wrap">
          <li>
            <Link href="sign-in">login</Link>
          </li>
          <li>
            <Link href="sign-up">Register</Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default SignOut;
