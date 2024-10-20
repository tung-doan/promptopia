"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
const Nav = () => {
  const [providers, setproviders] = useState(null);
  const [toggle, settoggle] = useState(false);
  useEffect(() => {
    const setupproviders = async () => {
      const response = await getProviders();

      setproviders(response);
    };
    setupproviders();
  }, []);

  const { data: session } = useSession();
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex flex-center gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" className=" outline_btn" onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user?.image}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  onClick={() => signIn(provider.id)}
                  type="button"
                  key={provider.name}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/*  Mobile View  */}

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user?.image}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => settoggle((prev) => !prev)}
            ></Image>
            {toggle && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  onClick={() => settoggle(false)}
                  className="dropdown_link"
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  onClick={() => settoggle(false)}
                  className="dropdown_link"
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="mt-5 black_btn w-full"
                  onClick={() => {
                    signOut();
                    settoggle(false);
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  onClick={() => signIn(provider.id)}
                  type="button"
                  key={provider.name}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
