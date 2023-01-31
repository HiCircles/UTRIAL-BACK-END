import { Outlet } from "react-router-dom";

const Layout = () => (
    <main className="my-5 py-5">
        <Container className="px-0">
            <div>
                <h1>Welcome to {process.env.APP_NAME}</h1>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </Container>
    </main>
);

export default Layout;