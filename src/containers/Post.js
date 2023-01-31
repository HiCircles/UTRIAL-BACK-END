import React, { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "reactstrap";

const Post = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(
            "https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text"
        ).then((response) => setPost(response.data))
    }, []);

    return (
        <>
            {post && (
                <div className="position-relative">
                    <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
                        Editors Pick
                        <Badge pill
                            color="success"
                            className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle"
                            style={{ fontSize: "0.75rem"}}>New</Badge>
                    </span>

                    <span className="d-block pb-4 h2 text-dark border-bottom border-gray">Join crdr</span>

                    <article className="pt-5 text-secondary text-justify"
                    style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}>
                        {post}
                    </article>
                </div>
            )}
        </>
    );
};

export default Post;