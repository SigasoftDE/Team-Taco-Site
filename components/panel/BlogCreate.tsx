import axios from "axios";
import { NextPage } from "next";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

import styles from "../../styles/components/panel/BlogDashboard.module.css";
import { myAccountContext } from "./AccountContext";

const BlogCreate : NextPage = () => {
    const [visibility, setVisibility] = useState<"published" | "draft" | "removed" | "hidden">("draft");
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    const ctx = useContext(myAccountContext);
    const created = new Date();

    return <div className="w-100">
        <h3 className="text-center" >Blog Artikel</h3>
        <form>
            <div className={styles.txtField}>
                <input onChange={e => {setTitle(e.currentTarget.value)}} type="text" required/>
                <label>Titel</label>
            </div>

            <div className="d-flex">
                <div className={styles.txtField}>
                    <textarea onChange={e => setBody(e.currentTarget.value)} className={`${styles.blogBodyArea} mb-1`} ></textarea>
                    <label>Inhalt</label>
                </div>

                <div className={`${styles.lightBg} w-25 mx-4`}>
                    <h6>Autor: {ctx?.username}</h6>
                    <h6>Datum: {created.getDate() + "." + created.getMonth() + "." + created.getFullYear()}</h6>
                    <h6>Sichtbarkeit: {visibilityToString(visibility)}</h6>

                    <div className="dropdown my-3">
                        <button className="btn btn-outline-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Sichtbarkeit
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><div onClick={e => setVisibility("draft")} className="dropdown-item active" >Entwurf</div></li>
                            <li><div onClick={e => setVisibility("published")} className="dropdown-item" >Öffentlich</div></li>
                            <li><div onClick={e => setVisibility("hidden")} className="dropdown-item" >Versteckt</div></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><div onClick={e => setVisibility("removed")} className="dropdown-item" >Entfernt</div></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div onClick={e => saveArticle(title, body, visibility)} className="btn btn-outline-success" >Artikel Speichern</div>
        </form>
    </div>;
}   

const saveArticle = async (title: string, body: string, visibility: "published" | "draft" | "removed" | "hidden") => {
    const article = { order: "create", title, body, visibility };

    const response = await axios.post("api/panel/protect/blog", article, {withCredentials: true});
    if (response.data.success) {
        Swal.fire({ title: "Erfolgreich", text: "Artikel wurde erstellt", icon: "success", timer: 1000, showCloseButton: false });
    } else {
        Swal.fire({ title: "Fehler", text: "Artikel konnte nicht erstellt werden", icon: "error", timer: 1000, showCloseButton: false });
    }
}

const visibilityToString = (visibility: "published" | "draft" | "removed" | "hidden") => {
    switch(visibility) {
        case "published":
            return "Öffentlich";
        case "draft":
            return "Entwurf";
        case "removed":
            return "Entfernt";
        case "hidden":
            return "Versteckt";
    }
}

export default BlogCreate;