// @todo Split vendors
//
// async function boot () {
//   try {
//     await import('./vendor')
//
//     await import('./app')
//   } catch (e) {
//     ((console && console.error) || console.log || ((v) => v))(`error: ${e.toString()}`, e)
//   }
// }
//
// boot()

import './vendor'

import './app'
