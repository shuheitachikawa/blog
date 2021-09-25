import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  postId: string;
}

export const Share: React.FC<Props> = ({ postId }) => {
  return (
    <div className="my-10">
      <p className="text-center font-bold mb-2">SHARE</p>
      <div className="flex justify-center">
        <div className="mr-6">
          <a
            href={`https://twitter.com/intent/tweet?url=https://bubekiti.com/${postId}`}
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} width={32} />
          </a>
        </div>
        <div className="">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://bubekiti.com/${postId}`}
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} width={32} />
          </a>
        </div>
      </div>
    </div>
  );
};
