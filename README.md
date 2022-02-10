# Stock watch

Watch your favorite stocks.

## Back Story

I am someone who is really into the stock market and economics, I am not an expert but it is something that exists in me just like tech. I stumbled upon the project from [codementor.io/projects](https://www.codementor.io/projects/web/favorite-stocks-watcher-b0wexig802) called **Favorite stocks watcher** and I thought that this was something I am gonna use, So I tried building it.

## Development

|                        | Script Command   | Script                                              |
| ---------------------- | ---------------- | --------------------------------------------------- |
| **Development Server** | `npm run dev`    | vite                                                |
| **Production Build**   | `npm run build`  | vite build                                          |
| **Production Preview** | `npm run serve`  | vite preview                                        |
| **Lint**               | `npm run pretty` | prettier --write \"./\*_/_.{js,jsx,json,sass,css}\| |
| **Deploy**             | `vercel`         | first **`npm i -g vercel`** to use this command     |

## Deploy

Deployed Single Page App and API in **vercel**.<br/>
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
        "singleQuote": false,
        "semi": false,
        "bracketSameLine": false,
        "arrowParens": "always"
    }

File name : **.prettierignore**

    # Ignore artifacts:
    build
    dist
    coverage
    # Ignore all HTML files:
     *.html
