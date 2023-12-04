import Link from "next/link";
import React from "react";
interface Props {
  setError?: any;
}

function RegPrompter({ setError }: Props) {
  return (
    <div className="bg-danger text-white fixed bottom-16 left-0 z-50 w-44 h-16 rounded-tr-full rounded-br-full flex justify-center p-2 items-center gap-1">
      <Link
        href={"/sign-up"}
        className="text-white text-decoration-underline text-xs p-4 border-2 border-white w-full rounded-tr-full rounded-br-full"
      >
        Register/SignIn
      </Link>
    </div>
  );
}

export default RegPrompter;
