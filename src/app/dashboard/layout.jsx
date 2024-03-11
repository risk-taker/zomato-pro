import LeftSide from "./leftSide/page";
import RightSide from "./rightSide/page";

export default function DashboardLayout({ children }) {
  return (
    <section>
        <LeftSide />
        {children}
        <RightSide />
    </section>
  );
}
