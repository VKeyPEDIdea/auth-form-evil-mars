interface Options {
  method: 'POST' | 'GET';
  body: string;
}

interface RequestBody {
  email: string;
  password: string;
}

interface SuccessResponse {
  ok: boolean;
  json: string;
}

interface EndpointHandler {
  [key: string]: (
    resolve: (value: SuccessResponse | PromiseLike<SuccessResponse>) => void,
    reject: (reason?: any) => void,
    body: string,
  ) => void;
}

const credentials: { [key: string]: string } = {};

const endpointHandlers: EndpointHandler = {
  '/api/login': (resolve, reject, body) => {
    const { email, password }: RequestBody = JSON.parse(body);
    if (credentials[email] === password) {
      resolve({
        ok: true,
        json: JSON.stringify({ message: 'Logged in successful!' }),
      });
    } else {
      reject(new Error('Login failed. Please try again.'));
    }
  },
  '/api/signup': (resolve, reject, body) => {
    const { email, password }: RequestBody = JSON.parse(body);
    if (credentials[email]) {
      reject(new Error('Account with this email already exist'));
    } else {
      credentials[email] = password;
      resolve({
        ok: true,
        json: JSON.stringify({ message: 'Signed up succesfully' }),
      });
    }
  },
};

const mockFetch = (
  url: string,
  { body, method }: Options,
): Promise<SuccessResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (method === 'POST') {
        const handler = endpointHandlers[url];
        if (handler) {
          handler(resolve, reject, body);
        } else {
          reject(new Error('Incorrect request'));
        }
      }
    }, 1000);
  });
};

export default mockFetch;
