import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET() {
    // try {
    //     const prisma=new PrismaClient()  
    //     ///single user-data

    //     const newUser= await prisma.product_reivew.createMany({
    //         data:[{
            //  title: 'Great Product',
            //   rating: '5 stars',
            //   content: 'This product is fantastic!',
            //  prodcutId: 1
      
    //             


    //           },
    //           {
    // //             title: 'nice Product',
    //            rating: '3 stars',
    //            content: 'This product is nice Product',
    //           prodcutId: 2
    //             

    //           },{
    // //          title: 'bad Product',
    //            rating: '1 stars',
    //            content: 'This product is bad Product',
    //           prodcutId: 2
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
    
        const newUser= await prisma.product_reivew.findMany({
            
        })
         console.log("newUser",newUser);
         return NextResponse.json({status:'success', data:newUser})
    
        } catch (error) {
            return NextResponse.json({status:'fail',data:error})
        }

    

 //delte single  user 
    // try {
      
    //     const newUser= await prisma.product_reivew.delete({
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
//         const newUser= await prisma.product_reivew.update({
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

// const result = await prisma.product_review.aggregate({
//       _avg: { salary: true },
//       _count: { salary: true },
//       _max: { salary: true },
//       _min: { salary: true },
//       _sum: { salary: true },
// });



// ========Transactions & Rollback================



    //     const createUser = prisma.product_review.create({
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