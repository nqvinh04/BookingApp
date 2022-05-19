import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
    const { data, loading, error } = useFetch(
        "/hotels/countByCity?cities=berlin,madrid,london"
    );

    return(
        <div className="featured">
            {loading?(
                "loading please wait"
            ):(

            )}
        </div>
    )
}