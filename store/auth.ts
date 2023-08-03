export default defineStore("auth", () => {
  const username = useState("username", () => "");
  const email = useState("email", () => "");
  const password = useState("password", () => "");
  const repeatedPassword = useState("repeatedPassword", () => "");
  const accept = useState("accept", () => false);

  const sendRequest = async (data: IRequestData) => {
    const config = useRuntimeConfig();
    const url = config.public.requestUrl + "/auth/login";

    return await useAsyncData("auth", () =>
      $fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: data,
      })
    );
  };

  return {
    accept,
    username,
    email,
    password,
    repeatedPassword,
    sendRequest,
  };
});

interface IRequestData {
  email?: string;
  password?: string;
  username?: string;
  otp?: string;
  accept?: boolean;
  code?: string;
}
