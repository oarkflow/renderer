import {WebRenderer} from "@orgwarec/render-config";
import {useEffect, useState} from "react";
import {NotFound} from "@/components/NotFound.tsx";
import {Loading} from "@/components/Loading.tsx";

export default function WebBuilder() {
    const [data, setData] = useState<Record<string, any> | null>();
    const [timedOut, setTimedOut] = useState(false);
    
    // Load data from localStorage once
    useEffect(() => {
        const possibleData = localStorage.getItem('json_data');
        if (possibleData) {
            try {
                setData(JSON.parse(possibleData));
            } catch {
                // Malformed JSON
                setData(null);
            }
        }
    }, []);
    
    // Start timeout to switch to 404 if data isn't loaded in time
    useEffect(() => {
        const timer = setTimeout(() => setTimedOut(true), 5000); // 5 seconds
        return () => clearTimeout(timer);
    }, []);
    
    if (data) {
        return <WebRenderer data={data} />;
    }
    
    if (timedOut) {
        return <NotFound />;
    }
    
    return <Loading />;
}