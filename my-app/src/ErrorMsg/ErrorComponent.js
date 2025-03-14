export default function ErrorComponent( {isvisable}) {
    if (isvisable){
        return (
          <div style={{width:"100vw",height:"100vh", backgroundColor:"#00000063", position:"absolute"}}>
             <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%", borderRadius:"10px",color : "red",backgroundColor:"#0000006b",padding:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, .5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} >
                <h2>your input form is not valid</h2>
            </div>
          </div> 
        )
    }else{
        return null
    }
}