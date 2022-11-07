const config =(token)=>{

    return{headers: { Authorization: `Bearer ${token}`,}}
    
};
export const headers_upload_file =(token)=>{
    return{headers:{"Content-Type":"multipart/form-data",Authorization: `Bearer ${token}` }}
}
export default config