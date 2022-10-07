import { FunctionComponent, ReactElement, ReactNode } from "react";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
    return (
        <>
            <Navbar />
            {children}
            <BottomNav />
        </>
    );
}

export default Layout;