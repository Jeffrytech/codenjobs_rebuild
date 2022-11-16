# TODOs

* We need proper metatags and <link> for mobile images, favicon.io etc like you did with nft.codenjobs.com []
* Dependency updates and remove unused ones if possible []
* Improve whatever you can with your skills and make the webiste more production ready []
* Better and organized way to handle notifications? []
* Organize and remove unused files at public/static []
* 404 page and proper error handling for <div>Verify there is correct id for the blog in the path.</div>, <div>Verify there is correct id for the job post in the path.</div> []
* Image optimization for loading []
* Use Twitter svg similar to the other login options, new cover for the whitepaper
* We should substitute logo, logo_white, logo_no_white (transparent) one at public/static to new logo and make it working ok and proper favicons for mobile devices at public/static/favicons, favicon should appear, currently not showing for this version
* Some images and components could be not working visually because of the next js version update and folders structure change, update them whenever you find an issue

```js
// import { 
//   useEffect, 
//   useMemo, 
//   useState
// } from 'react';
// // import { Cache } from 'three';

// const cachedImages = new Map<string, string>();
// export const useCachedImage = (uri: string, cacheMesh?: boolean) => {
//   const [cachedBlob, setCachedBlob] = useState<string | undefined>(undefined);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     if (!uri) {
//       return;
//     }

//     const result = cachedImages.get(uri);

//     if (result) {
//       setCachedBlob(result);
//       return;
//     }

//     (async () => {
//       let response: Response;
//       let blob: Blob;
//       try {
//         response = await fetch(uri, { cache: 'force-cache' });

//         blob = await response.blob();

//         if (blob.size === 0) {
//           throw new Error('No content');
//         }
//       } catch {
//         try {
//           response = await fetch(uri, { cache: 'reload' });
//           blob = await response.blob();
//         } catch {
//           // If external URL, just use the uri
//           if (uri?.startsWith('http')) {
//             setCachedBlob(uri);
//           }
//           setIsLoading(false);
//           return;
//         }
//       }

//       if (blob.size === 0) {
//         setIsLoading(false);
//         return;
//       }

//       if (cacheMesh) {
//         // extra caching for meshviewer
//         Cache.enabled = true;
//         Cache.add(uri, await blob.arrayBuffer());
//       }
//       const blobURI = URL.createObjectURL(blob);
//       cachedImages.set(uri, blobURI);
//       setCachedBlob(blobURI);
//       setIsLoading(false);
//     })();
//   }, [uri, setCachedBlob, setIsLoading]);

//   return { cachedBlob, isLoading };
// };
```

## TODO Before

* Remove commits or reset repository before invite others

## Deployment

* You can use $yarn build to see the deployment will work or not

```js
// next.config.js
typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true, // Set this to false if you want to solve the type issues
},
// experimental: {
//   esmExternals: "loose",
// },
// experimental: {
//   esmExternals: 'loose',
// },
eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true, // Set this to false if you want to solve the lint isssues
},
```

* To show the metatags for the users, it should be shown at the page source also (ctrl, option, u) and you can also test at metags.io website
