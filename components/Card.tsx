import clsx from "clsx";

// type card = { [key: string]: any };

const Card = ({ className, children }: any) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
