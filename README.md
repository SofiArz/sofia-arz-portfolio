This portfolio is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is a static web page project. To run it locally:

```bash
npm i
# and
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy 
I chose Cloudflare to host the page. It is a good free hosting option that handles security and continuous integration matters, so one can focus on developing.
Since it is a static project, I had to change the output mode inside next.config.js before deploying.
Reference for that small config [here](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
