import CardPage from "../components/CardPage";

export default function ListPage({comics}){
    return (
        <>
            <h1>Lista di card</h1>
            <div className="container-list">
                <div className="row">
                        <CardPage />
                </div>
            </div>
        </>

    )
}