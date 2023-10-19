import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET() {
    // try {
    //     const prisma=new PrismaClient()  
    //     ///single user-data

    //     const newUser= await prisma.product.createMany({
    //         data:[{

    //             mobile :'samsung',
    //             content:'model-12',
      
    //             


    //           },
    //           {
    //             mobile :'nokia',
    //             content:'nokia-12',
    //             

    //           },{
    //            mobile :'hawaei',
    //             content:'hawaei-12',
    //             , 

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
    
        const newUser= await prisma.product.findMany({
            
        })
         console.log("newUser",newUser);
         return NextResponse.json({status:'success', data:newUser})
    
        } catch (error) {
            return NextResponse.json({status:'fail',data:error})
        }

    

 //delte single  user 
    // try {
      
    //     const newUser= await prisma.product.delete({
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
//         const newUser= await prisma.product.update({
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


// ======Aggregate (avg,count,max,min,sum)======

// const result = await prisma.product.aggregate({
//       _avg: { salary: true },
//       _count: { salary: true },
//       _max: { salary: true },
//       _min: { salary: true },
//       _sum: { salary: true },
// });



// ========Transactions & Rollback================



    //     const createUser = prisma.product.create({
    //         data:{email:"john1.doe@example.com", password:"123"}
    //     })

    //     const deleteComment=prisma.Comment.delete({
    //         where:{id:5}
    //     })

    //     const result=await prisma.$transaction([createUser, deleteComment])

    //     console.log(result)
    // }
    // catch (e) {

    //     console.log(e)
    
    // }


}