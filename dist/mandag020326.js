import { getUsers } from "../dist/mandagPart2020326.js";
window.addEventListener("load", () => {
    getUsers();
});
document.getElementById("getApi").addEventListener("click", () => {
    const token = "";
    fetch("/api/users", {
        headers: {
            Authorization: "Bearer " + token,
        },
    });
});
//# sourceMappingURL=mandag020326.js.map