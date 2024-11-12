"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main className="m-5 flex-row items-center justify-center ">
      <header>
        <h1 className=" text-3xl text-center">Week-9</h1>
      </header>
      {user ? (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 justify-center bg-slate-900">
          <p>Welcome</p>
          <p>{user.displayName} click on the link to view your shopping list</p>
          <div>
            <Link
              href="week-9/shopping-list"
              className=" text-blue-600 underline"
            >
              Shopping List
            </Link>
          </div>

          <button
            className="text-lg text-white bg-blue-600 px-2 py-1 mt-4"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <button
            className="text-lg text-white bg-blue-600 px-2 py-1 mt-4"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        </div>
      )}
    </main>
  );
}
