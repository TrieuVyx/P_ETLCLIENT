import checkExpiration from "./checkExpiration";
let reloadRouterCalled = false;

export default function ReloadRouter(e) {
    if (!reloadRouterCalled) {
        reloadRouterCalled = true;

        const tokenAccess = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        checkExpiration(refreshToken,tokenAccess)

        try {
          if (tokenAccess == null) {
            if (window.location.pathname !== "/login") {
                window.location.replace("/login");
              e.preventDefault();
            }
          } 
          else {
            setTimeout(() => {
              localStorage.removeItem("accessToken")
              localStorage.removeItem("refreshToken")
              if (window.location.pathname !== "/login") {
                window.location.replace("/login");
              }
            }, 1000);
          }
        } catch (err) {
          console.log("ERR");
        }
      }

}