// import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';


// export let appRoutes = {
//   outlets: ['auth', 'marketingPages']
// };

// export class StandardUrlSerializer implements UrlSerializer {
//     private _defaultUrlSerializer: DefaultUrlSerializer = new DefaultUrlSerializer();

//     parse(url: string): UrlTree {
//         appRoutes.outlets.forEach(outletName => {
//             const reg = new RegExp('/(' + outletName + ')/([^\/]*)');
//             url = url.replace(reg, '$1/($1:$2)' );
//         });
//         return this._defaultUrlSerializer.parse(url);
//     }

//     serialize(tree: UrlTree): string {
//         let url = this._defaultUrlSerializer.serialize(tree);
//         appRoutes.outlets.forEach(outletName => {
//             const reg = new RegExp('\\(' + outletName + ':([^\/]*)\\)');
//             url = url.replace(reg, '$1');
//         });
//         return url;
//     }
// }
