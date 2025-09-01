import clsx from "clsx";

export const Container = ({ children, className }) => {
  return (
    <div className={clsx("max-w-[1470px] mx-auto px-[20px]", className)}>{children}</div>
  );
};
