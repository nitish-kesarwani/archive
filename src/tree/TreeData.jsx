const TreeData = [
  {
    name: ".vscode",
    children: [
      {
        name: "extensions.json",
      },
      {
        name: "settings.json",
      },
    ],
  },
  {
    name: "node_modules",
    children: [
      {
        name: ".bin",
        children: [
          {
            name: "acorn.cmd",
          },
          {
            name: "ansi-html",
          },
          {
            name: "atob.cmd",
          },
        ],
      },
      {
        name: ".cache",
        children: [
          {
            name: "babel-loader",
          },
          {
            name: "default-development",
          },
        ],
      },
      {
        name: "@types",
        children: [
          {
            name: "babel__core",
            children: [
              {
                name: "node_modules",
              },
              {
                name: "index.d.ts",
              },
            ],
          },
          {
            name: "babel__generator",
            children: [
              {
                name: "index.t.ts",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "src",
    children: [
      {
        name: "home",
        children: [
          {
            name: "HomeView.jsx",
          },
          {
            name: "HomeView.styles.jsx",
          },
        ],
      },
      {
        name: "login",
        children: [
          {
            name: "LoginView.jsx",
          },
          {
            name: "LoginView.styles.jsx",
          },
        ],
      },
      {
        name: "routers",
        children: [
          {
            name: "AuthRoute.jsx",
          },
          {
            name: "PrivateRoute.jsx",
          },
        ],
      },
    ],
  },
  {
    name: "package-lock.json",
  },
  {
    name: "package.json",
  },
  {
    name: "README.md",
  },
];
export default TreeData;
