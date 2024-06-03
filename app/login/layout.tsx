import LoginForm from "../ui/login-form";
export default function Layout({children}: {children: React.ReactNode} ){
    return (
        <div>
            <div> {children} </div>
            <div> <LoginForm/> </div>
        </div>
    );
}