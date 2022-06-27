import axios from "axios";
import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Account from "../../utils/backend/panel/Account";
import { myAccountContext } from "./AccountContext";

import styles from "../../styles/components/panel/BlogDashboard.module.css";
import Swal from "sweetalert2";

let lastFetch:number = -1;

const Users : NextPage = () => {
    const [users, setUsers] = useState<Account[]>();
    const ctx = useContext(myAccountContext);

    const updateUsers = async () => {
        if (lastFetch + 1000 > Date.now()) {
            return;
        }
        lastFetch = Date.now();

        axios.post("/api/panel/protect/users", {
            order: "fetchAll"
        }, {withCredentials: true})
        .then(res => {
            if (res.data.success) {
                setUsers(res.data.response);
            }
        });
    }

    useEffect(() => {
        updateUsers();
    })
    
    return <div className={`${styles.topicPane}`}>
        <h1 className="text-center">Registrierte Accounts</h1>
        
        <div className="d-flex justify-content-center">
            <div onClick={createAccount} className={`btn btn-success my-3`}>Neuen Account erstellen</div>    
        </div>

        

        { (users && Object.entries(users!).length !== 0) ? users.map((user:Account, index) => {
            return <div key={`account-${index}`} className={styles.userBox}>
                <h3>{user.username}</h3>
                <div className={styles.userSettings}> 
                    <p>Administrator: {user.administrator ? "Ja" : "Nein"}</p>

                    
                </div>
                { ctx?.administrator ? 
                    <div className={styles.userOptions}>
                        <div onClick={e => toggleAdminsitration(user)} className={`btn-sm btn-primary btn ${styles.userButton}`}>Toggle Administration</div>
                        <div onClick={e => deleteAccount(user)} className={`btn-sm btn-danger btn ${styles.userButton}`}>Account Löschen</div>
                    </div> : null }
                

            </div>
        }) 
        : 
        (<div></div>) }
    </div>;
}

const createAccount = async () => {
    const res = await Swal.fire({
        title: "Account erstellen",
        html: `<input type="text" id="username" class="swal-input my-1 p-2" placeholder="Benutzername">
        <input type="password" id="password" class="swal-input my-1 p-2" placeholder="Passwort"> <br/>
        <input type="checkbox" class="swal-input my-1" value="" id="administrator">
                <label class="swal-input" for="administrator">
                    Administrator
                </label>`,
        confirmButtonText: "Erstellen",
        focusConfirm: true,
        preConfirm: () => {
            const username = (Swal.getPopup()?.querySelector("#username") as any).value;
            const password = (Swal.getPopup()?.querySelector("#password") as any).value;
            const administrator = (Swal.getPopup()?.querySelector("#administrator") as any).checked;

            if (!username || !password) {
                Swal.showValidationMessage("Bitte füllen Sie alle Felder aus.");
            }

            return { username, password, administrator };
        }
    });

    if (res.isConfirmed) { 
        const { username, password, administrator } = res.value!;
        const response = await axios.post("/api/panel/protect/users", {
            order: "create",
            username,
            password,
            administrator
        }, {withCredentials: true});

        if (response.data.success) {
            Swal.fire({
                title: "Erfolgreich",
                text: "Account erstellt",
                icon: "success",
                timer: 1000,
                showCloseButton: false,
                showConfirmButton: false,
            });
        }
    }
}

const toggleAdminsitration = async (user:Account) => {
    const res = await axios.post("/api/panel/protect/users", {
        order: "toggleAdmin",
        id: user._id
    }, {withCredentials: true});

    if (res.data.success) {
        Swal.fire({
            title: "Administratorstatus geändert",
            text: "Der Administratorstatus wurde erfolgreich geändert.",
            showConfirmButton: false,
            timer: 1000
        });
    }
}

const deleteAccount = async (user:Account) => {
    const confirmation = await Swal.fire({
        title: "Bist du sicher?",
        text: "Dieser Vorgang kann nicht rückgängig gemacht werden.",
        icon: "warning",
        showCancelButton: true,
        showConfirmButton: true,
        showLoaderOnConfirm: true,
    });

    console.log(user._id);

    if (confirmation.value) {
        const res = await axios.post("/api/panel/protect/users", {
            order: "deleteAccount",
            id: user._id
        }, {withCredentials: true});

        if (res.data.success) {
            Swal.fire({
                title: "Account gelöscht",
                text: "Der Account wurde erfolgreich gelöscht.",
                icon: "success",
                showConfirmButton: false,
                timer: 1000
            });
        }
    }
}

export default Users;