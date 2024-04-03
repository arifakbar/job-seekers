export default function ContainerCard({ children, className }) {
  return (
    <div
      className={`md:w-[60%] w-full bg-white dark:bg-[#1E1F22] p-6 shadow-md rounded-md ${className}`}
    >
      {children}
    </div>
  );
}
