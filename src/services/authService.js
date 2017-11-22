export function login(email, password, rememberMe) {
  return new Promise((resolve, reject) => {
    if (email === "f@baroni.tech") {
      return resolve(true);
    }
    return resolve(false);
  });
}

export default function() {
  return {
    login
  };
}
