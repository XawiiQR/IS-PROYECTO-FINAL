// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import PocketBase from "pocketbase";
declare global {
  namespace App {
    declare namespace App {
      interface Locals {
        pb: PocketBase;
      }
    }
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
