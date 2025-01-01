import { useContext } from "react";
import { ThemeProvider } from "../FunctionalComponents/UseContext";

var StudentResults = () => {
    var result = useContext(ThemeProvider);
    return(
        <section>
            <h3>The result is {result.cgpa} and the GPA is {result.sgpa}</h3>
        </section>
    )
}
export default StudentResults;