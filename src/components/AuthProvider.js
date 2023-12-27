'use client'

import {SessionProvider} from 'next-auth/react'
import { Children } from 'react'

const AuthProvider= ({children,session})=>{
    return(
        <div>
            <SessionProvider session={session}>
                {Children}
            </SessionProvider>
        </div>
    )
}