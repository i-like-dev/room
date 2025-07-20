async function initLiff() {
  await liff.init({ liffId: "2007783385-8GwXyJ5A" });
  if (!liff.isLoggedIn()) {
    liff.login();
  }
}
