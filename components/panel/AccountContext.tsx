import axios from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import Account from "../../utils/backend/panel/Account";

export const myAccountContext = createContext<Account | null>(null);
export default function AccountContext(props:PropsWithChildren<any>) {
 
    const [user, setUser] = useState<Account | null>(null);
    useEffect(() => {
        axios.get("/api/panel/user").then(res => {
            if (res.data.success) {
                setUser(res.data.user);
            }
        });
    }, []);

    return (<div>
        <myAccountContext.Provider value={user}>
            {props.children}
        </myAccountContext.Provider>
    </div>);

}