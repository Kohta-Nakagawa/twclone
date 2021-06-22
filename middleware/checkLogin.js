export default async function({ redirect, app }) {
  if (await app.$auth()) {
    alert("ログインしてるよ！トップに移動するね");
    // ログイン中だったらTOPページに遷移する
    redirect("/");
  }
}
