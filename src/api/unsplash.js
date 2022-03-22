import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID O873uH52NtovKnuhPKeGCkDV2Z4C2CsGP8IBMV6-3l4",
  },
});
