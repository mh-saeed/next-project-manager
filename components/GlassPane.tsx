import clsx from "clsx";

const GlassPane = ({ children, className }: any) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};
export default GlassPane;
