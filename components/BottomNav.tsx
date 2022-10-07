import { FunctionComponent, ReactElement } from "react";
import style from '../styles/bottomNav.module.scss';

interface BottomNavProps {
    
}
 
const BottomNav: FunctionComponent<BottomNavProps> = ():ReactElement => {
    return ( 
        <div className={style.container}>
            <div className={style.box}></div>
        </div>
     );
}
 
export default BottomNav;