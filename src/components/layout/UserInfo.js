"use client"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
export default function UserInfo(){
    const {data:session} = useSession();
    return(
            <div className="h-screen mt-20">
                    <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">

                    <table>
                            <thead className="text-center">
                                        <th>Ref Number</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>E Wallet Point</th>


                            </thead>

                            <tbody>
                                <tr >
                                    <td>0000</td>
                                    <td>{session?.user?.name}</td>
                                    <td>gfdf</td>
                                    <td>gfdf</td>
                                    
                                </tr>
                            </tbody>
                    </table>

                    </div>
            </div>

    )
}