const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: (id: number) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;
