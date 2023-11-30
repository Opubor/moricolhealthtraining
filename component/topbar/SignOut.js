"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";


function SignOut() {
  return (
    <button
    onClick={() => signOut()}
    className="text-sm bg-warning text-white"
  >
    Sign Out
  </button>  )
}

export default SignOut