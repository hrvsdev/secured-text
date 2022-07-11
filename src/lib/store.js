import { writable } from "svelte/store";

export const showModal = writable(true)
export const showAddSiteModal = writable(true)
export const showAddPassModal = writable(false)
export const showEnterPassModal = writable(false)