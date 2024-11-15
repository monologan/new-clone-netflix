import { Input } from "postcss";

const Auth = () => {
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat  bg-center  bg-fixed bg-cover">
            <div className="bg-black w-full h-full sm:bg-opacity-70">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12" />
                </nav>

            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 sm:w-2/5 sm:max-w-md w-full">
                <h2 className="text-white text-4xl mb-8 font-semibold"> Sign in</h2>
                <div className="flex flex-col gap-4">
                    <Input />
                </div>
                </div>
            </div>    
            </div>
        </div>

    );
}

export default Auth;