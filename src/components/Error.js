import { useRouteError } from "react-router-dom";

const Error = () => {
    const errorRes = useRouteError();
    console.log(errorRes);

    return (
        <div className="p-around">
            <h1>Oops!!!</h1>
            <span>Something went wrong</span>
            <div>
               {errorRes.status}: {errorRes.statusText} 
            </div>
        </div>
    );
};

export default Error;