import type { ReactNode } from 'react'
import Navbar from './Navbar'

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar></Navbar>
            {/* Nội dung trang */}
            {children}
            <p>Đây là footer</p>
        </>
    )
}

export default Layout