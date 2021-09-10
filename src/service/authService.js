import http from "@/http-common";

export default {
  login(loginDto) {
    return http.post("/auth/login", loginDto);
  },
};
