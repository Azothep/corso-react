import { createContext } from "react";

export interface ProvaContextType {
    count: number;
    setCount: (count: number) => void;
}

export const ProvaContext = createContext<ProvaContextType>({
    count: 0,
    setCount: () => {}
});