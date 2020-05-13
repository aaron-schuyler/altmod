import Axios from "@/axios";

export default {
    fetchPosts() {
        return Axios().get("posts");
    },
    getPostBySlug(params) {
        return Axios().get("posts/" + params.slug);
    }
};
