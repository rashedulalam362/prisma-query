import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET() {
    // try {
    //     const prisma=new PrismaClient()  
    //     ///single user-data

    //     const newUser= await prisma.user.createMany({
    //         data:[{

    //             firstName :'rashed',
    //             middleName:'alam',
    //             lastName:'chy',
    //             mobile:'111111',
    //             email :'rashed@gamil.com',
    //             passwordHash:'###3',


    //           },
    //           {
    //             firstName :'jahed',
    //             middleName:'alam',
    //             lastName:'chy',
    //             mobile:'111111',
    //             email :'jahed@gamil.com',
    //             passwordHash:'###3',

    //           },{
    //             firstName :'sharip',
    //             middleName:'alam',
    //             lastName:'chy',
    //             mobile:'111111',
    //             email :'jahed@gamil.com',
    //             passwordHash:'###3', 

    //           }]
    //     })
    //      console.log("newUser");
    //      return NextResponse.json({status:'success',data:newUser})

    //     } catch (error) {
    //         return NextResponse.json({status:'fail',data:error})

    //   }


     // Read All Data

     const prisma = new PrismaClient()
     try {
    
        const newUser= await prisma.user.findMany({
            
        })
         console.log("newUser",newUser);
         return NextResponse.json({status:'success', data:newUser})
    
        } catch (error) {
            return NextResponse.json({status:'fail',data:error})
        }

    

 //delte single  user 
    // try {
      
    //     const newUser= await prisma.user.delete({
    //         where:{
    //          id:2,
    //         }
          
    //     })
    //     console.log("deletedUser: ", newUser);
    //      return NextResponse.json({status:'success',data:newUser})
    
    //     } catch (error) {
    //         return NextResponse.json({status:'fail',data:error})
    //     } 


//   //update user 
//      try {
//         const prisma=new PrismaClient()    
//         const newUser= await prisma.user.update({
//             where:{id:2},
//            data:{
//             firstName:'rashed',
//             lastName:'hasan',
//             middleName:'chy',
//             mobile:'122344'
//            }
//         })
//          console.log("newUser");
//          return NextResponse.json({status:'success',data:newUser})
    
//         } catch (error) {
//             return NextResponse.json({status:'fail',data:error})
//         }



}