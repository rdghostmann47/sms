import SideNav from "../ui/dashboard/SideNav";


export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="">
        <SideNav />
      </div>

      <div className="ml-20 w-full ">
        {children}
      </div>
    </div>
  );
}