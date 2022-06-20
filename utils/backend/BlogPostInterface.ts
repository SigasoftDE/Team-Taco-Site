export default interface BlogInterface {
    createdAt: Date
    updatedAt: Date
    _id:string

    state: "published" | "draft" | "removed"
    title:string
    body:string
    images:string[]
    author:string
    views:number
}