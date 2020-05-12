import Axios from "@/axios";

export default {
    fetchPosts() {
        return Axios().get("posts");
    }
};
