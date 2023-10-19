import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST() {
    // try {
    //     const prisma=new PrismaClient()  
    //     ///single user-data

    //     const newUser= await prisma.order.createMany({
    //         data:[{
        // title: 'Order #12345',
        // token: 'ABCDEF123456',
        // subTotal: 100, // Example subTotal amount
        // tax: 10,      // Example tax amount
        // discount: 5,  // Example discount amount
        // grandTotal: 105, // Example grandTotal amount
        // firstName: 'John',
        // middleName: 'A',
        // lastName: 'Doe',
        // mobile: '123-456-7890',
        // email: 'john.doe@example.com',
        // city: 'New York',
        // country: 'USA',
        // userId: 1,
        
               


    //           },
    //           {
        // title: 'Order #125',
        // token: 'ABCEEE23456',
        // subTotal: 500, // Example subTotal amount
        // tax: 20,      // Example tax amount
        // discount: 4,  // Example discount amount
        // grandTotal: 200, // Example grandTotal amount
        // firstName: 'RASHED',
        // middleName: 'B',
        // lastName: 'CHY',
        // mobile: '34-56-7890',
        // email: 'RASHED.ras@example.com',
        // city: 'bangladesh',
        // country: 'bangladesh',
        // userId: 2,
        

    //           },{
    // title: 'Order #333',
        // token: 'KKEEE23456',
        // subTotal: 500, // Example subTotal amount
        // tax: 20,      // Example tax amount
        // discount: 4,  // Example discount amount
        // grandTotal: 200, // Example grandTotal amount
        // firstName: 'RASHED',
        // middleName: 'B',
        // lastName: 'CHY',
        // mobile: '34-56-7890',
        // email: 'RASHED.ras@example.com',
        // city: 'bangladesh',
        // country: 'bangladesh',
        // userId: 3,

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
    
        const newUser= await prisma.order.findMany({
            
        })
         console.log("newUser",newUser);
         return NextResponse.json({status:'success', data:newUser})
    
        } catch (error) {
            return NextResponse.json({status:'fail',data:error})
        }

    

 //delte single  user 
    // try {
      
    //     const newUser= await prisma.order.delete({
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
//         const newUser= await prisma.order.update({
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

// const result = await prisma.Employee.aggregate({
//       _avg: { salary: true },
//       _count: { salary: true },
//       _max: { salary: true },
//       _min: { salary: true },
//       _sum: { salary: true },
// });



// ========Transactions & Rollback================



    //     const createUser = prisma.User.create({
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