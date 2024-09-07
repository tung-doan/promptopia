"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const PromptCard = ({ post, handlerTag, handlerEdit, handlerDelete }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [Copied, setCopied] = useState("");
  const handlerCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-4">
        <div className="flex justify-start items-center gap-3 cursor-pointer w-full">
          <Image
            src={post.creator.image}
            alt="picture"
            width={40}
            height={40}
            className="rounded-full object-contain"
          ></Image>
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handlerCopy}>
          <Image
            src={
              Copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={30}
            height={30}
          ></Image>
        </div>
      </div>
      <p className="font-satoshi text-gray-700 text-sm my-4 ">
        {post.prompt}
      </p>
      <p className="font-inter text-sm blue_gradient cursor-pointer " onClick={() => handlerTag && handlerTag(post.tag)}>#{post.tag}</p>

      {session?.user.id === post.creator._id && pathname === '/profile' && (
        <div className="flex-center border-gray-300 border-t pt-3 gap-4">
          <p className="font-inter text-sm green_gradient cursor-pointer mt-4" onClick={handlerEdit}>
            Edit
          </p>
          <p className="font-inter text-sm orange_gradient cursor-pointer mt-4" onClick={handlerDelete}>
            Delete
          </p>
        </div>
      )
      }
    </div>
  );
};

export default PromptCard;
