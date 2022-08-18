import Navbar from "./Navbar"
import Footer from "./Footer"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Navbar/>
            <main className="mb-auto w-3/5 mx-auto pt-4 pb-8">{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout