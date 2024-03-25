export default {
    fetchUser ({commit}) {
        return new Promise((resolve, reject) => {
            commit("setUser")
            resolve();
            console.log(reject);
        })
    }
}