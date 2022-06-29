import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/landing/Navbar";
import cookie from 'cookie';

import styles from '../../styles/components/blog/BlogPage.module.css';
import stylesDash from '../../styles/components/panel/BlogDashboard.module.css';
import AccountHandler from "../../utils/backend/panel/AccountHandler";
import BlogHandler from "../../utils/backend/blog/BlogHandler";
import BlogPost from "../../utils/backend/blog/BlogPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

import listStyles from '../../styles/components/blog/BlogListPage.module.css';
import { useContext, useEffect, useState } from "react";
import UploadButton from "../../components/panel/utils/UploadButton";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import { myAccountContext } from "../../components/panel/AccountContext";
import { visibilityToString } from "../../components/panel/utils/BlogCreate";

const BlogPage = (props:any) => {
    const router = useRouter();
    const { post, loggedIn } = props;

    const ctx = useContext(myAccountContext);

    const created = new Date(post ? post.createdAt : "");
    const [title, setTitle] = useState<string>(post ? post.title : "undefined");
    const [body, setBody] = useState<string>(post ? post.body + "" : "undefined");
    const [visibility, setVisibility] = useState<"published" | "draft" | "removed" | "hidden">(post ? post.visibility : "undefined");
    const [image, setImage] = useState<string>(post ? post.images : "undefined");
    const [editing, setEditing] = useState<boolean>(false);

    useEffect(() => {
        if (!post) {
            router.push("/404");
        }
    })

    if (!post) {
        return <div>
            404
        </div>
    }

    const updateImage = async (file:string) => {
        const res = await axios.post("/api/panel/protect/blog", {
            order: "updateImage",
            id: post._id,
            image: ctx?._id + "/" + file
        }, {withCredentials: true});

        if (!res.data.success) {
            Swal.fire("Fehler", "Bild konnte nicht gesetzt werden", "error");
        } else {
            setImage(file);
        }
    }

    const updatePost = async () => {
        const res = await axios.post("/api/panel/protect/blog", {
            order: "updatePost",
            title, body, visibility, id: post._id
        }, { withCredentials: true});

        if (!res.data.success) {
            Swal.fire("Fehler", "Post konnte nicht gesetzt werden", "error");
        } else {
            Swal.fire({title: "Erfolgreich", text: "Post wurde erfolgreich aktualisiert", icon: "success", timer: 1000});
            setEditing(false);
        }
    }

    return <div className="fullPageBg d-flex justify-content-center align-items-center" style={{ flexDirection: "column"}}>
        <Head>
            <title>Team taco. | Blog</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"  />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" async />
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' async /> 
        </Head>

        <Navbar />

        <div className={styles.topicPane} style={{ maxWidth: "1500px", width: "90%" }}>
            <form>
                {
                    editing ? <div className={stylesDash.txtField}>
                        <input onChange={e => {setTitle(e.currentTarget.value)}} value={title} type="text" required/>
                        <label>Titel</label>
                    </div> :
                    <h3>{title}</h3>
                }

                <div className="d-flex">
                    <p style={{ transform: "translateY(4px)"}}>{props.authorName} | {created.getDate() +  "." + created.getMonth() + "." + created.getFullYear()}</p>

                    {
                        editing ? <div className="dropdown mx-3">
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
                        </div> : null
                 }
                </div>
                
                { editing ? <p>Sichtbarkeit: {visibilityToString(visibility)}</p> : null}

                <div className="d-flex mt-3">
                    <FontAwesomeIcon className={listStyles.dashViewsIcon} icon={faEye}/>
                    <p className={`mx-2`}>{post.views}</p>
                </div>

                

                <div className="row">
                    {
                        editing ? <div className="col-xs-12 col-md-8">
                                <div style={{ width: "100%"}} className={stylesDash.txtField}>
                                    <textarea onChange={e => setBody(e.currentTarget.value)} value={body} className={`${stylesDash.blogBodyArea} mb-1`} ></textarea>
                                    <label>Inhalt</label>
                                </div>
                            </div> :
                            <p className="col-xs-12 col-md-8" dangerouslySetInnerHTML={{__html: body.replace(/\n/g, "<br />")}}></p>
                    }

                    <div className="col-xs-12 col-md-4 d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                        <img src={image === "taco-default" ? "/logo.svg" : "/user-uploads/" + image} style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "25px"}} alt="blogImage"  className="" />
                        { editing ? <div className="mt-3"><UploadButton title="Bild ändern" callback={updateImage}  /></div> : null }
                        
                    </div>
                    
                </div>

                <div className="d-flex">
                    { loggedIn ? <div onClick={e => setEditing(!editing)} className="btn btn-outline-light mx-2">Bearbeiten</div> : null }

                    { editing ? <>
                        <div onClick={updatePost} className="btn btn-outline-success mx-2">Änderungen speichern</div>
                        <div onClick={e => deletePost(post._id)} className="btn btn-outline-danger mx-2 ">Artikel Löschen</div>
                    </> : null }
                </div>
            </form>
        </div>
    </div>
}

export async function getServerSideProps(ctx:any) {
    const { id } = ctx.query;

    const cookies = cookie.parse(ctx.req.headers.cookie + "");
    const loggedIn = cookies.authorization != undefined && new AccountHandler().verifyCookie(cookies.authorization!);

    const bHandler = new BlogHandler();
    const post = await JSON.parse(JSON.stringify(await bHandler.fetchPost(id)));

    if (!post || (post.visibility !== "published" && !loggedIn)) {
        return { props: { loggedIn: false } };
    }

    const aHandler = new AccountHandler();
    const authorName = (await aHandler.getUserById(post.author))?.username;

    return { 
        props: { post, loggedIn, authorName: authorName ? authorName : "Gelöschter Account" }
    }
}



const deletePost = async (id:string) => {
    const selResponse = await Swal.fire({title: "Artikel löschen?", icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "Ja, löschen!"});
    if (!selResponse.isConfirmed) {
        return;
    }

    const response = await axios.post("/api/panel/protect/blog", { order: "delete", id: id }, {withCredentials: true});
    if (response.data.success) {
        Swal.fire({ title: "Artikel gelöscht", icon: "success", timer: 1000, showConfirmButton: false });
    } else {
        console.log(response);
        Swal.fire({ title: "Artikel konnte nicht gelöscht werden", icon: "error", timer: 1000, showConfirmButton: false });
    }

    window.location.href="/blog";
}

export default BlogPage;