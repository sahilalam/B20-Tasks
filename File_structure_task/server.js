const express=require('express');
const app=express();

app.use(express.static('./media'));
const fs=require('fs');

app.get("/",(req,res)=>{
    fs.readdir(".",{withFileTypes:true},(err,data)=>{
        if(err) throw err;
        let result="<h3>Current Directory</h3><table><tr> <td><b> Name </b></td> <td><b> Type </b></td> <td><b> Size </b></td> </tr>";
        for(let i=0;i<data.length;i++)
        {
            let tmp="<tr><td>";  
                    
            if(data[i].isFile())
            {
                let type="";   
                let d=fs.statSync("./"+data[i].name);
                let arr=data[i].name.split('.');
                if(arr[1]=='js')
                {
                    type="JavaScript";
                }
                else if(arr[1]=='json')
                {
                    type="Json"
                }
                tmp+=`<img src="./File.png" height="20" width="20">${data[i].name}  </td><td>${type} file</td><td>${(d.size/1024).toFixed(2)} kb</td></tr>`;
            }
            else
            {
                tmp+=`<img src="./Directory.png" height="20" width="20"> ${data[i].name}</td><td>Folder</td></tr>`;
            }
            
            result+=tmp;
        }
        result+="</table>";
        res.send(result);
    })
})

app.listen(3000,()=>{
    console.log("Server Started");
})