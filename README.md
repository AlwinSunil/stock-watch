# Stock watch

Watch your favorite stocks.

## Development

|                        | Script Command   | Script                                              |
| ---------------------- | ---------------- | --------------------------------------------------- |
| **Development Server** | `npm run dev`    | vite                                                |
| **Production Build**   | `npm run build`  | vite build                                          |
| **Production Preview** | `npm run serve`  | vite preview                                        |
| **Lint**               | `npm run pretty` | prettier --write \"./\*_/_.{js,jsx,json,sass,css}\| |
| **Deploy**             | `vercel`         | first **`npm i -g vercel`** to use this command     |

## Deploy

Deployed in **vercel**.<br/>
[Link to the project, (Temporary)](https://stock-watch-vitejs.vercel.app/)

## Configuration

| Config     | Value                                              |
| ---------- | -------------------------------------------------- |
| Build tool | `[vitejs](https://vitejs.dev/guide)`               |
| Linter     | `[prettier`](https://prettier.io/docs/en/cli.html) |

## Prettier Configuration

Both files should be in **`root`** directory of the project
<br/>
File Name: **.prettierrc**

    {
       "tabWidth": 4,
       "singleQuote": false
    }

File name : **.prettierignore**

    # Ignore artifacts:
    build
    dist
    coverage
    # Ignore all HTML files:
     *.html
