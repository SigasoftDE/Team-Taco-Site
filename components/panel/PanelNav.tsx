import axios from "axios";
import { NextPage } from "next"
import { useRouter } from "next/router";
import Swal from "sweetalert2";

import styles from "../../styles/components/panel/BlogDashboard.module.css";

type Props = {
    updateSelection: (selection:string) => void;
}

const PanelNav = (props:Props) => {
    const { updateSelection } = props;
    const router = useRouter();

    const logout = async () => {
        const res = await axios.get("/api/panel/logout", {withCredentials: true});
        if (res.data.success) {
            Swal.fire({
                title: "Logged out",
                text: "Du wurdest erfolgreich ausgeloggt.",
                showConfirmButton: false,
                timer: 1000
            });
            router.push("/");
        }
    }

    return (<div className={styles.panelNav}>
        <h1>Taco Dashboard</h1>
        <div className={styles.navItems}>
            <div onClick={e => updateSelection(e.currentTarget.innerHTML)} className={styles.navItem}>Dashboard</div>
            <div onClick={e => updateSelection(e.currentTarget.innerHTML)} className={styles.navItem}>Users</div>
            <div onClick={e => updateSelection(e.currentTarget.innerHTML)} className={styles.navItem}>Blog</div>
            <div onClick={e => updateSelection(e.currentTarget.innerHTML)} className={styles.navItem}>Profile</div>
            <div onClick={logout} className={`btn-danger ${styles.navItem}`}>Logout</div>
        </div>
    </div>)
}

export default PanelNav;