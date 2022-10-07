import { useEffect, useState } from "react";

export default function useResponsive() {
    function windowMatch() {
        if (typeof window !== "undefined") {
            return (window.matchMedia("(max-width: 768px)").matches);
        }
    }
    const [onMobile, setOnMobile] = useState<any>(windowMatch());
    useEffect(() => {
        // Set media query btw 0px and 768px
        if (typeof window !== "undefined") {
            window.matchMedia("(max-width: 768px)").addEventListener('change', e => {
                setOnMobile(e.matches);
            })
        }
    })
    // Return the state variable
    return onMobile;
}