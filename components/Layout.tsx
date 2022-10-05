import { FunctionComponent, ReactElement, ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default Layout;