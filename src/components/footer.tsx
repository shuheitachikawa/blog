import type { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <footer>
      <div className="max-w-layout mx-auto border-t border-sub text-center py-8">
        <small className="text-lightBlue">&copy; 2021 bubekiti.com</small>
      </div>
    </footer>
  );
};
