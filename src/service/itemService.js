import http from "@/http-common";

export default {
  getItems() {
    return http.get("/items");
  },
  getItem(id) {
    return http.get("/items/" + id);
  },
  postItem(newItem) {
    return http.post("/items/", newItem);
  },
  patchItem(id, itemUpdate) {
    return http.patch("/items/" + id, itemUpdate);
  },
  deleteItem(id) {
    return http.delete("/items/" + id);
  },
};
