export async function registerSW() {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.getRegistration("/");
            if (!registration) {
                await navigator.serviceWorker.register("/service-worker.js", {
                    scope: "/",
                });

                console.log(`SW Registration successful`);
            }

        } catch (e) {
            console.warn(`SW Registration failed: ${e}`);
        }
    }
}
