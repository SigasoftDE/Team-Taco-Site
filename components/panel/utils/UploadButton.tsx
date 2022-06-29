import { faEye, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";

let inputField:HTMLInputElement | undefined | null = undefined;

const UploadButton = (props:{ title:string, callback?:(file:string) => void }) => {
    const router = useRouter();

    const fileSelected = (event:ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0);
        if (file) {
            const size = file.size / 1024 ** 2;
            if (size > 10) {
                Swal.fire("Datei zu groß", "Die Datei ist zu groß. Bitte wähle eine Datei kleiner 10 MB.", "error");
                return;
            }
            
            if (file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg" && file.type !== "image/svg") { 
                Swal.fire("Datei ungültig", "Bitte wähle eine Datei mit der Endung .png oder .jpeg", "error");
                return;
            }
            uploadFile(file);
        }
    }

    const uploadFile = async (file:File) => {
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("files", file, file.name);

        const res = await axios.post("/api/panel/protect/upload", formData, { withCredentials: true });

        if (props.callback) {
            props.callback(file.name);
        }

        if (res.data.success) {
            Swal.fire({ title: "Erfolgreich", text: "Datei wurde hochgeladen", icon: "success", timer: 1000, });
        } else {
            console.log("Failed upload: ", res.data);
            Swal.fire({ title: "Fehler", text: "Datei konnte nicht hochgeladen werden", icon: "error", timer: 1000, });
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
        router.reload();
    }

    return <div>
        <input style={{display: "none"}} ref={input => inputField = input} type="file" onChange={e => fileSelected(e)} />
        <div onClick={e => inputField?.click()} className="btn btn-outline-light mx-2" ><FontAwesomeIcon icon={faFile} height={16} style={{transform: "translateY(-2px)", margin: "0 5px"}}/> {props.title ? props.title : "Auswählen"}</div>
    </div>
}

export default UploadButton;