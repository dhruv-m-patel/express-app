## express-app

A base express app with configuration support for your API or web app

### Setup

```
$ git clone git@github.com:dhruv-m-patel/express-app.git
$ cd express-app
$ npm install
$ cp .env.example .env
$ npm run start-dev
```

### Using this app

- Install the package:

  ```
  npm install @dhruv-m-patel/express-app
  ```

- Import the app

  ```
  import ExpressApp from '@dhruv-m-patel/express-app';
  ```

- Run the app

  ```
  const app = new ExpressApp();

  // starting the app
  app.start().then((port) => {
    console.log(`App started on port ${port}`);
  });

  // stopping the app
  app.stop();
  ```

### Adding new middleware

You can add new middleware following [`meddleware` package documentation](https://github.com/krakenjs/meddleware)

**Example:** Adding directory-based routing support

Install express-enrouten:

```
npm install express-enrouten -S
```

Edit `config/config.js` in your application adding following block of code in `meddleware` section:

```
"routes": {
  "priority": 40,
  "module": {
    "name": "express-enrouten",
    "arguments": [
      {
        "directory": "codepath:./server/routes"
      }
    ]
  }
},
```

**Example:** Adding a middleware using source file:

Assuming you have a middleware file placed in `src/middleware/yourMiddleware.js`:

```
export default function () {
  return function yourMiddleware (req, res, next) {
    ...
  };
}
```

Add following entry to the config file `config/config.js` in `meddleware` section:

```
"yourMiddleware": {
  "priority": 100,
  "module": {
    "name": "codepath:./middlewares/yourMiddleware",
    "method": "default"
  }
}
```
